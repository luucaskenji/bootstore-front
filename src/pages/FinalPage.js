import React, { useState, useEffect, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import styled from 'styled-components';
import OutterBox from '../components/OutterBox';
import { useCartContext } from '../contexts/CartContext';

export default function FinalPage() {
    const history = useHistory();
    const { cart, setCart } = useCartContext();
    const { orderId, setOrderId} = useState[''];
    //const { user, setUser} = useUserContext();
    const user = {};
    useEffect(() => {
        axios.post(`http://localhost:3000/orders`,{
            userId: user.id,
            addressId: user.addressId,
            cart
        })
        .then(res => {
            setOrderId(
                (res.data.id.toString())
                .padStart(8,'0')
            );
        });
    }, []);

    return (
        <OutterBox>
            <Main>
                <h1>Sua compra foi realizada com sucesso! <FaCheckCircle /></h1>
                <p>Número do pedido: {orderId.padStart()}</p>
            </Main>
        </OutterBox>
    );
}

const Main = styled.main`
    text-align: center;
    height: 100%;
    width: 850px;

    h1 {
        font-size: 30px;
        font-weight: 700;
        margin: 5vh 0 10vh 0;

        svg {
            color: green;
            margin-bottom: -3px;
        }
    }

    p {
        color: #6A6868;
        font-size: 24px;
    }
`;
