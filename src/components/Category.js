import React, { useContext } from 'react';
import styled from 'styled-components';
import { ProductContext } from '../contexts/ProductContext';
import Product from '../components/Product';

export default function Category(props) {
    const { name } = props;
    const { products } = useContext(ProductContext);

    return(
        <CategoryContainer>
            <h2>{name}</h2>
            <Products>
                {products.filter(p => {
                    for(let i=0; i<p.categories; i++) {
                        return p.categories[i].name === name;
                    }
                }).map(fp => <Product key={fp.id} name={fp.name} price={fp.price} image={fp.mainPicture}/>)}
            </Products>
        </CategoryContainer>
    );
}

const CategoryContainer = styled.section`
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

const Products = styled.ul`
    display: flex;
    justify-content: space-between;
`;