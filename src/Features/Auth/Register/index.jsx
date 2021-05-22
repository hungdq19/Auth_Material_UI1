import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import RegisterForm from '../Register/RegisterForm';
import { register } from '../userSlice';

Register.propTypes = {
   closeForm: PropTypes.func.isRequired,
};

function Register({ closeForm }) {
   const dispatch = useDispatch();
   const { enqueueSnackbar } = useSnackbar();
   const handleSubmit = async (values) => {
      try {
         values.username = values.email;
         const resultAction = await dispatch(register(values));
         const user = unwrapResult(resultAction);
         if (closeForm) {
            closeForm();
         }
         enqueueSnackbar(`Xin chao ${user.username}`, { variant: 'success' });
      } catch (error) {
         enqueueSnackbar(error.message, { variant: 'error' });
      }
   };
   return (
      <div>
         <RegisterForm onSubmit={handleSubmit} />
      </div>
   );
}

export default Register;
