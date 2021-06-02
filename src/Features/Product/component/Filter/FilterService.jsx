import { Box, Checkbox, FormControlLabel, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
FilterService.propTypes = {
   // truyen vao 2 prop do la filter va onChange
   filter: PropTypes.object,
   onChange: PropTypes.func.isRequired,
};
const useStyles = makeStyles((theme) => ({
   root: {
      padding: theme.spacing(2),
      borderTop: '1px solid black',
   },
   service: {
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',

      listStyle: 'none',

      '& > li': {
         margin: 0,
         marginTop: theme.spacing(1),
      },
   },
   paper: {
      padding: '10px',
      width: '100%',
   },
}));
function FilterService({ filter = {}, onChange }) {
   const classes = useStyles();
   // Bộ lọc Fillter theo value và label để hiển thị ra UI
   const filters = [
      { value: 'isFreeShip', label: 'Free Ship' },
      { value: 'isPromotion', label: 'Flash Sale' },
   ];
   const handleChange = (e) => {
      // if handleChange alert parent, parent handle
      const { name, checked } = e.target;
      if (!onChange) return;

      onChange({ [name]: checked });
   };
   return (
      <Box className={classes.root}>
         <Typography>Dịch Vụ</Typography>
         <ul className={classes.service}>
            <Paper className={classes.paper}>
               {filters.map((item) => (
                  <li key={item}>
                     <FormControlLabel
                        label="labelPlacement"
                        control={
                           <Checkbox
                              checked={Boolean(filter[item.value])}
                              onChange={handleChange}
                              name={item.value}
                           />
                        }
                        label={item.label}
                     />
                  </li>
               ))}
            </Paper>
         </ul>
      </Box>
   );
}

export default FilterService;
