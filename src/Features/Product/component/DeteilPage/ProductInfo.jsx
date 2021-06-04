import React from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles, Typography } from '@material-ui/core';

ProductInfo.propTypes = {
   product: PropTypes.object,
};
const useStyles = makeStyles((theme) => ({
   root: {},
   name: {},
   Description: {
      margin: theme.spacing(2, 0),
   },
   priceBox: {
      flexDirection: 'column',

      backgroundColor: theme.palette.grey[100],
      padding: theme.spacing(2),
   },
   salePrice: {
      marginRight: theme.spacing(3),
      fontSize: theme.typography.h4.fontSize,
   },
   originalPrice: {
      marginRight: theme.spacing(2),
      textDecoration: 'line-through',
   },
   promotionPercent: {},
}));
function ProductInfo({ product = {} }) {
   const classes = useStyles();
   const { name, originalPrice, promotionPercent, salePrice, shortDescription } = product;
   return (
      <Box>
         <Typography component="h1" variant="h4">
            {name}
         </Typography>
         <Typography variant="body2" className={classes.Description}>
            {shortDescription}
         </Typography>
         <Box className={classes.priceBox}>
            <Box component="span" className={classes.salePrice}>
               {salePrice.toLocaleString('vi', { style: 'currency', currency: 'VND' })}
            </Box>
            {promotionPercent > 0 && (
               <>
                  <Box component="span" className={classes.originalPrice}>
                     {originalPrice.toLocaleString('vi', { style: 'currency', currency: 'VND' })}
                  </Box>
                  <Box component="span" className={classes.promotionPercent}>
                     {` - ${promotionPercent} %`}
                  </Box>
               </>
            )}
         </Box>
      </Box>
   );
}

export default ProductInfo;
