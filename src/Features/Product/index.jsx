import React from 'react';
import { BrowserRouter as Router, Route, Switch, useRouteMatch } from 'react-router-dom';
import DetailPage from './page/DetailPage';
import ListPage from './page/ListPage';


ProductFeature.propTypes = {};

function ProductFeature(props) {
   const match = useRouteMatch();
   console.log(match);

   return (
      <div>
         <Router>
            <Switch>
               <Route path={match.url} exact component={ListPage} />
               <Route path={`${match.url}/:productID`} component={DetailPage} />
            </Switch>
         </Router>
      </div>
   );
}

export default ProductFeature;
