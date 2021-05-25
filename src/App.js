import './App.css';
import Header from './Component/Header';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
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
