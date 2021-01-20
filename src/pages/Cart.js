import React, { useState, useEffect, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import OutterBox from '../components/OutterBox';
import MainButton from '../components/MainButton';

export default function Cart () {
    const history = useHistory();
    const [ clicked, setClicked ] = useState(false);
    const [ quantity, setQuantity ] = useState(0);
  
    return (
        <OutterBox>
            <Title>Meu carrinho</Title>
            <Main>
                <ProductsList>
                    <ProductLi>
                        <div className='img-box'>
                            <img src='/images/temporary.jpeg' />
                        </div>

                        <DescriptionBox>
                            <h3>R$197</h3>
                            <p>O tapete de yoga clássico que não esfarela</p>
                            <QuantityButtons quantity={quantity} />
                        </DescriptionBox>
                    </ProductLi>
                   
                </ProductsList>

                <TotalSection className='description'>
                    <h2>Total no carrinho</h2>

                    <PriceList>
                        <li>
                            <p>Calça Legging Levi</p>
                            <p>R$197</p>
                        </li>
                        <li>
                            <p>Calça Legging Levi</p>
                            <p>R$197</p>
                        </li>
                        <li>
                            <p>Calça Legging Levi</p>
                            <p>R$197</p>
                        </li>
                    </PriceList>

                    <TotalSpan>
                        <p>Total</p>
                        <p>R$255</p>
                    </TotalSpan>
                    
                    <MainButton clicked={clicked}>
                        {clicked ? 'Fechando' : 'Fechar'} compra
                    </MainButton>
                </TotalSection>
            </Main>
        </OutterBox>
    );
}

function QuantityButtons (props) {
    const { quantity } = props;
    return (
        <QuantityBox>+  {quantity}  -</QuantityBox>
    );
}
const QuantityBox = styled.div`
    border: 1px solid #000;
    padding: 10px;
    width: 80px;
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