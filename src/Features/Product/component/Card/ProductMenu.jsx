import React from 'react';
import PropTypes from 'prop-types';
import { Box, Link, makeStyles } from '@material-ui/core';
import { NavLink, useRouteMatch } from 'react-router-dom';

ProductMenu.propTypes = {};
const useStyles = makeStyles((theme) => ({
   root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      listStyle: 'none',

      '& > li': {
         marginRight: theme.spacing(4),
      },
      '&> li > a': {
         color: theme.palette.grey[900],
      },
      '&> li > a.active': {
         color: theme.palette.success.main,
      },
   },
}));

function ProductMenu(props) {
   const classes = useStyles();
   const match = useRouteMatch();

   return (
      <Box className={classes.root} component="ul">
         <li>
            <Link component={NavLink} to={match.url} exact>
               Thông tin chi tiết
            </Link>
         </li>
         <li>
            <Link component={NavLink} to={`${match.url}/additional`} exact>
               San pham
            </Link>
         </li>
         <li>
            <Link component={NavLink} to={`${match.url}/review`} exact>
               Danh gia san pham
            </Link>
         </li>
      </Box>
   );
}

export default ProductMenu;
