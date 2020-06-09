import React from 'react';
import './App.css';

import SpoopiNav from "./components/SpoopiNav"
import SpoopiContainer from "./components/SpoopiContainer"

function App() {
  return(
    <div className="App">
      <div className="column left">
        <SpoopiContainer/>
      </div>
      <div className="column right">
        <SpoopiNav/>
      </div>
    </div>
  )
}

export default App;
