import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Home from './Home.jsx';
import Cart from './Cart.jsx';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className='flex flex-row mt-24 mx-36'>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/cart">
              <Cart/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
