import React, { useState, useEffect, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import OutterBox from '../components/OutterBox';
import MainButton from '../components/MainButton';
import MainForm from '../components/MainForm';
import DogBox from '../components/DogBox';


export default function CreditCard () {
    const history = useHistory();
    const [ clicked, setClicked ] = useState(false);
  
    return (
        <OutterBox>
            <Main>
                <MainForm>
                    <h2>Dados do cartão</h2>

                    <label htmlFor='name'>Nome no cartão:</label>
                    <input type='text' id='name'/>
                    
                    <label htmlFor='cardNumber'>Número do cartão:</label>
                    <input type='number' id='cardNumber'/>

                    <label htmlFor='date'>Data de validade:</label>
                    <input type='text' id='date'/>

                    <label htmlFor='cvv'>CVV:</label>
                    <input type='number' id='cvv'/>

                    <div className='to-fill'></div>

                    <MainButton>Finalizar compra</MainButton>
                </MainForm>

                <DogBox>
                    <img src='/images/yogacat.png' />
                </DogBox>
            </Main>
        </OutterBox>
    );
}

const Main = styled.main`
    display: flex;
    height: 100%;
    justify-content: space-between;
    width: 850px;
`;
