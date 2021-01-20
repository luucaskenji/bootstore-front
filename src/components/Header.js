import React from 'react';
import styled from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa';

export default function Header() {

    return (
        <HeaderContainer>
            <Logo>
                <img src='/images/logo.png' alt='voltar à página principal'/>
                <h1>MeditAí</h1>
            </Logo>
            <Icon>
                <FaShoppingCart />
                <p>Carrinho</p>
            </Icon>
        </HeaderContainer>
    );
}

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    padding: 0 20px;
    background: #38B2B8;
    color: #FFFFFF;

    h1 {
        font: 30px 'Merienda', cursive;
        margin-left: 10px;
    }
`;

const Logo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;

    img {
        height: 100%;
        border-radius: 50%;
    }
`;

const Icon = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-size: 25px;

    p {
        font-size: 17px;
        font-weight: 400;
    }
`;