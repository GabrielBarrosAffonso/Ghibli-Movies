import React from "react"

import logo from './assets/images/ghibliLogo.png';
import './App.css';

import ListLayout from './components/ListLayout';

const App = () => {
  return (
        <div className="App">
          <header className="ghibli-header">
            <img src={logo} alt="Ghibli Logo" />
          </header>
          <ListLayout />
        </div>
  );
}

export default App;
