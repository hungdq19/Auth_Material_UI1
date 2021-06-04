import { Box, Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';

Product.propTypes = {
   product: PropTypes.object,
};

function Product({ product }) {
   const history = useHistory();
   const thumbnail = product.thumbnail
      ? `https://api.ezfrontend.com${product.thumbnail?.url}`
      : 'https://images.unsplash.com/photo-1593642532454-e138e28a63f4?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';
   const handleClick = () => {
      history.push(`/products/${product.id}`);
   };
   return (
      <Box onClick={handleClick} padding={1}>
         <Paper variant="outlined">
            <Box padding={1}>
               <img src={thumbnail} alt={product.name} width="100%" height="200px" />
            </Box>
         </Paper>
         <Typography variant="body2">{product.name}</Typography>
         <Typography variant="body2">
            {product.salePrice.toLocaleString('vi', { style: 'currency', currency: 'VND' })}
            {product.promotionPercent > 0 ? ` - ${product.promotionPercent} %` : ''}
         </Typography>
      </Box>
   );
}

export default Product;
