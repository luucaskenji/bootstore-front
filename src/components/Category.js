import React, { useContext } from 'react';
import styled from 'styled-components';
import { ProductContext } from '../contexts/ProductContext';
import Product from '../components/Product';

export default function Category(props) {
    const { name } = props;
    const { products } = useContext(ProductContext);
    const filteredProducts = products.filter(p => p.categories.find(c => c.name === name));

    if(filteredProducts.length === 0) {
        return <></>
    }

    return(
        <CategoryContainer>
            <h2>{name}</h2>
            <Products> 
                {filteredProducts.map(fp => {
                    return <Product key={fp.id} name={fp.name} price={fp.price} image={fp.mainPicture}/>
                })}
            </Products>
        </CategoryContainer>
    );
}

const CategoryContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 15px 30px;
    padding-bottom: 10px;
    overflow-x: scroll;

    h2 {
        font-size: 27px;
        margin-bottom: 20px;
    }
`;

const Products = styled.ul`
    display: flex;
    justify-content: space-between;
`;