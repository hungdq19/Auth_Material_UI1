import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Paper, Typography } from '@material-ui/core';
import categoiesApi from '../../../api/categoryApi';

FilterCategory.propTypes = {
   onChange: PropTypes.func,
};

function FilterCategory({ onChange }) {
   const [categoryList, setCategoryList] = React.useState([]);
   useEffect(() => {
      (async () => {
         try {
            const data = await categoiesApi.getAll();
            setCategoryList(data);
         } catch (error) {
            console.log('Loi roi ne:', error);
         }
      })();
   }, []);
   const handleClick = (id) => {
      if (!onChange) return;

      onChange(id);
   };
   return (
      <Box padding={1}>
         <Typography>DANH SÁCH SẢN PHẨM</Typography>
         {categoryList.map((item) => (
            <Box padding={2} key={item.id} onClick={() => handleClick(item.id)}>
               {item.name}
            </Box>
         ))}
      </Box>
   );
}

export default FilterCategory;
