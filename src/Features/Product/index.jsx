import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import ListPage from './page/ListPage';

ProductFeature.propTypes = {};

function ProductFeature(props) {
   const match = useRouteMatch();

   return (
      <div>
         <Router>
            <Switch>
               <Route path={match.url} exact component={ListPage} />
            </Switch>
         </Router>
      </div>
   );
}

export default ProductFeature;
