import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

FilterPrice.propTypes = {
   onChange: PropTypes.func.isRequired,
};
const useStyles = makeStyles((theme) => ({
   root: {
      padding: theme.spacing(2),
      borderTop: '1px solid black',
      margin: theme.spacing(2, 0),
   },
   price: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',

      '&>span': {
         marginLeft: '10px',
         marginRight: '10px',
      },
   },
   button: {
      marginTop: theme.spacing(2),
   },
}));
function FilterPrice({ onChange }) {
   const classes = useStyles();
   const [value, setValue] = useState({
      salePrice_gte: 0,
      salePrice_lte: 0,
   });
   // handle data Form
   const handleChange = (e) => {
      const { name, value } = e.target;
      setValue((prev) => ({
         ...prev,
         [name]: value,
      }));
   };
   const handleSubmit = () => {
      if (!onChange) return;
      onChange(value);
      setValue({
         salePrice_gte: 0,
         salePrice_lte: 0,
      });
   };
   return (
      <Box className={classes.root}>
         <Typography variant="subtitle1" color="primary">
            Khoảng Giá
         </Typography>
         <Box className={classes.price}>
            <TextField
               name="salePrice_gte"
               value={value.salePrice_gte}
               onChange={handleChange}
               variant="outlined"
               size="small"
            />
            <span>-</span>
            <TextField
               name="salePrice_lte"
               value={value.salePrice_lte}
               onChange={handleChange}
               variant="outlined"
               size="small"
            />
         </Box>
         <Button
            variant="outlined"
            color="primary"
            type="submit"
            onClick={handleSubmit}
            size="small"
            className={classes.button}
         >
            Áp Dụng
         </Button>
      </Box>
   );
}

export default FilterPrice;
