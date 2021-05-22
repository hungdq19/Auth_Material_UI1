import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import InputField from '../../../../Component/InputField/InputField.jsx';
import PassWordField from '../../../../Component/PassWordField';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Avatar, Button, LinearProgress, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LockIcon from '@material-ui/icons/Lock';
const useStyles = makeStyles((theme) => ({
   root: {
      padding: '40px',
   },
   avatar: {
      margin: '10px auto',
      backgroundColor: theme.palette.secondary.main,
   },
   title: {
      textAlign: 'center',
      padding: '10px',
   },
   submit: {
      margin: theme.spacing(3, 0, 2),
   },
}));
RegisterForm.propTypes = {
   onSubmit: PropTypes.func.isRequired,
};

function RegisterForm({ onSubmit }) {
   const classes = useStyles();
   const schema = yup.object().shape({
      //validation nhập tên ít nhất phải có 2 kí tự
      fullname: yup
         .string()
         .required('Vui long nhập trường này')
         .test('Nhap vao 2 tu', 'Nhập ít nhất 2 kí tự', (value) => {
            return value.split(' ').length >= 2;
         }),
      email: yup
         .string()
         .required('Vui lòng nhập trường này')
         .email('Bạn nhập không phải là email'),
      password: yup
         .string()
         .required('Vui lòng nhập trường này')
         .min(6, 'Bạn Phải nhập ít nhất là 6 kí tự :D'),
      password2: yup
         .string()
         .required('Vui lòng nhập trường này')
         .oneOf([yup.ref('password')], 'Mật khẩu bạn nhập không trùng nhau :(('),
   });
   const form = useForm({
      defaultValue: {
         firstName: '',
         email: '',
         password: '',
         password2: '',
      },
      resolver: yupResolver(schema),
   });

   const { handleSubmit, formState } = form;
   const { isSubmitting } = formState;
   const handleSubmitForm = async (formdata) => {
      if (!onSubmit) return;
      await onSubmit(formdata);
   };
   return (
      <div className={classes.root}>
         {isSubmitting && <LinearProgress />}

         <Avatar className={classes.avatar}>
            <LockIcon></LockIcon>
         </Avatar>
         <Typography variant="h5" className={classes.title}>
            Đăng Kí Tài Khoản
         </Typography>
         <form onSubmit={handleSubmit(handleSubmitForm)}>
            <InputField form={form} name="fullname" label="Full Name" />
            <InputField form={form} name="email" label="Email" />
            <PassWordField form={form} name="password" label="Password" />
            <PassWordField form={form} name="password2" label="Confirm Password" />
            <Button
               className={classes.submit}
               type="Submit"
               variant="contained"
               color="primary"
               fullWidth
            >
               Đăng kí tài khoản
            </Button>
         </form>
      </div>
   );
}

export default RegisterForm;
