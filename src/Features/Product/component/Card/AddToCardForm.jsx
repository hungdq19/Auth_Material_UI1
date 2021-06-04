import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import QuantityFied from '../../../../Component/QuantityFied/QuantityFied';

const useStyles = makeStyles((theme) => ({
   root: {
      position: 'relative',
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
   process: {
      position: 'absolute',
   },
}));
AddToCardForm.propTypes = {
   onSubmit: PropTypes.func.isRequired,
};

function AddToCardForm({ onSubmit }) {
   const classes = useStyles();
   const schema = yup.object().shape({
      quantity: yup
         .number()
         .required('Please enter quantity')
         .min(1, 'Please enter at 1')
         .typeError('Nhap vao phai la 1 so'),
   });
   const form = useForm({
      defaultValue: {
         quantity: 1,
      },
      resolver: yupResolver(schema),
   });

   const { handleSubmit, formState } = form;
   const handleSubmitForm = async (formdata) => {
      if (!onSubmit) return;
      await onSubmit(formdata);
   };
   return (
      <div className={classes.root}>
         <form onSubmit={handleSubmit(handleSubmitForm)}>
            <QuantityFied form={form} name="quantity" label="quantity" />
            <Button className={classes.submit} type="Submit" variant="contained" color="primary">
               Mua Hang
            </Button>
         </form>
      </div>
   );
}

export default AddToCardForm;
