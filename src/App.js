import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Component/Header';
import ProductFeature from './Features/Product';
function App() {
   return (
      <div className="App">
         <Header />
         <Router>
            <Switch>
               <Route path="/products" component={ProductFeature} />
            </Switch>
         </Router>
      </div>
   );
}

export default App;
