import React, { useContext, createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const CartContext = createContext();

export default CartContext;

export function CartProvider(props) {
  const [cart, setCart] = useLocalStorage('cart', []);

  return (
    <CartContext.Provider {...props} value={{ cart, setCart}}>
      {props.children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCartContext must be used within a CartProvider');
  }

  return context;
}