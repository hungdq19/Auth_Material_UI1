import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { TextField } from '@material-ui/core';
// Nhan 3 props tu register form, fied nay xu tuong tac voi form, va thu vien UI
PassWordField.propTypes = {
   form: PropTypes.object.isRequired,
   name: PropTypes.string.isRequired,
   label: PropTypes.string,
};

function PassWordField({ form, name, label }) {
   // Lấy hàm xử lỗi ở trong react hook form cụ thể là FormState
   const { errors } = form.formState;

   const isBug = errors[name];
   console.log(isBug);
   return (
      <Controller
         name={name}
         control={form.control}
         render={({ field: { onChange, value } }) => (
            <TextField
               onChange={onChange}
               value={value}
               label={label}
               fullWidth
               type="password"
               margin="normal"
               variant="outlined"
               error={isBug}
               helperText={isBug?.message}
            />
         )}
      />
   );
}

export default PassWordField;
