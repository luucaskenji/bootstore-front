import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage/index';
import Product from './pages/Product';
import Cart from './pages/Cart';
import PersonalData from './pages/PersonalData';
import AddressData from './pages/AddressData';
import PaymentChoice from './pages/PaymentChoice';
import PaymentSlip from './pages/PaymentSlip';
import CreditCard from './pages/CreditCard';
import FinalPage from './pages/FinalPage';
import Header from './components/Header';
import { CartProvider } from './contexts/CartContext';
import ProductProvider from './contexts/ProductContext';
import { UserProvider } from './contexts/UserContext';

export default function App() {
  return (

    <Router>
      <CartProvider>
        <ProductProvider>
          <UserProvider>
            <Header />
            <Switch>
              <Route path='/compra-concluida' component={FinalPage} />
              <Route path='/pagamento/cartao' component={CreditCard} />
              <Route path='/pagamento/boleto' component={PaymentSlip} />
              <Route path='/escolher-pagamento' component={PaymentChoice} />
              <Route path='/endereco' component={AddressData} />
              <Route path='/dados-pessoais' component={PersonalData} />
              <Route path='/carrinho' component={Cart} />
              <Route path='/produto/:id' component={Product} />
              <Route path='/' component={HomePage} />
            </Switch>
          </UserProvider>
        </ProductProvider>
      </CartProvider>
    </Router>
  );
}
