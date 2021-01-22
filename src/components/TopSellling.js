import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { ProductContext } from '../contexts/ProductContext';
import Product from './Product';

export default function TopSelling() {
    const { topProducts, setLoading } = useContext(ProductContext);

    return(
        <TopSellingContainer>
            <h2>Destaques</h2>
            <Products>
                {topProducts.map(tp => <Product key={tp.id} id={tp.id} name={tp.name} price={tp.price} image={tp.mainPicture}/>)}
            </Products>
        </TopSellingContainer>
    );
}

const TopSellingContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 15px 20px;
    padding-bottom: 10px;
    width: 75vw;
    max-width: 620px;

    h2 {
        font-size: 27px;
        margin-bottom: 20px;
        padding-left: 10px;
    }
`;

const Products = styled.ul`
    display: flex;
    justify-content: space-between;
    overflow-x: scroll;
    padding: 10px;
`;