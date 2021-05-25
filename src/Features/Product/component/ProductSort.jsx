//Handle xu li filter theo gia san pham
import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
ProductSort.propTypes = {
   currentValue: PropTypes.string.isRequired,
   onChange: PropTypes.func,
};
export default function ProductSort({ currentValue, onChange }) {
   //Truyền lên cho thằng cha xử lí
   const handleChange = (event, newValue) => {
      if (!onChange) return;
      onChange(newValue);
   };

   return (
      <Paper square>
         <Tabs
            value={currentValue}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            aria-label="disabled tabs example"
         >
            <Tab label="Giá thấp đến cao" value="salePrice:ASC" />
            <Tab label="Giá cao đến thấp" value="salePrice:DESC" />
         </Tabs>
      </Paper>
   );
}
