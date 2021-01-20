import React from 'react';
import styled from 'styled-components';
import Dinero from 'dinero.js'; 

export default function Product(props) {
    const { name, price, image } = props;

    const correctPrice = Dinero({amount: parseInt(price), currency: 'BRL', precision: 2}).toFormat("$0,0.00");

    return(
        <ProductContainer>
            <img src={image} />
            <Caption>
                <p>{name}</p>
                <span>{correctPrice}</span>
            </Caption>
        </ProductContainer>
    );
}

const ProductContainer = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 10px;
    height: 180px;
    width: 120px;
    border-radius: 7px;
    box-shadow: 5px 5px 2px #B7B5B2;
`;

const Caption = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;