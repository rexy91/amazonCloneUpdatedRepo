import React from 'react';
import {Browser as Router, Switch, Route} from 'react-router-dom'
import Login from './Components/Login/Login'
import LandingPage from './Components/LandingPage/LandingPage'
import './App.css'

// Components
import Navbar from './Components//Navbar/Narbar'
function App() {
  return (
    <div className='app' >
        
          <Switch>
              <Route path='/checkout'>
                  <h1>Checkout</h1>
              </Route>
              <Route path='/login' component={Login}>
              </Route>
    
              <Route path='/'>
                  <Navbar />
                  <LandingPage />
              </Route>
          </Switch>
    </div>
  );
}

export default App;
