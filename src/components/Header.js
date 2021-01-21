import React from 'react';
import { useHistory, Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa';
import { FiArrowLeftCircle } from 'react-icons/fi';

export default function Header() {
    const history = useHistory();
    const currentRoute = useLocation();

    return (
        <HeaderContainer>
            <Logo>
                <img src='/images/logo.png' alt='voltar à página principal'/>
                <h1>MeditAí</h1>
            </Logo>
            <IconsDiv>
                {currentRoute.pathname === '/'
                    ? (
                        <Link to='/carrinho'>
                            <FaShoppingCart />
                            <p>Carrinho</p>
                        </Link>
                    )
                    : (
                        <>
                        <a onClick={()=>history.goBack()}>
                            <FiArrowLeftCircle />
                            <p>Voltar</p>
                        </a>
                        <Link to='/carrinho'>
                            <FaShoppingCart />
                            <p>Carrinho</p>
                        </Link>
                        </>
                    )
                } 
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

    a {
        align-items: center;
        display: flex;
        flex-direction: column;
        font-size: 25px;
        justify-content: space-between;
        margin-left: 15px;
        cursor:pointer;
        p {
            font-size: 17px;
            font-weight: 400;
            margin-top: 5px;
        }
    }
`;
