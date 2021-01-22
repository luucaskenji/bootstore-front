import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import OutterBox from '../components/OutterBox';
import { RiBillLine } from 'react-icons/ri';
import { AiFillCreditCard } from 'react-icons/ai';

import UserContext from '../contexts/UserContext';

export default function PaymentChoice () {
    const history = useHistory();
    const { setPaymentMethod } = useContext(UserContext);

    const choosePaymentMethod = method => {
        setPaymentMethod(method);

        method === 'credit card'
            ? history.push('/pagamento/cartao')
            : history.push('/pagamento/boleto');
    }
  
    return (
        <OutterBox>
            <Main>
                <h1>Escolher meio de pagamento</h1>
                <Button onClick={() => choosePaymentMethod('credit card')} >
                    <AiFillCreditCard />
                    Cartão de Crédito
                </Button>
                <Button onClick={() => choosePaymentMethod('bank slip')} >
                    <RiBillLine />
                    Boleto Bancário
                </Button>
            </Main>
        </OutterBox>
    );
}

const Main = styled.main`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 850px;

    h1 {
        font-size: 30px;
        font-weight: 700;
        margin-bottom: 60px;
    }
`;

const Button = styled(Link)`
    font-size: 22px;
    margin-bottom: 30px;
    width: 210px;

    svg {
        margin: 0 5px -3px 0;
    }
`;