import React, { useState, useEffect, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import OutterBox from '../components/OutterBox';
import MainButton from '../components/MainButton';
import { useCartContext } from '../contexts/CartContext';

export default function Product() {
    const history = useHistory();
    const { id } = useParams();
    const { cart, setCart } = useCartContext();
    const [clicked, setClicked] = useState(false);
    const [product, setProduct] = useState(null);
    const [mainPhoto, setMainPhoto] = useState(null);
    console.log(cart);
    useEffect(() => {
        axios.get(`http://localhost:3000/products/${id}`)
            .then(res => {
                setProduct(res.data);
                setMainPhoto(res.data.mainPicture);
            });
    }, []);
    
    function updateCart() {
        if (!cart) {
            setCart([{ product, quantity: 0 }]);
        } else {
            const cartProduct = cart.find(o => o.product.id === product.id);
            if(cartProduct){
                cartProduct.quantity = cartProduct.quantity + 1;
                setCart([...cart]);
            } else{
                setCart([...cart, { product, quantity: 1 }])
            }
        }

        history.push('/');
    }

    if (product === null) {
        //add loading;
        return <h1>loading</h1>;
    }
    return (
        <OutterBox>
            <Main>
                <PhotoSection>
                    <div className='main-photo'>
                        {<img src={mainPhoto} />}
                    </div>
                    <div className='photo-menu'>
                        <img src={product.mainPicture} onClick={() => setMainPhoto(product.mainPicture)} />
                        {product.pictures.map(p =>
                            <img src={p.url} key={p.id} onClick={() => setMainPhoto(p.url)} />
                        )}
                    </div>
                </PhotoSection>

                <DescriptionSection className='description'>
                    <h2>{product.name}</h2>
                    <h3>{`R$ ${product.price / 100}`}</h3>
                    <p>
                        {product.description}
                    </p>
                    <MainButton clicked={clicked} onClick={updateCart}>
                        {clicked ? 'Adicionando' : 'Adicionar'} ao carrinho
                    </MainButton>
                </DescriptionSection>
            </Main>
        </OutterBox>
    );
}

const Main = styled.main`
    display: flex;
    height: 100%;
    justify-content: space-between;
    width: 850px;

    section {
        background-color: rgba(250,250,250,0.8);
        border-radius: 25px;
        height: 600px;
        width: 400px;
    }
`;

const DescriptionSection = styled.section`
    display: flex;
    flex-direction: column;
    padding: 30px 25px 20px 25px;

    h2 {
        font-size: 26px;
    }
    h3 {
        font-size: 24px;
        margin: 20px 0;
    }
    p {
        flex-grow: 1;
        font-size: 20px;
        line-height: 30px;
        overflow: scroll;
    }
`;

//object-fit: contain;
const PhotoSection = styled.section`
    .main-photo {
        align-items: center;
        display: flex;
        height: 400px;
        width: 400px;

        img {
            max-height: 100%;
            width: 100%;
        }
    }

    .photo-menu {
        display: flex;
        height: 100%;
        margin-top: 40px;
        width: 100%;

        img {
            height: 80px;
            margin-right: 10px;
            width: 80px;
            cursor: pointer;
        }
    }
`;

//border-radius: 7px;
// box-shadow: 3px 2px 10px 1px #B7B5B2;
