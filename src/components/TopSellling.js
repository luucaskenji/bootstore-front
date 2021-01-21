import React, { useContext } from 'react';
import styled from 'styled-components';
import { ProductContext } from '../contexts/ProductContext';
import Product from '../components/Product';

export default function TopSelling(props) {
    const { products } = useContext(ProductContext);

    return(
        <TopSellingContainer>
            <h2>Destaques</h2>
            <Products>
                <h3>INSERIR PRODUTOS EM DESTAQUE AQUI!!!</h3>
            </Products>
        </TopSellingContainer>
    );
}

const TopSellingContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 15px;
    padding: 10px;
    overflow-x: scroll;

    h2 {
        font-size: 22px;
        font-weight: 500;
        margin-bottom: 12px;
    }
`;

const Product = styled.ul`
    display: flex;
    justify-content: space-between;
    height: 180px;
    width: 120px;
    border-radius: 7px;
    box-shadow: 3px 1px 1px #B7B5B2;
`;