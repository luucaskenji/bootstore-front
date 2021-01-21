import React, { useState, useEffect, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import OutterBox from '../components/OutterBox';
import MainButton from '../components/MainButton';
import MainForm from '../components/MainForm';
import DogBox from '../components/DogBox';

export default function PersonalData () {
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
        // setName('');
        // setSurname('');
        // setCpf('');
        history.push('/endereco');
    }

    function submitFailed () {
        alert('Não foi possível enviar seus dados, tente novamente');
        setClicked(false);
    }
  
    return (
        <OutterBox>
            <Main>
                <MainForm onSubmit={submitForm}>
                    <h2>Dados Pessoais</h2>

                    <label htmlFor='name'>Nome:</label>
                    <input type='text' id='name'/>
                    
                    <label htmlFor='surname'>Sobrenome:</label>
                    <input type='text' id='surname'/>

                    <label htmlFor='cpf'>CPF:</label>
                    <input type='text' id='cpf'/>

                    <div className='to-fill'></div>

                    <MainButton>Próximo</MainButton>
                </MainForm>

                <DogBox>
                    <img src='/images/yogadog1.png' />
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