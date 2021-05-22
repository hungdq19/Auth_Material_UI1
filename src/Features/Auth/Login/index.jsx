import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../userSlice';
import LoginForm from './LoginForm';

Login.propTypes = {
   closeForm: PropTypes.func.isRequired,
};

function Login({ closeForm }) {
   const dispatch = useDispatch();
   const { enqueueSnackbar } = useSnackbar();
   const handleSubmit = async (values) => {
      try {
         const resultAction = await dispatch(login(values));
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
         <LoginForm onSubmit={handleSubmit} />
      </div>
   );
}

export default Login;
