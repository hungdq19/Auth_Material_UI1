import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import FilterCategory from './FilterCategory';

ProductFilter.propTypes = {
   filter: PropTypes.object.isRequired,
   onChange: PropTypes.func,
};

function ProductFilter({ filter, onChange }) {
   const handleCategory = (newCategoryID) => {
      const newFilter = {
         ...filter,
         'category.id': newCategoryID,
      };
      onChange(newFilter);
   };
   return (
      <Box>
         <FilterCategory onChange={handleCategory} />
      </Box>
   );
}

export default ProductFilter;
