import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Product from './pages/Product';
import Header from './components/Header';

export default function App() {
return (
  <Router>
    <Header />
      <Switch>
        <Route path='/product/:id' component={Product} />
        <Route path='/' component={HomePage} />
      </Switch>
    </Router>
  );
}
