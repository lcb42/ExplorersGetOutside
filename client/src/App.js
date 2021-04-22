import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';

import Home from './Home.js';
import InfoPage from './InfoPage.js';
import SubmitPage from './SubmitPage.js';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/info">
          <InfoPage />
        </Route>
        <Route path="/submit">
          <SubmitPage />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}