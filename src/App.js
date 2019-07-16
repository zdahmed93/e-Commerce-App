import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
function Hats() {
  return(
    <div>
      <h1>
        Hats Page
      </h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/hats" component={Hats} />
    </div>
  );
}

export default App;
