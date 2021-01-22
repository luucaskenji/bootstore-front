import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import OutterBox from '../components/OutterBox';
import axios from 'axios';

import UserContext from '../contexts/UserContext';
import { useCartContext } from '../contexts/CartContext';
import MainButton from '../components/MainButton';
import { useHistory } from 'react-router-dom';

export default function PaymentSlip() {
    const history = useHistory();
    const { cart, setCart } = useCartContext();
    const { userId, addressId, paymentMethod, setOrderId } = useContext(UserContext);
    const [clicked, setClicked] = useState(false);

    function finalizeOrder() {
        setClicked(true);
        const data = { userId, addressId, cart, paymentMethod };

        console.log(data);
        axios
            .post('http://localhost:3000/orders', data)
            .then(res => {
                setOrderId(res.data.id);
                history.push('/compra-concluida');
                setCart([]);
            })
            .catch(submitFailed);
    }

    function submitFailed() {
        setClicked(false);
        alert('Não foi possível enviar seus dados, tente novamente');
    }

    return (
        <OutterBox>
            <Main>
                <PaymentBox>
                    <h1>Boleto gerado com sucesso!</h1>
                    <MainButton available={true} disabled={clicked} clicked={clicked} onClick={finalizeOrder}>Finalizar compra</MainButton>
                </PaymentBox>
            </Main>
        </OutterBox>
    );
}

const Main = styled.main`
    display: flex;
    height: 100%;
    justify-content: center;
    width: 850px;
`;

const PaymentBox = styled.div`
    align-items: center;
    background-image: url('/images/lotus.png');
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 550px;
    width: 550px;

    h1 {
        font-size: 30px;
        font-weight: 700;
    }
`;