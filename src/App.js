import React from "react"

import logo from './assets/images/ghibliLogo.png';
import './App.css';

import ListLayout from './components/ListLayout';
import MoviePage from "./components/MoviePage"

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {
  return (
      <Router>
        <div className="App">
          <header className="ghibli-header">
            <a href="/">
              <img src={logo} alt="Ghibli Logo" />
            </a>
          </header>
          <Switch>
            <Route exact path="/">
              <ListLayout />
            </Route>
            <Route path="/:movieId">
              <MoviePage />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
