import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';

import Home from './Home.js';
import InfoPage from './InfoPage.js';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/info">
          <InfoPage />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}