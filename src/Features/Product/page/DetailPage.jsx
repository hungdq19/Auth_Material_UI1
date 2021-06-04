import React from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import ProductThumnail from '../component/DeteilPage/ProductThumnail';
import useProduct from '../../../Component/Custom/useProduct';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import ProductInfo from '../component/DeteilPage/ProductInfo';
import AddToCardForm from '../component/Card/AddToCardForm';
import ProductMenu from '../component/Card/ProductMenu';
import ProductDes from '../component/Card/CardMenu/ProductDes';
import ProductAdd from '../component/Card/CardMenu/ProductAdd';
import { useDispatch } from 'react-redux';
import ProductReview from '../component/Card/CardMenu/ProductReview';
import { addToCard } from '../../Cart/cartSlice';

// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

DetailPage.propTypes = {};
const useStyles = makeStyles((theme) => ({
   root: {
      flexGrow: 1,
   },
   paper: {
      padding: theme.spacing(5),
      textAlign: 'center',
      color: theme.palette.primary,
   },
   left: {
      width: '400px',
      marginRight: '10px',

      padding: theme.spacing(2),
      borderRight: `1px solid ${theme.palette.grey[300]}`,
   },
   right: {
      flex: '1 1 0',
      padding: theme.spacing(2),
   },
   box: {
      marginTop: '20px',
   },
   pagination: {
      display: 'flex',
      justifyContent: 'center',
   },
   process: {
      width: '100%',

      textAlign: 'center',
   },
   title: {
      textAlign: 'center',
      textTransform: 'uppercase',
      margin: theme.spacing(4, 0),
   },
}));

function DetailPage(props) {
   const classes = useStyles();
   const {
      params: { productID },
      url,
   } = useRouteMatch();
   const { product, loading } = useProduct(productID);

   console.log(product);
   // use redux
   const dispatch = useDispatch();
   if (loading) {
      return (
         <Box padding={6} className={classes.process}>
            <CircularProgress />
         </Box>
      );
   }
   const handleAddToCardSubmit = (value) => {
      const actions = addToCard({
         id: product.id,
         product,
         quantity: value.quantity,
      });
      dispatch(actions);
   };

   return (
      <Box padding={6}>
         <Container>
            <Typography
               className={classes.title}
               component="h2"
            >{`chi tiết sản phẩm ${product.name}`}</Typography>
            <Paper>
               <Grid container>
                  <Grid className={classes.left} item sm={4}>
                     <Paper>
                        <ProductThumnail product={product} />
                     </Paper>
                  </Grid>
                  <Grid item className={classes.right} sm={8}>
                     <Paper className={classes.paper}>
                        <ProductInfo product={product} />
                        <AddToCardForm onSubmit={handleAddToCardSubmit} />
                     </Paper>
                  </Grid>
               </Grid>
            </Paper>
            <ProductMenu />
            <Switch>
               <Route exact path={url}>
                  <ProductDes product={product} />
               </Route>
               <Route exact path={`${url}/additional`}>
                  <ProductAdd product={product} />
               </Route>
               <Route exact path={`${url}/review`}>
                  <ProductReview product={product} />
               </Route>
            </Switch>
         </Container>
      </Box>
   );
}

export default DetailPage;
