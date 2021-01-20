import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import FakeHomePage from './pages/HomePage/FakeHome';
import Header from './components/Header';
import ProductProvider from './contexts/ProductContext';

export default function App() {
  return (
    <Router>
        <ProductProvider>
          <Header />
          <Switch>
            <Route path='/' component={FakeHomePage} />
          </Switch>
        </ProductProvider>
    </Router>
  );
}
