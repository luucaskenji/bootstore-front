import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa';
import { FiArrowLeftCircle } from 'react-icons/fi';

export default function Header() {
    const history = useHistory();

    return (
        <HeaderContainer>
            <Logo>
                <img src='/images/logo.png' alt='voltar à página principal'/>
                <h1>MeditAí</h1>
            </Logo>
            <IconsDiv>
                <button>
                    <FiArrowLeftCircle />
                    <p>Voltar</p>
                </button>
                <button onClick={() => history.push('/carrinho')}>
                    <FaShoppingCart />
                    <p>Carrinho</p>
                </button>
            </IconsDiv>
            
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
        font: 32px 'Merienda', cursive;
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

const IconsDiv = styled.div` 
    display: flex;

    button {
        align-items: center;
        display: flex;
        flex-direction: column;
        font-size: 25px;
        justify-content: space-between;
        margin-left: 15px;
        p {
            font-size: 17px;
            font-weight: 400;
            margin-top: 5px;
        }
    }
`;
