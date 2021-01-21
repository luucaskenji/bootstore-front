import React, { useState, useEffect, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import OutterBox from '../components/OutterBox';
import MainButton from '../components/MainButton';
import { useCartContext } from '../contexts/CartContext';
import QuantityButtons from '../components/QuantityButtons';

export default function Cart() {
    const history = useHistory();
    const { cart, setCart } = useCartContext();
    const [clicked, setClicked] = useState(false);
    const [quantity, setQuantity] = useState(0);
    let [total, setTotal] = useState(0);

    function closeOrder () {
        //fechar ordem
        history.push('/dados-pessoais');
    }

    return (
        <OutterBox>
            <Title>Meu carrinho</Title>
            <Main>
                <ProductsList>
                    {cart.map(item =>
                        <ProductLi>
                            <div className='img-box'>
                                <img src={item.product.mainPicture} />
                            </div>

                            <DescriptionBox>
                                <h3>{`R$ ${item.product.price / 100}`}</h3>
                                <p>{item.product.description}</p>
                                <QuantityButtons item={item} />
                            </DescriptionBox>
                        </ProductLi>
                    )}

                </ProductsList>

                <TotalSection className='description'>
                    <h2>Total no carrinho</h2>

                    <PriceList>
                        {cart.map(item => {
                            total += item.product.price * item.quantity;
                            return (
                                <li>
                                    <p>{`${item.quantity}x`}</p>
                                    <p>{item.product.name}</p>
                                    <p>{`R$ ${item.quantity * (item.product.price / 100)}`}</p>
                                </li>
                            )
                        })}
                    </PriceList>

                    <TotalSpan>
                        <p>Total</p>
                        <p>{`R$ ${total / 100}`}</p>
                    </TotalSpan>

                    <MainButton clicked={clicked} onClick={closeOrder}>
                        {clicked ? 'Fechando' : 'Fechar'} compra
                    </MainButton>
                </TotalSection>
            </Main>
        </OutterBox>
    );
}

const QuantityBox = styled.div`
    border: 1px solid #000;
    padding: 10px;
    width: 80px;
    display:flex;
    justify-content: space-between;
`;

const Title = styled.h1`
    font-size: 34px;
    margin-bottom: 40px;
`;

const Main = styled.main`
    display: flex;
    height: 100%;
    justify-content: space-between;
    width: 850px;

    section {
        background-color: rgba(250,250,250,0.8);
        border-radius: 25px;
        height: 600px;
        width: 400px;
    }
`;

const ProductsList = styled.ul`
    background-color: rgba(250,250,250,0.8);
    border-radius: 25px;
    height: 600px;
    overflow: hidden;
    padding: 40px 20px;
    width: 400px;
`;

const ProductLi = styled.li`
    background-color: lightblue;
    border-bottom: 1px solid #ece6de;
    display: flex;
    height: 25%;
    width: 100%;

    .img-box {
        height: 100%;
        width: 35%;
        img {
            height: 100%;
            width: 100%;
        }
    }
`;

const DescriptionBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    width: 60%;

    h3 {
        font-size: 20px;
    }
    p {
        flex-grow: 1;
        font-size: 16px;
        margin-top: 15px;
        overflow:hidden;
    }
`;

const TotalSection = styled.section`
    display: flex;
    flex-direction: column;
    padding: 30px 25px 20px 25px;

    h2 {
        border-bottom: 1px solid #ece6de;
        font-size: 26px;
        padding-bottom: 10px;
        text-align: center;
    }
    
    p {
        font-size: 20px;
    }
`;

const PriceList = styled.ul`
    flex-grow: 1;
    overflow: scroll;
    width: 100%;

    li {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
        width: 100%;
    }
`;

const TotalSpan = styled.span`
    display: flex;
    justify-content: space-between;
    padding: 20px;

    p {
        font-size: 23px;
    }
`;