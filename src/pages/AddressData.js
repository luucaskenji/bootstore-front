import React, { useState, useEffect, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import OutterBox from '../components/OutterBox';
import MainButton from '../components/MainButton';
import MainForm from '../components/MainForm';
import DogBox from '../components/DogBox';

export default function AddressData () {
    const history = useHistory();
    const [ clicked, setClicked ] = useState(false);

    function submitForm (event) {
        event.preventDefault();
        //const fieldsFilled = checkFields();
        const fieldsFilled = true;

        if (fieldsFilled) {
            setClicked(true);
            proceedSubmiting();
        }
        else {
            alert('Por favor, preencha todos os campos');
        }
    }

    function checkFields () {
        //
    }

    function proceedSubmiting () {
        //const request = axios.post(``, {});
        //request.then(submitSucceeded);
        //request.catch(submitFailed);
        submitSucceeded();
    }

    function submitSucceeded () {
        setClicked(false);
        history.push('/escolher-pagamento');
    }

    function submitFailed () {
        alert('Não foi possível enviar seus dados, tente novamente');
        setClicked(false);
    }
  
    return (
        <OutterBox>
            <Main>
                <MainForm onSubmit={submitForm}>
                    <h2>Endereço</h2>

                    <label htmlFor='cep'>CEP:</label>
                    <input type='text' id='cep'/>
                    
                    <label htmlFor='street'>Rua:</label>
                    <input type='text' id='street'/>

                    <label htmlFor='streetNumber'>Número:</label>
                    <input type='text' id='streetNumber'/>

                    <label htmlFor='complement'>Complemento:</label>
                    <input type='text' id='complement'/>

                    <label htmlFor='neighborhood'>Bairro:</label>
                    <input type='text' id='neighborhood'/>

                    <label htmlFor='city'>Cidade:</label>
                    <input type='text' id='city'/>

                    <label htmlFor='state'>Estado:</label>
                    <input type='text' id='state'/>

                    <MainButton>Ir para pagamento</MainButton>
                </MainForm>

                <DogBox>
                    <img src='/images/yogadog2.png' />
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


//width form 500px;