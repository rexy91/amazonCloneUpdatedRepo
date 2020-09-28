import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import './App.css';

function App() {

  return (
    <div className="grid-container">
        <header className='header'>
            <div className='brand'>
                <button>#9776</button>
                <Link to ='/'>Amonja</Link>
            </div>
            <div className='header-links'>
              <a href='cart.html'>Cart</a>
            </div>
        </header>
    </div>
  );
}

export default App;
