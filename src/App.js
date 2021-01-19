import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Header from './components/Header';

export default function App() {
  return (
    <Router>
        <Header />
        <Switch>
          <Route path='/' component={HomePage} />
        </Switch>
    </Router>
  );
}
