// import { useState, useEffect } from 'react'
// import {serverURL} from '../constants'
// import Chip from '@mui/material/Chip';
// import Avatar from '@mui/material/Avatar';

// function CustomChip({setFinalSearchValue, finalSearchValue}){
//   // chip component
// //   const [updateCommonWords, setUpdateCommonWords] = useState(null);
//   const [topSearchItems, settopSearchItems] = useState([{searchTerm:'apples', count:'10'},{searchTerm:'apples', count:'10'},{searchTerm:'apples', count:'10'},{searchTerm:'apples', count:'10'}]);



//   const getSearchTerms = async () => {
//     // For chip component
//     try {
//       const response = await fetch(serverURL + 'topSearchTerms');
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await response.json();
//       settopSearchItems(data)
//     } catch (error) {
//       setError(error);
//       setLoading(false);
//     }
//     // for search drop down
//     try {
//       const response = await fetch(serverURL + 'allSearchCounts');
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await response.json();
//     } catch (error) {
//       setError(error);
//     }
//   };

//   useEffect(() => {
//     setTimeout(getSearchTerms, 500)
//   },[finalSearchValue])
  

//   useEffect(() => {
//     getSearchTerms();
//   },[])
    
//     return (<>
//     {topSearchItems.map((searchedItem, index) =>
//       <Chip 
//       key={index}
//       disabled = { finalSearchValue && ( searchedItem.searchTerm.toLowerCase() == (finalSearchValue.toLowerCase()))}
//       avatar={<Avatar style={{backgroundColor: '#1976d2', color:'white'}}>{searchedItem.searchCount}</Avatar>}
//       label={searchedItem.searchTerm} variant="outlined" onClick={()=> {setFinalSearchValue(searchedItem.searchTerm)}} style={{margin:2, textTransform: 'capitalize' }}/>
//       )}
//     </>);
// }


// export default CustomChip;




import { useState, useEffect } from 'react';
import { serverURL } from '../constants';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/system';

const CustomChipWrapper = styled(Chip)({
  margin: '4px',
  '&.MuiChip-outlined': {
    borderColor: '#2C3E50', // Border color
  },
  '&.Mui-disabled': {
    opacity: 0.7, // Reduce opacity for disabled state
    cursor: 'not-allowed',
  },
  '&:hover': {
    backgroundColor: '#116466', // Hover background color
  },
});

const CustomChip = ({ setFinalSearchValue, finalSearchValue }) => {
  const [topSearchItems, setTopSearchItems] = useState([]);

  const getSearchTerms = async () => {
    try {
      const response = await fetch(serverURL + 'topSearchTerms');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setTopSearchItems(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setTimeout(getSearchTerms, 500);
  }, [finalSearchValue]);

  useEffect(() => {
    getSearchTerms();
  }, []);

  return (
    <>
      {topSearchItems.map((searchedItem, index) => (
        <CustomChipWrapper
          key={index}
          disabled={finalSearchValue && searchedItem.searchTerm.toLowerCase() === finalSearchValue.toLowerCase()}
          avatar={<Avatar style={{ backgroundColor: '#1976d2', color: 'white' }}>{searchedItem.searchCount}</Avatar>}
          label={searchedItem.searchTerm}
          variant="outlined"
          onClick={() => {
            setFinalSearchValue(searchedItem.searchTerm);
          }}
          style={{ textTransform: 'capitalize' }}
        />
      ))}
    </>
  );
};

export default CustomChip;
