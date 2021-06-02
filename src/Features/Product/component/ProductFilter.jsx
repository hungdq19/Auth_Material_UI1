import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import FilterCategory from './FilterCategory';
import FilterPrice from './Filter/FilterPrice';
import FilterService from './Filter/FilterService';

ProductFilter.propTypes = {
   filter: PropTypes.object.isRequired,
   onChange: PropTypes.func,
};

function ProductFilter({ filter, onChange }) {
   const handleCategory = (newCategoryID) => {
      console.log(newCategoryID);
      const newFilter = {
         ...filter,
         'category.id': newCategoryID.id,
      };
      onChange(newFilter);
   };
   //handle filter change price change
   const handlePrice = (values) => {
      if (!onChange) return;
      onChange(values);
   };
   const handleChangeService = (values) => {
      if (!onChange) return;
      console.log(values);
      onChange(values);
   };
   return (
      <Box>
         <FilterCategory onChange={handleCategory} />
         <FilterPrice onChange={handlePrice} />
         <FilterService filter={filter} onChange={handleChangeService} />
      </Box>
   );
}

export default ProductFilter;
