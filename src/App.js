import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Component/Header';
import CardFeatue from './Features/Cart/CardFeatue';
import ProductFeature from './Features/Product';
function App() {
   return (
      <div className="App">
         <Header />
         <Router>
            <Switch>
               <Route path="/products" component={ProductFeature} />
               <Route path="/cart" component={CardFeatue} />
            </Switch>
         </Router>
      </div>
   );
}

export default App;
