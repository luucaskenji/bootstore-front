import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import OutterBox from '../components/OutterBox';
import axios from 'axios';

import UserContext from '../contexts/UserContext';

export default function PaymentSlip () {
    const [loading, setLoading] = useState(true);

    const submitFailed = () => {
        alert('Não foi possível enviar seus dados, tente novamente');
    }

    useEffect(() => {
        const { paymentMethod } = useContext(UserContext);

        axios
            .post('http://localhost:3000/orders', { paymentMethod })
            .then(() => setLoading(false))
            .catch(submitFailed);
    }, []);

    return (
        <OutterBox>
            <Main>
                <PaymentBox>
                    {!loading && <h1>Boleto gerado com sucesso!</h1>}
                    <StyledLink to='/compra-concluida'>Finalizar compra</StyledLink>
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

const StyledLink = styled(Link)`
    background-color: #2D82B7;
    border-radius: 5px;
    color: #FFF;
    font-size: 22px;
    padding: 12px 0;
    text-align: center;
    width: 300px;
`;
