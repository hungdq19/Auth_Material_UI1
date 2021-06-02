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

   const handleClick = (id, name) => {
      if (!onChange) return;
      const data = {
         id,
         name,
      };

      onChange(data);
   };
   return (
      <Box padding={1}>
         <Box margin={1}>
            <Typography variant="h5">Loại Sản Phẩm</Typography>
         </Box>
         <Paper>
            {categoryList.map((item) => (
               <Box
                  className="category"
                  padding={2}
                  key={item.id}
                  onClick={() => handleClick(item.id, item.name)}
               >
                  {item.name}
               </Box>
            ))}
         </Paper>
      </Box>
   );
}

export default FilterCategory;
