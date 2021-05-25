import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Box } from '@material-ui/core';
import Product from './Product';

ProductList.propTypes = {
   data: PropTypes.array,
};

function ProductList({ data }) {
   return (
      <Box>
         <Grid container>
            {data.map((x) => (
               <Grid item md={4} sm={6}>
                  <Product product={x} />
               </Grid>
            ))}
         </Grid>
      </Box>
   );
}

export default ProductList;
