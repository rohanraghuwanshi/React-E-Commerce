import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage.component';

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
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </>
  );
}

export default App;
