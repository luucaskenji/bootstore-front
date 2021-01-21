import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../contexts/CartContext';

export default function QuantityButtons(props) {
    const {cart, setCart} = useCartContext();
    const { item } = props;
    function subQuantity(){
        item.quantity = item.quantity - 1;
        if(item.quantity <= 0){
            cart.splice(
                cart.indexOf(i => i.product.id === item.product.id),
                1
            );
        }
        setCart([...cart]);
    }
    function plusQuantity(){
        item.quantity = item.quantity + 1;
        setCart([...cart]);
    }
    return (
        <QuantityBox>
            <button onClick={subQuantity}>-</button>  
            {item.quantity}  
            <button onClick={plusQuantity}>+</button>
        </QuantityBox>
    );
}
const QuantityBox = styled.div`
    border: 1px solid #000;
    padding: 10px;
    width: 80px;
    display:flex;
    justify-content: space-between;
`;