import React from 'react';
import {Browser as Router, Switch, Route} from 'react-router-dom'
import Login from './Components/Login'
import './App.css'

// Components
import Navbar from './Components//Navbar/Narbar'
function App() {
  return (
    <div className='app' >
        <Navbar/>
          <Switch>
              <Route path='/checkout'>
                  <h1>Checkout</h1>
              </Route>
              <Route path='/login' component={Login}/>
              <Route path='/'>
                  <h1>Home Page</h1>
                  <h1>Home Page</h1>
                  <h1>Home Page</h1>
                  <h1>Home Page</h1>
                  <h1>Home Page</h1>
                  <h1>Home Page</h1>
                  <h1>Home Page</h1>
                  <h1>Home Page</h1>
                  <h1>Home Page</h1>
                  <h1>Home Page</h1>
                  <h1>Home Page</h1>
                  <h1>Home Page</h1>
                  <h1>Home Page</h1>
              </Route>
          </Switch>
    </div>
  );
}

export default App;
