import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage.component';
import ShopPage from './pages/shop/shop.component';

import './App.css';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </>
  );
}

export default App;
