import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import Category from '../../components/Category';
import TopSelling from '../../components/TopSellling';
import { ProductContext } from '../../contexts/ProductContext';

export default function HomePage() {
  const { categories, setCategories, setProducts, topProducts, setTopProducts } = useContext(ProductContext);
  
  useEffect(() => {
    axios.get('http://localhost:3000/categories').then(resp => {
      setCategories(resp.data);
    });

    axios.get('http://localhost:3000/products').then(resp => {
      setProducts(resp.data);
    });

    axios.get('http://localhost:3000/products/top-sellers').then(resp => {
      console.log(resp.data);
      setTopProducts(resp.data);
    });
  },[]);

  return (
    <HomeContainer>
      <TopSelling />
      {categories.map(c => <Category key={c.id} name={c.name}/>)}
    </HomeContainer>
  );
}

const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 20px;
`;