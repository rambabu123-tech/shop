import { useState, useEffect } from 'react'

import CustomCard from './components/CustomCard'
import './App.css'
import _ from 'lodash';


import {serverURL} from './constants'
import CustomChip from './components/CustomChip';
import CompanyStats from './components/CompanyStats'

function App() {
  const [editDistanceDidYouMean, setEditDistanceDidYouMean] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [bestDeal, setbestDeal] = useState();
  // search component
  const [finalSearchValue, setFinalSearchValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const isSmallScreen = window.innerWidth <= 600;

  const fetchFilteredProducts = async (searchTerm) => {
    try {
      const response = await fetch(serverURL + "getProductsByName/" + searchTerm);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setFilteredProducts(data);
    } catch (error) {
      console.error('Error fetching filtered products:', error.message);
    }
  };


const incrementProductClickCount = async (index, productName, productURL) => {
  console.log("INDEX", index)
  window.open(productURL, '_blank');
  try {
    const response = await fetch(serverURL + 'incrementproductclickcount', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body:productName,
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // find the product in the original array
    // if product is the best deal the index will be -1 so well increment the bestDeal product
    if(index == -1){
      // increment the best deal product
      bestDeal.productClickCount += 1;
      setbestDeal(bestDeal)
    }
    else{
      const temp = [...filteredProducts];
      temp[index].productClickCount += 1;
      temp.sort((a, b) => b.productClickCount - a.productClickCount);
  
      setFilteredProducts(temp)
    }
    // fetchData();
    
  } catch (error) {
    console.error('Error incrementing search count:', error.message);
  }
};

  // Get all products data and set it to products and filtered products (to show all products  in the start)
  const fetchData = async () => {
    try {
      const response = await fetch(serverURL);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data)
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  const handleDidYouMeanClick = (suggestion) => {
    // Set the selected suggestion as the query
    setFinalSearchValue(suggestion);
    // Clear suggestions
    setSuggestions([]);
  };

  const handleSuggestionClick = (suggestion) => {
    // Set the selected suggestion as the query
    setFinalSearchValue(suggestion);
    // Clear suggestions
    setSuggestions([]);
  };

  // called everytime user searches something or products array changes
  // Adds search term to SearchCounts Table
  // Uses edit distance to find similar words
  async function onEveryValidSearch(searchTerm){
    if (searchTerm == ""){
      setFilteredProducts(products);
      return
    }
    
      fetchFilteredProducts(searchTerm.toLowerCase())
      fetchBestDeal(searchTerm);

    try {
      // edit distance
      try {
        const response = await fetch(serverURL + 'wordchecker/' + searchTerm);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setEditDistanceDidYouMean(data)
        if (data.length != 0){
          return
        }
      } catch (error) {

      }

      const response = await fetch(serverURL + 'searchCount', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(searchTerm.toLowerCase()),
      });


      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error('Error incrementing search count:', error.message);
    }
  }



  // called everytime user searches something or products array changes
  useEffect(() => {
    setSearchValue(finalSearchValue)
    onEveryValidSearch(finalSearchValue);
  }, [finalSearchValue]);


  const fetchSuggestions = async (value) => {
    try {
      const response = await fetch(serverURL + 'getSearchSuggestions/' + value);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setSuggestions(data);

    } catch (error) {
      console.error('Error fetching search suggestions:', error.message);
    }
  };


  const fetchBestDeal = async (value) => {
    try {
      const response = await fetch(serverURL + 'getBestDeal/' + value);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      if (data.length != 0){  
          setbestDeal(data);
          console.log("BEST DEAT", data)
        return
      }

    } catch (error) {
      setbestDeal(false);
      console.error('Error fetching best deal:', error.message);
    }
  };

  const fetchSuggestionsDebounced = _.debounce((inputValue) => {
    fetchSuggestions(inputValue.toLowerCase());
  }, 800);

  const handleSearchChange = (event) => {
    const inputValue = event.target.value;
    setSearchValue(inputValue);
    fetchFilteredProducts(inputValue)
    setbestDeal(false)
    if(inputValue != "")
    {
      fetchSuggestionsDebounced(inputValue.toLowerCase())
    }
    else{
      setSuggestions([])
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      setFinalSearchValue(searchValue)
      fetchSuggestionsDebounced.cancel()
      setSuggestions([]);
    }
  };


  return (
    <>
  <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // height: '10h',
        backgroundColor: '#f5f5f5',
      }}
    >
      <div style={{ position: 'relative', width: '100%' }}>
        <input
          type="text"
          value={searchValue}
          onChange={handleSearchChange}
          onKeyDown={handleKeyPress}
          placeholder="Search..."
          style={{
            width: '100%',
            padding: '10px',
            fontSize: '16px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            boxSizing: 'border-box',
            backgroundColor: 'white',
            color:"black"
          }}
        />
        {suggestions.length > 0 && (
          <ul
            style={{
              listStyle: 'none',
              padding: '0',
              margin: '0',
              position: 'absolute',
              top: '100%',
              left: '0',
              width: '100%',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              background: '#fff',
              zIndex: '100',
              borderRadius: '5px',
              color:' black'
            }}
          >
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                style={{
                  padding: '10px',
                  borderBottom: '1px solid #ccc',
                  cursor: 'pointer',
                }}
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>

      <div style={{margin:10}}>
      
      <CustomChip finalSearchValue= {finalSearchValue} setFinalSearchValue={setFinalSearchValue}></CustomChip>
      </div>
      <div style={{ display: 'flex', marginLeft: 20, color: 'red', alignItems:'center' }}>
      {editDistanceDidYouMean.length >0 ? <h4 style={{ margin: 0, cursor: 'pointer' }}>Did you mean ?</h4> : <></>}
      {editDistanceDidYouMean.length >0 && editDistanceDidYouMean.map((item) =>
            <a href="#" style={{  margin: 10, textDecoration: 'none' }} onClick={()=> handleDidYouMeanClick(item)}>
            <h5 style={{color: 'dark-blue', margin: 0, cursor: 'pointer', textDecoration: 'underline' }}>{item}</h5>
          </a>
          )}
    </div>
    <div style={{  flexGrow:1}}>

    <CompanyStats finalSearchValue={finalSearchValue}></CompanyStats>
    </div>
    <div  style={{...{ display:'flex',flexWrap: 'wrap'},...{ flexDirection: isSmallScreen ? 'column' : 'row'}}}>
    {/* {bestDeal ? <></> : <h3 style={{color:"black", textAlign:'center', width:'100%'}}>No best deals</h3>} */}
      {bestDeal && 
        <CustomCard
          bestDeal ={bestDeal}
          incrementProductClickCount={incrementProductClickCount}
          productName={bestDeal.productName}
          productSellingPrice={bestDeal.productSellingPrice}
          productComparisonDetails={bestDeal.productComparisonDetails}
          productThumbnail={bestDeal.productThumbnail}
          productURL={bestDeal.productURL}
          productClickCount = {bestDeal.productClickCount}
          fetchData={fetchData}
          dateScraped = {bestDeal.id.date}
          index={-1}
        />
      }
      {filteredProducts.length == 0 ? <h3 style={{color:"black", textAlign:'center', width:'100%'}}>Product Currently not available, please come back in an hour to find results</h3>: <></>}
      {filteredProducts.filter((product)=>  product.productName != (bestDeal ? bestDeal.productName: '')).slice(0, 100).map((product, index) => (
        <CustomCard
          bestDeal ={false}
          incrementProductClickCount={incrementProductClickCount}
          key={index}
          index={index}
          productName={product.productName}
          productSellingPrice={product.productSellingPrice}
          productComparisonDetails={product.productComparisonDetails}
          productThumbnail={product.productThumbnail}
          productURL={product.productURL}
          productClickCount = {product.productClickCount}
          fetchData={fetchData}
          dateScraped = {product.id.date}
        />
      ))}
    </div>
    </>
  );

}

export default App;
