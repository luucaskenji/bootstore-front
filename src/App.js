import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Product from './pages/Product';
import Cart from './pages/Cart';
import PersonalData from './pages/PersonalData';
import AddressData from './pages/AddressData';
import Header from './components/Header';

export default function App() {
return (
  <Router>
    <Header />
      <Switch>
        <Route path='/produto/:id' component={Product} />
        <Route path='/dados-pessoais' component={PersonalData} />
        <Route path='/endereco' component={AddressData} />
        <Route path='/carrinho' component={Cart} />
        <Route path='/' component={HomePage} />
      </Switch>
    </Router>
  );
}
