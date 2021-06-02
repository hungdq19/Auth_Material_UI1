import React from 'react';
import { BrowserRouter as Router, Route, Switch, useRouteMatch } from 'react-router-dom';
import ListPage from './page/ListPage';

ProductFeature.propTypes = {};

function ProductFeature(props) {
   const match = useRouteMatch();

   return (
      <div>
         <Router>
            <Switch>
               <Route path={match.url} component={ListPage} />
            </Switch>
         </Router>
      </div>
   );
}

export default ProductFeature;
