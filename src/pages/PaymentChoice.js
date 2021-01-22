import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import OutterBox from '../components/OutterBox';
import { RiBillLine } from 'react-icons/ri';
import { AiFillCreditCard } from 'react-icons/ai';

export default function PaymentChoice () {
    const history = useHistory();
    const [ clicked, setClicked ] = useState(false);
  
    return (
        <OutterBox>
            <Main>
                <h1>Escolher meio de pagamento</h1>
                <Link to='/pagamento/cartao'>
                    <AiFillCreditCard />
                    Cartão de Crédito
                </Link>
                <Link to='/pagamento/boleto'>
                    <RiBillLine />
                    Boleto Bancário
                </Link>
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
    a {
        font-size: 22px;
        margin-bottom: 30px;

        svg {
            margin: 0 5px -3px 0;
        }
    }
`;
