import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import productApi from '../../../api/productApi';
import Sekeleton from '../component/sekeleton';
import ProductList from '../component/ProductList';
import Pagination from '@material-ui/lab/Pagination';
import ProductSort from '../component/ProductSort';
import ProductFilter from '../component/ProductFilter';

ListPage.propTypes = {};

const useStyles = makeStyles((theme) => ({
   root: {
      flexGrow: 1,
   },
   paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      height: '100%',
      color: theme.palette.text.secondary,
   },
   left: {
      width: '250px',
   },
   right: {
      flex: '1 1 0',
   },
   box: {
      marginTop: '20px',
   },
   pagination: {
      display: 'flex',
      justifyContent: 'center',
   },
}));

function ListPage(props) {
   const classes = useStyles();
   // loading load sekeleton
   const [loading, setLoading] = useState(true);
   // du lieu tra ve co pagination, khoi tao state 
   const [pagination, setPagination] = useState({
      page: 1,
      limit: 12,
      total: 10,
   });
   // 
   const [filter, setFilter] = useState({
      _page: 1,
      _limit: 12,
      _sort: 'salePrice:ASC',
   });
   const [product, setProduct] = useState([]);
   useEffect(() => {
      const fetchProduct = async () => {
         try {
            const { data, pagination } = await productApi.getAll(filter);
            setProduct(data);
            setPagination(pagination);
         } catch (error) {
            console.log(error);
         }
         setLoading(false);
      };
      fetchProduct();
   }, [filter]);
   const handleChangePaginations = (e, page) => {
      setFilter((prevFilter) => ({
         ...prevFilter,
         _page: page,
      }));
   };
   //handle sort changed
   const handleSortChange = (newValue) => {
      setFilter((prevFilter) => ({
         ...prevFilter,
         _sort: newValue,
      }));
   };
   const handleFilterChange = (newFilter) =>{
      setFilter((prevFilter) => ({
         ...prevFilter,
         ...newFilter,
      }))
   }
   return (
      <Box className={classes.box}>
         <Container>
            <Grid container spacing={1}>
               <Grid item className={classes.left}>
                  <Paper className={classes.paper}>
                     {/* Loc theo danh muc san pham */}
                     <ProductFilter filter={filter} onChange={handleFilterChange}/>
                  </Paper>
               </Grid>
               <Grid item className={classes.right}>
                  <ProductSort currentValue={filter._sort} onChange={handleSortChange} />
                  <Paper className={classes.paper}>
                     <h2>List San Pham</h2>
                     {/* Product LIST */}
                     {loading ? <Sekeleton /> : <ProductList data={product}></ProductList>}
                     <Box className={classes.pagination}>
                        {/* Handle pagination */}
                        <Pagination
                           count={Math.ceil(pagination.total / pagination.limit)}
                           page={pagination.page}
                           color="primary"
                           onChange={handleChangePaginations}
                        />
                     </Box>
                  </Paper>
               </Grid>
            </Grid>
         </Container>
      </Box>
   );
}

export default ListPage;
