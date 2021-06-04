import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';

ProductThumnail.propTypes = {
   product: PropTypes.object,
};

function ProductThumnail({ product = {} }) {
   const thumbnail = product.thumbnail
      ? `https://api.ezfrontend.com${product.thumbnail?.url}`
      : 'https://images.unsplash.com/photo-1593642532454-e138e28a63f4?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';
   return (
      <Box>
         <img src={thumbnail} alt={product.name} width="100%" height="100%" />
      </Box>
   );
}

export default ProductThumnail;
