import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage/index';
import Header from './components/Header';
import ProductProvider from './contexts/ProductContext';

export default function App() {
  return (
    <Router>
        <ProductProvider>
          <Header />
          <Switch>
            <Route path='/' component={HomePage} />
          </Switch>
        </ProductProvider>
    </Router>
  );
}
