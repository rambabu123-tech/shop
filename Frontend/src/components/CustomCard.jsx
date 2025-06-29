// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import { Button } from '@mui/material';


// const isSmallScreen = window.innerWidth <= 600;
// function CustomCard({bestDeal, incrementProductClickCount, index, productThumbnail, productName, productSellingPrice, productComparisonDetails, onButtonClick, productClickCount, dateScraped, productURL, fetchData}){

//     const getCardStyle = () => {
//       let style = isSmallScreen ? { width: '100%'}: { width: '32%', margin:'10px' }
//       if(bestDeal){
//         style.boxShadow = '0 0 20px rgba(173, 216, 230, 0.9)'
//       }
//       return style
//     }
    
//     return (
      
//     <Card  style={getCardStyle()} className='bestdeal'>
//       {bestDeal ?
//       <div className='slant-line'></div>
//       :<></>
//       }

//       <CardContent style={{ textAlign: 'center' }}>
//         {/* {bestDeal ?
//                 <Typography variant="h5" component="div" style={{backgroundColor:'red'}}>
//                 Best Deal
//               </Typography>
//               :
//               <></>} */}
//         <img src={productThumbnail} alt="Product Thumbnail"  />
//         <Typography variant="h5" component="div">
//           {productName.split("-")[1]}

//           {/* {productName} */}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Selling Price: {productSellingPrice}
//         </Typography>
//         <Typography variant="body3" color="text.secondary">
//           Date: {dateScraped}
//         </Typography>
//         <Button variant="contained" fullWidth onClick={() => incrementProductClickCount(index, productName, productURL)}>
//           View :{productClickCount}
//         </Button>
//       </CardContent>
//     </Card>);
// }


// export default CustomCard;










// import React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles((theme) => ({
//   card: {
//     width: isSmallScreen ? '100%' : '32%',
//     margin: '10px',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//     borderRadius: '12px',
//     overflow: 'hidden',
//     transition: 'transform 0.3s ease-in-out',
//     '&:hover': {
//       transform: 'scale(1.05)',
//     },
//   },
//   bestDeal: {
//     boxShadow: '0 0 20px rgba(173, 216, 230, 0.9)',
//   },
//   slantLine: {
//     position: 'relative',
//     top: 2,
//     left: 2,
//     width: '4%',
//     height: '4%',
//     background: 'linear-gradient(to bottom right, transparent 49.5%, rgba(173, 216, 230, 0.7) 50%)',
//     zIndex: 100,
//   },
//   cardContent: {
//     textAlign: 'center',
//   },
//   thumbnail: {
//     width: '100%',
//     height: 'auto',
//     borderRadius: '8px',
//     marginBottom: '10px',
//   },
//   productName: {
//     fontSize: '1.5rem',
//     fontWeight: 'bold',
//     color: theme.palette.primary.main,
//     marginTop: '8px',
//   },
//   sellingPrice: {
//     fontSize: '1.2rem',
//     color: theme.palette.secondary.main,
//     marginBottom: '8px',
//   },
//   dateScraped: {
//     fontSize: '0.8rem',
//     color: theme.palette.text.secondary,
//   },
//   viewButton: {
//     marginTop: '10px',
//     backgroundColor: theme.palette.primary.main,
//     color: theme.palette.common.white,
//     '&:hover': {
//       backgroundColor: theme.palette.primary.dark,
//     },
//   },
// }));

// const isSmallScreen = window.innerWidth <= 600;

// function CustomCard({
//   bestDeal,
//   incrementProductClickCount,
//   index,
//   productThumbnail,
//   productName,
//   productSellingPrice,
//   dateScraped,
//   productURL,
//   productClickCount,
//   fetchData,
// }) {
//   const classes = useStyles();

//   return (
//     <Card className={`${classes.card} ${bestDeal ? classes.bestDeal : ''}`}>
//       {bestDeal && <div className={classes.slantLine}></div>}

//       <CardContent className={classes.cardContent}>
//         <img src={productThumbnail} alt="Product Thumbnail" className={classes.thumbnail} />
//         <Typography variant="h5" component="div" className={classes.productName}>
//           {productName.split('-')[1]}
//         </Typography>
//         <Typography variant="body2" className={classes.sellingPrice}>
//           ${productSellingPrice}
//         </Typography>
//         <Typography variant="body3" className={classes.dateScraped}>
//           Date: {dateScraped}
//         </Typography>
//         <Button
//           variant="contained"
//           fullWidth
//           className={classes.viewButton}
//           onClick={() => incrementProductClickCount(index, productName, productURL)}
//         >
//           View: {productClickCount}
//         </Button>
//       </CardContent>
//     </Card>
//   );
// }

// export default CustomCard;




// import React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import { styled } from '@mui/system';

// const isSmallScreen = window.innerWidth <= 600;

// const CustomCardContainer = styled(Card)({
//   width: isSmallScreen ? '100%' : '32%',
//   margin: '10px',
//   boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//   borderRadius: '12px',
//   overflow: 'hidden',
//   transition: 'transform 0.3s ease-in-out',
//   '&:hover': {
//     transform: 'scale(1.05)',
//   },
// });

// const SlantLine = styled('div')({
//   position: 'relative',
//   top: 2,
//   left: 2,
//   width: '4%',
//   height: '4%',
//   background: 'linear-gradient(to bottom right, transparent 49.5%, rgba(173, 216, 230, 0.7) 50%)',
//   zIndex: 100,
// });

// const CustomCardContent = styled(CardContent)({
//   textAlign: 'center',
// });

// const Thumbnail = styled('img')({
//   width: '100%',
//   height: 'auto',
//   borderRadius: '8px',
//   marginBottom: '10px',
// });

// const ProductName = styled(Typography)({
//   fontSize: '1.5rem',
//   fontWeight: 'bold',
//   color: (theme) => theme.palette.primary.main,
//   marginTop: '8px',
// });

// const SellingPrice = styled(Typography)({
//   fontSize: '1.2rem',
//   color: (theme) => theme.palette.secondary.main,
//   marginBottom: '8px',
// });

// const DateScraped = styled(Typography)({
//   fontSize: '0.8rem',
//   color: (theme) => theme.palette.text.secondary,
// });

// const ViewButton = styled(Button)({
//   marginTop: '10px',
//   backgroundColor: (theme) => theme.palette.primary.main,
//   color: (theme) => theme.palette.common.white,
//   '&:hover': {
//     backgroundColor: (theme) => theme.palette.primary.dark,
//   },
// });

// function CustomCard({
//   bestDeal,
//   incrementProductClickCount,
//   index,
//   productThumbnail,
//   productName,
//   productSellingPrice,
//   dateScraped,
//   productURL,
//   productClickCount,
//   fetchData,
// }) {
//   return (
//     <CustomCardContainer>
//       {bestDeal && <SlantLine></SlantLine>}

//       <CustomCardContent>
//         <Thumbnail src={productThumbnail} alt="Product Thumbnail" />
//         <ProductName>{productName.split('-')[1]}</ProductName>
//         <SellingPrice>${productSellingPrice}</SellingPrice>
//         <DateScraped>Date: {dateScraped}</DateScraped>
//         <ViewButton
//           variant="contained"
//           fullWidth
//           onClick={() => incrementProductClickCount(index, productName, productURL)}
//         >
//           View: {productClickCount}
//         </ViewButton>
//       </CustomCardContent>
//     </CustomCardContainer>
//   );
// }

// export default CustomCard;



// import React from 'react';
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import { styled } from '@mui/system';

// const isSmallScreen = window.innerWidth <= 600;

// const CustomCardContainer = styled(Paper)(({ theme }) => ({
//   width: isSmallScreen ? '100%' : '32%',
//   margin: '10px',
//   borderRadius: '12px',
//   overflow: 'hidden',
//   transition: 'transform 0.3s ease-in-out',
//   '&:hover': {
//     transform: 'scale(1.05)',
//   },
//   boxShadow: theme.shadows[5], // Adjust the shadow level as needed
// }));

// const SlantLine = styled('div')({
//   position: 'relative',
//   top: 2,
//   left: 2,
//   width: '4%',
//   height: '4%',
//   background: 'linear-gradient(to bottom right, transparent 49.5%, rgba(173, 216, 230, 0.7) 50%)',
//   zIndex: 100,
// });

// const CustomCardContent = styled('div')({
//   textAlign: 'center',
//   padding: '16px',
// });

// const Thumbnail = styled('img')({
//   width: '100%',
//   height: 'auto',
//   borderRadius: '8px',
//   marginBottom: '10px',
// });

// const ProductName = styled(Typography)({
//   fontSize: '1.5rem',
//   fontWeight: 'bold',
//   color: (theme) => theme.palette.primary.main,
//   marginTop: '8px',
// });

// const SellingPrice = styled(Typography)({
//   fontSize: '1.2rem',
//   color: (theme) => theme.palette.secondary.main,
//   marginBottom: '8px',
// });

// const DateScraped = styled(Typography)({
//   fontSize: '0.8rem',
//   color: (theme) => theme.palette.text.secondary,
// });

// const ViewButton = styled(Button)({
//   marginTop: '10px',
//   backgroundColor: (theme) => theme.palette.primary.main,
//   color: (theme) => theme.palette.common.white,
//   '&:hover': {
//     backgroundColor: (theme) => theme.palette.primary.dark,
//   },
// });

// function CustomCard({
//   bestDeal,
//   incrementProductClickCount,
//   index,
//   productThumbnail,
//   productName,
//   productSellingPrice,
//   dateScraped,
//   productURL,
//   productClickCount,
//   fetchData,
// }) {
//   return (
//     <CustomCardContainer elevation={3}>
//       {bestDeal && <SlantLine></SlantLine>}

//       <CustomCardContent>
//         <Thumbnail src={productThumbnail} alt="Product Thumbnail" />
//         <ProductName>{productName.split('-')[1]}</ProductName>
//         <SellingPrice>${productSellingPrice}</SellingPrice>
//         <DateScraped>Date: {dateScraped}</DateScraped>
//         <ViewButton
//           variant="contained"
//           fullWidth
//           onClick={() => incrementProductClickCount(index, productName, productURL)}
//         >
//           View: {productClickCount}
//         </ViewButton>
//       </CustomCardContent>
//     </CustomCardContainer>
//   );
// }

// export default CustomCard;



// import React from 'react';
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import { makeStyles } from '@mui/styles';

// const isSmallScreen = window.innerWidth <= 600;

// const useStyles = makeStyles((theme) => ({
//   customCardContainer: {
//     width: isSmallScreen ? '100%' : '32%',
//     margin: '10px',
//     borderRadius: '12px',
//     overflow: 'hidden',
//     transition: 'transform 0.3s ease-in-out',
//     '&:hover': {
//       transform: 'scale(1.05)',
//     },
//     boxShadow: theme.shadows[5],
//   },
//   slantLine: {
//     position: 'relative',
//     top: 2,
//     left: 2,
//     width: '4%',
//     height: '4%',
//     background: 'linear-gradient(to bottom right, transparent 49.5%, rgba(173, 216, 230, 0.7) 50%)',
//     zIndex: 100,
//   },
//   customCardContent: {
//     textAlign: 'center',
//     padding: '16px',
//   },
//   thumbnail: {
//     width: '100%',
//     height: 'auto',
//     borderRadius: '8px',
//     marginBottom: '10px',
//   },
//   productName: {
//     fontSize: '1.5rem',
//     fontWeight: 'bold',
//     color: theme.palette.primary.main,
//     marginTop: '8px',
//   },
//   sellingPrice: {
//     fontSize: '1.2rem',
//     color: theme.palette.secondary.main,
//     marginBottom: '8px',
//   },
//   dateScraped: {
//     fontSize: '0.8rem',
//     color: theme.palette.text.secondary,
//   },
//   viewButton: {
//     marginTop: '10px',
//     backgroundColor: theme.palette.primary.main,
//     color: theme.palette.common.white,
//     '&:hover': {
//       backgroundColor: theme.palette.primary.dark,
//     },
//   },
// }));

// function CustomCard({
//   bestDeal,
//   incrementProductClickCount,
//   index,
//   productThumbnail,
//   productName,
//   productSellingPrice,
//   dateScraped,
//   productURL,
//   productClickCount,
//   fetchData,
// }) {
//   const classes = useStyles();

//   return (
//     <Paper className={classes.customCardContainer} elevation={3}>
//       {bestDeal && <div className={classes.slantLine}></div>}

//       <div className={classes.customCardContent}>
//         <img className={classes.thumbnail} src={productThumbnail} alt="Product Thumbnail" />
//         <Typography className={classes.productName}>{productName.split('-')[1]}</Typography>
//         <Typography className={classes.sellingPrice}>${productSellingPrice}</Typography>
//         <Typography className={classes.dateScraped}>Date: {dateScraped}</Typography>
//         <Button
//           className={classes.viewButton}
//           variant="contained"
//           fullWidth
//           onClick={() => incrementProductClickCount(index, productName, productURL)}
//         >
//           View: {productClickCount}
//         </Button>
//       </div>
//     </Paper>
//   );
// }

// export default CustomCard;




// import React from 'react';
// import styled from '@emotion/styled';

// const isSmallScreen = window.innerWidth <= 600;

// const CustomCardContainer = styled.div`
//   height: 420px;
//   width: ${isSmallScreen ? '100%' : '32%'};
//   margin: 10px;
//   border-radius: 7px;
//   box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
//   display: flex;
//   overflow: hidden;
//   transition: transform 0.3s ease-in-out;

//   &:hover {
//     transform: scale(1.05);
//   }
// `;

// const ProductImage = styled.img`
//   border-radius: 7px 0 0 7px;
//   height: 100%;
// `;

// const ProductInfo = styled.div`
//   height: 100%;
//   border-radius: 0 7px 7px 0;
//   background-color: #ffffff;
//   display: flex;
//   flex-direction: column;
// `;

// const ProductText = styled.div`
//   padding: 20px;
// `;

// const ProductTitle = styled.h1`
//   margin: 0;
//   font-size: 34px;
//   color: #474747;
//   font-family: 'Bentham', serif;
// `;

// const ProductSubtitle = styled.h2`
//   margin: 0 0 20px 0;
//   font-size: 13px;
//   font-family: 'Raleway', sans-serif;
//   font-weight: 400;
//   text-transform: uppercase;
//   color: #d2d2d2;
//   letter-spacing: 0.2em;
// `;

// const ProductDescription = styled.p`
//   margin: 0;
//   font-family: 'Playfair Display', serif;
//   color: #8d8d8d;
//   line-height: 1.7em;
//   font-size: 15px;
//   font-weight: lighter;
//   overflow: hidden;
// `;

// const PriceButtonContainer = styled.div`
//   margin-top: 17px;
//   display: flex;
//   align-items: center;
// `;

// const Price = styled.p`
//   display: inline-block;
//   font-family: 'Trocchi', serif;
//   margin: 0;
//   font-size: 28px;
//   font-weight: lighter;
//   color: #474747;
// `;

// const PriceAmount = styled.span`
//   display: inline-block;
//   font-family: 'Suranna', serif;
//   font-size: 34px;
// `;

// const BuyButton = styled.button`
//   margin-left: auto;
//   height: 50px;
//   width: 176px;
//   margin-right: 16px;
//   box-sizing: border-box;
//   border: transparent;
//   border-radius: 60px;
//   font-family: 'Raleway', sans-serif;
//   font-size: 14px;
//   font-weight: 500;
//   text-transform: uppercase;
//   letter-spacing: 0.2em;
//   color: #ffffff;
//   background-color: #9cebd5;
//   cursor: pointer;
//   outline: none;

//   &:hover {
//     background-color: #79b0a1;
//   }
// `;

// const CustomCard = ({
//   bestDeal,
//   incrementProductClickCount,
//   index,
//   productThumbnail,
//   productName,
//   productSellingPrice,
//   dateScraped,
//   productURL,
//   productClickCount,
//   fetchData,
// }) => {
//   return (
//     <CustomCardContainer>
//       <ProductImage src={productThumbnail} alt="Product Thumbnail" />
//       <ProductInfo>
//         <ProductText>
//           <ProductTitle>{productName.split('-')[1]}</ProductTitle>
//           <ProductSubtitle>by studio and friends</ProductSubtitle>
//           <ProductDescription>
//             Harvest Vases are a reinterpretation of peeled fruits and vegetables as functional objects. The surfaces
//             appear to be sliced and pulled aside, allowing room for growth.
//           </ProductDescription>
//         </ProductText>
//         <PriceButtonContainer>
//           <Price>
//             <PriceAmount>78</PriceAmount>$
//           </Price>
//           <BuyButton type="button">buy now</BuyButton>
//         </PriceButtonContainer>
//       </ProductInfo>
//     </CustomCardContainer>
//   );
// };

// export default CustomCard;



// import React from 'react';
// import styled from 'styled-components';

// const CustomCardContainer = styled.div`
//   width: 23%;
//   border-radius: 2%;
//   margin: 1%;
//   transition: box-shadow 0.3s ease-in-out;

//   &:hover {
//     box-shadow: 1.5px 1.5px 2.5px 3px rgba(0, 0, 0, 0.4);
//     -webkit-box-shadow: 1.5px 1.5px 2.5px 3px rgba(0, 0, 0, 0.4);
//     -moz-box-shadow: 1.5px 1.5px 2.5px 3px rgba(0, 0, 0, 0.4);
//   }
// `;

// const ImageBox = styled.div`
//   width: 100%;
//   overflow: hidden;
//   border-radius: 2% 2% 0 0;
// `;

// const Images = styled.div`
//   height: 15em;
//   background-size: cover;
//   background-position: center center;
//   background-repeat: no-repeat;
//   border-radius: 2% 2% 0 0;
//   transition: all 1s ease;

//   &:hover {
//     transform: scale(1.2);
//     overflow: hidden;
//     border-radius: 2%;
//   }
// `;

// const ProductTextBox = styled.div`
//   width: 100%;
//   float: left;
//   border: 0.01em solid #dddbdb;
//   border-radius: 0 0 2% 2%;
//   padding: 1em;
// `;

// const ProductTitle = styled.h2`
//   float: left;
//   font-family: 'Roboto', sans-serif;
//   font-weight: 400;
//   font-size: 1em;
//   text-transform: uppercase;
//   margin: 0.2em auto;
//   width: 100%;
//   text-align: center;
// `;

// const ProductPrice = styled.h3`
//   float: left;
//   font-family: 'Roboto', sans-serif;
//   font-weight: 400;
//   font-size: 1em;
//   text-align: center;
//   color: Grey;
//   clear: left;
//   width: 100%;
// `;

// const ProductDescription = styled.p`
//   float: left;
//   width: 100%;
//   font-family: 'Roboto', sans-serif;
//   font-weight: 300;
//   font-size: 1em;
//   text-align: center;
//   margin: 0.2em auto;
// `;

// const Label = styled.label`
//   float: left;
//   width: 60%;
// `;

// const QuantityInput = styled.input`
//   float: left;
//   width: 15%;
//   clear: none;
// `;

// const AddToCartButton = styled.button`
//   float: left;
//   margin-top: 1em;
//   padding: 2%;
//   background-color: #dfd;
//   border: none;
//   border-radius: 2%;
//   transition: bottom 0.3s ease-in-out;

//   &:hover {
//     bottom: 0.1em;
//   }

//   &:focus {
//     outline: 0;
//   }

//   &:active {
//     bottom: 0;
//     background-color: #fdf;
//   }
// `;

// const CustomCard = () => {
//   return (
//     <CustomCardContainer>
//       <ImageBox>
//         <Images />
//       </ImageBox>
//       <ProductTextBox>
//         <ProductTitle>Orange</ProductTitle>
//         <ProductPrice>$4.99</ProductPrice>
//         <ProductDescription>A bag of delicious oranges!</ProductDescription>
//         <Label for="item-1-quantity">Quantity:</Label>
//         <QuantityInput type="text" name="item-1-quantity" id="item-1-quantity" value="1" />
//         <AddToCartButton type="button" name="item-1-button" id="item-1-button">
//           Add to Cart
//         </AddToCartButton>
//       </ProductTextBox>
//     </CustomCardContainer>
//   );
// };

// export default CustomCard;




// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import { Button } from '@mui/material';

// const isSmallScreen = window.innerWidth <= 600;

// function CustomCard({
//   bestDeal,
//   incrementProductClickCount,
//   index,
//   productThumbnail,
//   productName,
//   productSellingPrice,
//   productComparisonDetails,
//   onButtonClick,
//   productClickCount,
//   dateScraped,
//   productURL,
//   fetchData
// }) {
//   const getCardStyle = () => {
//     let style = isSmallScreen ? { width: '100%' } : { width: '32%', margin: '10px' };
//     if (bestDeal) {
//       style.boxShadow = '0 0 20px rgba(173, 216, 230, 0.9)';
//     }
//     return style;
//   };

//   return (
//     <Card style={getCardStyle()} className='bestdeal'>
//       {bestDeal ? <div className='slant-line'></div> : <></>}

//       <CardContent style={{ textAlign: 'center' }}>
//         <div className="image-box">
//           <div className="images" style={{ backgroundImage: `url(${productThumbnail})` }}></div>
//         </div>
//         <div className="text-box">
//           <h2 className="item">{productName}</h2>
//           <h3 className="price">{productSellingPrice}</h3>
//           <p className="description">{productComparisonDetails}</p>
//           <label htmlFor={`item-${index + 1}-quantity`}>Quantity:</label>
//           <input type="text" name={`item-${index + 1}-quantity`} id={`item-${index + 1}-quantity`} value="1" />
//           <button
//             type="button"
//             name={`item-${index + 1}-button`}
//             id={`item-${index + 1}-button`}
//             onClick={() => onButtonClick(index, productName, productURL)}
//           >
//             Add to Cart
//           </button>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }

// export default CustomCard;


// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import { Button } from '@mui/material';

// const isSmallScreen = window.innerWidth <= 600;

// const CustomCard = ({
//   bestDeal,
//   incrementProductClickCount,
//   index,
//   productThumbnail,
//   productName,
//   productSellingPrice,
//   productComparisonDetails,
//   onButtonClick,
//   productClickCount,
//   dateScraped,
//   productURL,
//   fetchData,
// }) => {
//   const getCardStyle = () => {
//     let style = isSmallScreen ? { width: '100%' } : { width: '32%', margin: '10px' };
//     if (bestDeal) {
//       style.boxShadow = '0 0 20px rgba(173, 216, 230, 0.9)';
//     }
//     return style;
//   };

//   const cardContainerStyle = {
//     textAlign: 'center',
//     marginBottom: '75px',
//     transition: '0.3s',
//     position: 'relative',
//   };

//   const cardImageStyle = {
//     width: '33%',
//     position: 'absolute',
//     height: '140px',
//     clipPath: 'polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)',
//     transition: '0.3s',
//     border: '1px solid #ddd',
//     borderRadius: '5px',
//   };

//   const menuTitleStyle = {
//     fontSize: '1.5rem',
//     marginTop: '10px',
//   };

//   const menuPriceStyle = {
//     fontWeight: '700',
//     fontSize: '1.25rem',
//     color: '#c0392b',
//   };

//   const menuDateStyle = {
//     fontSize: '0.75rem',
//     color: '#888',
//     marginTop: '5px',
//   };

//   const menuBtnStyle = {
//     marginTop: '10px',
//   };

//   return (
//     <Card style={getCardStyle()} className='bestdeal'>
//       <CardContent style={cardContainerStyle}>
//         <img src={productThumbnail} alt="Product Thumbnail" style={cardImageStyle} />
//         <Typography variant="h4" component="h4" style={menuTitleStyle}>
//           {productName.split("-")[1]}
//         </Typography>
//         <Typography variant="body2" color="text.secondary" style={menuPriceStyle}>
//           {productSellingPrice}
//         </Typography>
//         <Typography variant="body3" color="text.secondary" style={menuDateStyle}>
//           Date: {dateScraped}
//         </Typography>
//         <Button
//           variant="contained"
//           fullWidth
//           onClick={() => incrementProductClickCount(index, productName, productURL)}
//           style={menuBtnStyle}
//         >
//           View: {productClickCount}
//         </Button>
//       </CardContent>
//     </Card>
//   );
// };

// export default CustomCard;




// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import { styled } from '@mui/system';

// const isSmallScreen = window.innerWidth <= 600;

// const CustomCardWrapper = styled(Card)({
//   width: isSmallScreen ? '100%' : 'calc(20% - 20px)', // Adjust the width for five items in a row
//   margin: '10px',
//   boxShadow: (props) =>
//     props.bestDeal ? '0 0 20px rgba(173, 216, 230, 0.9)' : 'none',
//   position: 'relative',
//   transition: '0.3s',
//   backgroundColor: '#f8f9fa', // Light background color
//   borderRadius: '8px',
//   overflow: 'hidden', // Ensure rounded corners are applied
//   '&:hover': {
//     transform: 'scale(1.05)',
//     backgroundColor: '#e9ecef', // Background color on hover
//   },
// });

// const SlantLine = styled('div')({
//   display: (props) => (props.bestDeal ? 'block' : 'none'),
//   position: 'absolute',
//   top: 0,
//   left: 0,
//   width: '100%',
//   height: '100%',
//   background:
//     'linear-gradient(to bottom right, transparent 49.5%, #c0392b 50%)',
//   zIndex: -1,
// });

// const CardContentWrapper = styled(CardContent)({
//   textAlign: 'center',
// });

// const CardImage = styled('img')({
//   width: '100%',
//   height: 'auto',
//   borderRadius: '8px',
//   marginBottom: '10px',
// });

// const ProductName = styled(Typography)({
//   fontSize: '1.2rem',
//   fontWeight: 700,
//   margin: '10px 0',
// });

// const SellingPrice = styled(Typography)({
//   fontSize: '1rem',
//   color: '#333',
// });

// const DateScraped = styled(Typography)({
//   fontSize: '0.75rem',
//   color: '#888',
//   margin: '5px 0',
// });

// const ViewButton = styled(Button)({
//   backgroundColor: '#c0392b',
//   color: '#fff',
//   marginTop: '10px',
//   '&:hover': {
//     backgroundColor: '#a93226',
//   },
// });

// function CustomCard({
//   bestDeal,
//   incrementProductClickCount,
//   index,
//   productThumbnail,
//   productName,
//   productSellingPrice,
//   dateScraped,
//   productURL,
//   productClickCount,
// }) {
//   return (
//     <CustomCardWrapper bestDeal={bestDeal}>
//       <SlantLine bestDeal={bestDeal}></SlantLine>
//       <CardContentWrapper>
//         <CardImage src={productThumbnail} alt="Product Thumbnail" />
//         <ProductName variant="h4">
//           {productName.split('-')[1]}
//         </ProductName>
//         <SellingPrice variant="body2" color="text.secondary">
//           Selling Price: {productSellingPrice}
//         </SellingPrice>
//         <DateScraped variant="body3" color="text.secondary">
//           Date: {dateScraped}
//         </DateScraped>
//         <ViewButton
//           variant="contained"
//           fullWidth
//           onClick={() =>
//             incrementProductClickCount(index, productName, productURL)
//           }
//         >
//           View: {productClickCount}
//         </ViewButton>
//       </CardContentWrapper>
//     </CustomCardWrapper>
//   );
// }

// export default CustomCard;




import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const isSmallScreen = window.innerWidth <= 600;

const CustomCardWrapper = styled(Card)(({ bestDeal, index }) => ({
  width: isSmallScreen ? '100%' : 'calc(20% - 20px)',
  margin: '10px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  position: 'relative',
  transition: '0.3s',
  backgroundColor: bestDeal ? '#D49137' : (index  === -1 ? '#A4A71E' : '#2C3E50'), // Golden color for best deal, different color for alternate cards, dark color for others
  borderRadius: '8px',
  overflow: 'hidden',
  zIndex: 1,
  '&:hover': {
    transform: 'scale(1.2)',
    backgroundColor: bestDeal ? '#D49137' : '#116466',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.4)',
    zIndex: 2,
  },
}));


const SlantLine = styled('div')({
  display: (props) => (props.bestDeal ? 'block' : 'none'),
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'linear-gradient(to bottom right, transparent 49.5%, #2C3E50 50%)',
  zIndex: -1,
});

const CardContentWrapper = styled(CardContent)({
  textAlign: 'center',
  color: '#FFCB9A',
});

const CardImage = styled('img')({
  width: '100%',
  height: 'auto',
  borderRadius: '8px',
  marginBottom: '10px',
});

const ProductName = styled(Typography)({
  fontSize: '1.2rem',
  fontWeight: 700,
  margin: '10px 0',
});

const SellingPrice = styled(Typography)({
  fontSize: '1rem',
  color: '#FFCB9A',
});

const DateScraped = styled(Typography)({
  fontSize: '0.75rem',
  color: '#FFCB9A',
  margin: '5px 0',
});

const ViewButton = styled(Button)({
  backgroundColor: '#FFCB9A',
  color: '#2C3E50',
  marginTop: '10px',
  '&:hover': {
    backgroundColor: '#116466',
  },
});

function CustomCard({
  bestDeal,
  incrementProductClickCount,
  index,
  productThumbnail,
  productName,
  productSellingPrice,
  dateScraped,
  productURL,
  productClickCount,
}) {
  return (
    <CustomCardWrapper bestDeal={bestDeal}>
      <SlantLine bestDeal={bestDeal}></SlantLine>
      <CardContentWrapper>
        <CardImage src={productThumbnail} alt="Product Thumbnail" />
        <ProductName variant="h4">{productName.split('-')[1]}</ProductName>
        <SellingPrice variant="body2" color="text.secondary">
          Selling Price: {productSellingPrice}
        </SellingPrice>
        <DateScraped variant="body3" color="text.secondary">
          Date: {dateScraped}
        </DateScraped>
        <ViewButton
          variant="contained"
          fullWidth
          onClick={() => incrementProductClickCount(index, productName, productURL)}
        >
          View: {productClickCount}
        </ViewButton>
      </CardContentWrapper>
    </CustomCardWrapper>
  );
}

export default CustomCard;






