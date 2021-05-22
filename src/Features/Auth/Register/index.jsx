import { unwrapResult } from '@reduxjs/toolkit';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RegisterForm from '../Register/RegisterForm';
import { register } from '../userSlice';

Register.propTypes = {};

function Register(props) {
   const data = useSelector((state) => state.user);
   const dispatch = useDispatch();
   const handleSubmit = async (values) => {
      // Xu li form khi validation thanh cong
      try {
         values.username = values.email;
         const action = register(values);
         const resultAction = await dispatch(action);
         const user = unwrapResult(resultAction);
         console.log(user);
      } catch (error) {
         console.log(error);
      }
   };
   return (
      <div>
         <RegisterForm onSubmit={handleSubmit} />
      </div>
   );
}

export default Register;
