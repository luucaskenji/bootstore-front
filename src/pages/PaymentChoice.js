import React, { useState, useEffect, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
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
                <p>
                    <AiFillCreditCard />
                    Cartão de Crédito
                </p>
                <p>
                    <RiBillLine />
                    Boleto Bancário
                </p>
            </Main>
        </OutterBox>
    );
}

const Main = styled.main`
    height: 100%;
    width: 850px;

    h1 {
        font-size: 30px;
        margin-bottom: 30px;
    }
    p {
        font-size: 22px;
        margin-bottom: 10px;

        svg {
            margin: 0 0 -3px 5px;
        }
    }
`;


//width form 500px;