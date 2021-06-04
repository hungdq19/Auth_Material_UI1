import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { Box, IconButton, makeStyles, Paper, TextField, Typography } from '@material-ui/core';
import RemoveCircleOutlinedIcon from '@material-ui/icons/RemoveCircleOutlined';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
// Nhan 3 props tu register form, fied nay xu tuong tac voi form, va thu vien UI
QuantityFied.propTypes = {
   form: PropTypes.object.isRequired,
   name: PropTypes.string.isRequired,
   label: PropTypes.string,
};
const useStyles = makeStyles((theme) => ({
   root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
   },
}));

function QuantityFied({ form, name, label }) {
   const classes = useStyles();
   // Lấy hàm xử lỗi ở trong react hook form cụ thể là FormState
   const { errors } = form.formState;
   const { setValue } = form;
   const isBug = errors[name];
   return (
      <Controller
         name={name}
         control={form.control}
         render={({ field: { value = 0, name } }) => (
            <Paper>
               <Box className={classes.root}>
                  <IconButton
                     onClick={() =>
                        setValue(name, Number.parseInt(value) ? Number.parseInt(value) - 1 : 0)
                     }
                  >
                     <RemoveCircleOutlinedIcon />
                  </IconButton>
                  <Typography>{value}</Typography>
                  <IconButton onClick={() => setValue(name, Number.parseInt(value) + 1)}>
                     <AddCircleOutlineOutlinedIcon />
                  </IconButton>
               </Box>
            </Paper>
            // <TextField
            //    onChange={onChange}
            //    value={value}
            //    label={label}
            //    fullWidth
            //    type="password"
            //    margin="normal"
            //    variant="outlined"
            //    error={isBug}
            //    helperText={isBug?.message}
            // />
         )}
      />
   );
}

export default QuantityFied;
