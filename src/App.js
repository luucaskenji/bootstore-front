import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';

export default function App() {
  return (
    <Router>
        <Switch>
          <Route path='/' component={HomePage} />
        </Switch>
    </Router>
  );
}
