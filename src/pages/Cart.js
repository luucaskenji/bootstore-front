import React, { useState, useEffect, useContext } from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';
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
    useEffect(() => {
        setClicked(false);
    }, []);
    function toCheckout() {
        setClicked(true);
        setTimeout(() => {
            setClicked(false);
            if (cart.length > 0) {
                history.push('/dados-pessoais');
            }
        }, 500);

    }
    if (cart.length === 0) {
        return (
            <OutterBox>
                <div>
                    <Title>Seu carrinho está vazio!</Title>

                    <MainButton available={true} onClick={() => history.push('/')}>
                        Adicionar produtos
                    </MainButton>
                </div>
            </OutterBox>
        )
    }
    return (
        <OutterBox>
            <Title>Meu carrinho</Title>
            <Main>
                <ProductsList>
                    {cart.map(item =>
                        <ProductLi key={item.product.id}>
                            <div className='img-box' onClick={() => history.push(`/produto/${item.product.id}`)}>
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
                                    <div className="flex">
                                        <p className="itemQuantity">{`${item.quantity}x`}</p>
                                        <p className="itemName">{item.product.name}</p>
                                    </div>
                                    <p className="itemPrice">{`R$ ${item.quantity * (item.product.price / 100)}`}</p>
                                </li>
                            )
                        })}
                    </PriceList>

                    <TotalSpan>
                        <p>Total</p>
                        <p>{`R$ ${total / 100}`}</p>
                    </TotalSpan>

                    <MainButton clicked={clicked} onClick={toCheckout} available={true}>
                        {clicked ? 'Fechando' : 'Fechar'} compra
                    </MainButton>
                </TotalSection>
            </Main>
        </OutterBox >
    );
}

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
    overflow-y: scroll;
    overflow-x: hidden;
    padding: 40px 20px;
    width: 400px;
`;

const ProductLi = styled.li`
    margin: 0 0 10px 0;
    padding-bottom: 10px;
    border-bottom: 1px solid #ece6de;
    display: flex;
    height: 25%;
    width: 100%;

    .img-box {
        height: 100%;
        width: 35%;
        cursor: pointer;
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
        font-size: 16px;
        margin: 5px 0;
        display: -webkit-box;   
        -webkit-line-clamp: 3;   
        -webkit-box-orient: vertical;     
        overflow: hidden; 
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
        font-size: 16px;
        display:block;
    }
`;

const PriceList = styled.ul`
    overflow-y: scroll;
    overflow-x: hidden;
    width: 100%;
    flex-grow:1;
    li {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
        width: 100%;
        .itemQuantity{
            margin-right: 5px;
        }
        .itemName{
            max-width:250px;
            overflow:hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
        }

    }
    .flex{
        display:flex;
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
