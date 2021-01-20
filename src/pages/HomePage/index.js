import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import Category from '../../components/Category';
import { ProductContext } from '../../contexts/ProductContext';

export default function HomePage() {
  const { categories, setCategories, setProducts } = useContext(ProductContext);
  
  useEffect(() => {
    axios.get('http://localhost:3002/products').then(resp => {
      setCategories(resp.data);
    });

    axios.get('http://localhost:3002/products').then(resp => {
      setProducts(resp.data);
    });
  },[]);

  return (
    <HomeContainer>
      {/* <TopSelling /> */}
      {/* {categories.map(c => <Category key={c.id} name={c.name}/>)} */}
      <h1>Carregando ...</h1>
    </HomeContainer>
  );
}

const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 20px;
`;