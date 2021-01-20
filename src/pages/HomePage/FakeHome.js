import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { ProductContext } from '../../contexts/ProductContext';

export default function FakeHomePage() {
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
        <CategoryContainer>
            <h2>Categoria 1</h2>
            <Products>
                <ProductContainer>
                    <img src="https://decathlonpro.vteximg.com.br/arquivos/ids/2272577-1000-1000/soft-yoga-mat-light-5-mm-blue-1.jpg" />
                    <Caption>
                        <p>Lindo Tapete</p>
                        <span>R$ 4.500,00</span>
                    </Caption>
                </ProductContainer>
                <ProductContainer>
                    <img src="https://decathlonpro.vteximg.com.br/arquivos/ids/2272577-1000-1000/soft-yoga-mat-light-5-mm-blue-1.jpg" />
                    <Caption>
                        <p>Lindo Tapete</p>
                        <span>R$ 4.500,00</span>
                    </Caption>
                </ProductContainer>
                <ProductContainer>
                    <img src="https://decathlonpro.vteximg.com.br/arquivos/ids/2272577-1000-1000/soft-yoga-mat-light-5-mm-blue-1.jpg" />
                    <Caption>
                        <p>Lindo Tapete</p>
                        <span>R$ 4.500,00</span>
                    </Caption>
                </ProductContainer>
                <ProductContainer>
                    <img src="https://decathlonpro.vteximg.com.br/arquivos/ids/2272577-1000-1000/soft-yoga-mat-light-5-mm-blue-1.jpg" />
                    <Caption>
                        <p>Lindo Tapete</p>
                        <span>R$ 4.500,00</span>
                    </Caption>
                </ProductContainer>
                <ProductContainer>
                    <img src="https://decathlonpro.vteximg.com.br/arquivos/ids/2272577-1000-1000/soft-yoga-mat-light-5-mm-blue-1.jpg" />
                    <Caption>
                        <p>Lindo Tapete</p>
                        <span>R$ 4.500,00</span>
                    </Caption>
                </ProductContainer>
                <ProductContainer>
                    <img src="https://decathlonpro.vteximg.com.br/arquivos/ids/2272577-1000-1000/soft-yoga-mat-light-5-mm-blue-1.jpg" />
                    <Caption>
                        <p>Lindo Tapete</p>
                        <span>R$ 4.500,00</span>
                    </Caption>
                </ProductContainer>
                <ProductContainer>
                    <img src="https://decathlonpro.vteximg.com.br/arquivos/ids/2272577-1000-1000/soft-yoga-mat-light-5-mm-blue-1.jpg" />
                    <Caption>
                        <p>Lindo Tapete</p>
                        <span>R$ 4.500,00</span>
                    </Caption>
                </ProductContainer>
                <ProductContainer>
                    <img src="https://decathlonpro.vteximg.com.br/arquivos/ids/2272577-1000-1000/soft-yoga-mat-light-5-mm-blue-1.jpg" />
                    <Caption>
                        <p>Lindo Tapete</p>
                        <span>R$ 4.500,00</span>
                    </Caption>
                </ProductContainer>
                <ProductContainer>
                    <img src="https://decathlonpro.vteximg.com.br/arquivos/ids/2272577-1000-1000/soft-yoga-mat-light-5-mm-blue-1.jpg" />
                    <Caption>
                        <p>Lindo Tapete</p>
                        <span>R$ 4.500,00</span>
                    </Caption>
                </ProductContainer>
                <ProductContainer>
                    <img src="https://decathlonpro.vteximg.com.br/arquivos/ids/2272577-1000-1000/soft-yoga-mat-light-5-mm-blue-1.jpg" />
                    <Caption>
                        <p>Lindo Tapete</p>
                        <span>R$ 4.500,00</span>
                    </Caption>
                </ProductContainer>
            </Products>
        </CategoryContainer>
        <CategoryContainer>
            <h2>Categoria 2</h2>
            <Products>
                <ProductContainer>
                    <img src="https://sitedocafe.com.br/wp-content/uploads/2020/05/74325314_1GG.jpg" />
                    <Caption>
                        <p>Lindo Incenso</p>
                        <span>R$ 200,00</span>
                    </Caption>
                </ProductContainer>
                <ProductContainer>
                    <img src="https://sitedocafe.com.br/wp-content/uploads/2020/05/74325314_1GG.jpg" />
                    <Caption>
                        <p>Lindo Incenso</p>
                        <span>R$ 200,00</span>
                    </Caption>
                </ProductContainer>
                <ProductContainer>
                    <img src="https://sitedocafe.com.br/wp-content/uploads/2020/05/74325314_1GG.jpg" />
                    <Caption>
                        <p>Lindo Incenso</p>
                        <span>R$ 200,00</span>
                    </Caption>
                </ProductContainer>
                <ProductContainer>
                    <img src="https://sitedocafe.com.br/wp-content/uploads/2020/05/74325314_1GG.jpg" />
                    <Caption>
                        <p>Lindo Incenso</p>
                        <span>R$ 200,00</span>
                    </Caption>
                </ProductContainer>
                <ProductContainer>
                    <img src="https://sitedocafe.com.br/wp-content/uploads/2020/05/74325314_1GG.jpg" />
                    <Caption>
                        <p>Lindo Incenso</p>
                        <span>R$ 200,00</span>
                    </Caption>
                </ProductContainer>
                <ProductContainer>
                    <img src="https://sitedocafe.com.br/wp-content/uploads/2020/05/74325314_1GG.jpg" />
                    <Caption>
                        <p>Lindo Incenso</p>
                        <span>R$ 200,00</span>
                    </Caption>
                </ProductContainer>
                <ProductContainer>
                    <img src="https://sitedocafe.com.br/wp-content/uploads/2020/05/74325314_1GG.jpg" />
                    <Caption>
                        <p>Lindo Incenso</p>
                        <span>R$ 200,00</span>
                    </Caption>
                </ProductContainer>
                <ProductContainer>
                    <img src="https://sitedocafe.com.br/wp-content/uploads/2020/05/74325314_1GG.jpg" />
                    <Caption>
                        <p>Lindo Incenso</p>
                        <span>R$ 200,00</span>
                    </Caption>
                </ProductContainer>
                <ProductContainer>
                    <img src="https://sitedocafe.com.br/wp-content/uploads/2020/05/74325314_1GG.jpg" />
                    <Caption>
                        <p>Lindo Incenso</p>
                        <span>R$ 200,00</span>
                    </Caption>
                </ProductContainer>
                <ProductContainer>
                    <img src="https://sitedocafe.com.br/wp-content/uploads/2020/05/74325314_1GG.jpg" />
                    <Caption>
                        <p>Lindo Incenso</p>
                        <span>R$ 200,00</span>
                    </Caption>
                </ProductContainer>
            </Products>
        </CategoryContainer>
        <CategoryContainer>
            <h2>Categoria 3</h2>
            <Products>
                <ProductContainer>
                    <img src="https://imagens-revista.vivadecora.com.br/uploads/2018/11/decora%C3%A7%C3%A3o-de-festa-com-v%C3%A1rios-modelos-de-filtro-dos-sonhos-Foto-Pinterest.jpg" />
                    <Caption>
                        <p>Lindo Filtro dos Sonhos</p>
                        <span>R$ 1.480,90</span>
                    </Caption>
                </ProductContainer>
                <ProductContainer>
                    <img src="https://imagens-revista.vivadecora.com.br/uploads/2018/11/decora%C3%A7%C3%A3o-de-festa-com-v%C3%A1rios-modelos-de-filtro-dos-sonhos-Foto-Pinterest.jpg" />
                    <Caption>
                        <p>Lindo Filtro dos Sonhos</p>
                        <span>R$ 1.480,90</span>
                    </Caption>
                </ProductContainer>
                <ProductContainer>
                    <img src="https://imagens-revista.vivadecora.com.br/uploads/2018/11/decora%C3%A7%C3%A3o-de-festa-com-v%C3%A1rios-modelos-de-filtro-dos-sonhos-Foto-Pinterest.jpg" />
                    <Caption>
                        <p>Lindo Filtro dos Sonhos</p>
                        <span>R$ 1.480,90</span>
                    </Caption>
                </ProductContainer>
                <ProductContainer>
                    <img src="https://imagens-revista.vivadecora.com.br/uploads/2018/11/decora%C3%A7%C3%A3o-de-festa-com-v%C3%A1rios-modelos-de-filtro-dos-sonhos-Foto-Pinterest.jpg" />
                    <Caption>
                        <p>Lindo Filtro dos Sonhos</p>
                        <span>R$ 1.480,90</span>
                    </Caption>
                </ProductContainer>
                <ProductContainer>
                    <img src="https://imagens-revista.vivadecora.com.br/uploads/2018/11/decora%C3%A7%C3%A3o-de-festa-com-v%C3%A1rios-modelos-de-filtro-dos-sonhos-Foto-Pinterest.jpg" />
                    <Caption>
                        <p>Lindo Filtro dos Sonhos</p>
                        <span>R$ 1.480,90</span>
                    </Caption>
                </ProductContainer>
                <ProductContainer>
                    <img src="https://imagens-revista.vivadecora.com.br/uploads/2018/11/decora%C3%A7%C3%A3o-de-festa-com-v%C3%A1rios-modelos-de-filtro-dos-sonhos-Foto-Pinterest.jpg" />
                    <Caption>
                        <p>Lindo Filtro dos Sonhos</p>
                        <span>R$ 1.480,90</span>
                    </Caption>
                </ProductContainer>
                <ProductContainer>
                    <img src="https://imagens-revista.vivadecora.com.br/uploads/2018/11/decora%C3%A7%C3%A3o-de-festa-com-v%C3%A1rios-modelos-de-filtro-dos-sonhos-Foto-Pinterest.jpg" />
                    <Caption>
                        <p>Lindo Filtro dos Sonhos</p>
                        <span>R$ 1.480,90</span>
                    </Caption>
                </ProductContainer>
                <ProductContainer>
                    <img src="https://imagens-revista.vivadecora.com.br/uploads/2018/11/decora%C3%A7%C3%A3o-de-festa-com-v%C3%A1rios-modelos-de-filtro-dos-sonhos-Foto-Pinterest.jpg" />
                    <Caption>
                        <p>Lindo Filtro dos Sonhos</p>
                        <span>R$ 1.480,90</span>
                    </Caption>
                </ProductContainer>
                <ProductContainer>
                    <img src="https://imagens-revista.vivadecora.com.br/uploads/2018/11/decora%C3%A7%C3%A3o-de-festa-com-v%C3%A1rios-modelos-de-filtro-dos-sonhos-Foto-Pinterest.jpg" />
                    <Caption>
                        <p>Lindo Filtro dos Sonhos</p>
                        <span>R$ 1.480,90</span>
                    </Caption>
                </ProductContainer>
                <ProductContainer>
                    <img src="https://imagens-revista.vivadecora.com.br/uploads/2018/11/decora%C3%A7%C3%A3o-de-festa-com-v%C3%A1rios-modelos-de-filtro-dos-sonhos-Foto-Pinterest.jpg" />
                    <Caption>
                        <p>Lindo Filtro dos Sonhos</p>
                        <span>R$ 1.480,90</span>
                    </Caption>
                </ProductContainer>
            </Products>
        </CategoryContainer>
    </HomeContainer>
  );
}

const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 20px;
`;

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

const ProductContainer = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 50px;
    width: 120px;
    border-radius: 7px;
    box-shadow: 5px 5px 2px #B7B5B2;

    img {
        height: 22vh;
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
        font-size: 13px;
        font-weight: 700;
    }
`;