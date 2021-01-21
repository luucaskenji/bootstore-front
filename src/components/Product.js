import React from 'react';
import styled from 'styled-components';
import Dinero from 'dinero.js'; 
import { Link } from 'react-router-dom';

export default function Product(props) {
    const { id, name, price, image } = props;

    const correctPrice = Dinero({amount: parseInt(price), currency: 'BRL', precision: 2}).toFormat("$0,0.00");

    return(
        <ProductContainer>
            <Link to={`/produto/${id}`}><img src={image} /></Link>
            <Caption>
                <Link to={`/produto/${id}`}><p>{name}</p></Link>
                <span>{correctPrice}</span>
            </Caption>
        </ProductContainer>
    );
}

const ProductContainer = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 170px;
    width: 13vw;
    margin-right: 50px;
    border-radius: 7px;
    box-shadow: 3px 2px 10px 1px #B7B5B2;

    img {
        width: 100%;
        border-top-left-radius: 7px;
        border-top-right-radius: 7px;
    }
`;

const Caption = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;

    p {
        font-size: 16px;
        margin-bottom: 10px;
    }

    span {
        font-size: 15px;
        font-weight: 700;
    }
`;