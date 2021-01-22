import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import InputMask from 'react-input-mask';
import UserContext from '../contexts/UserContext';
import OutterBox from '../components/OutterBox';
import MainButton from '../components/MainButton';
import MainForm from '../components/MainForm';
import DogBox from '../components/DogBox';

export default function PersonalData () {
    const history = useHistory();
    const { setUserId } = useContext(UserContext);
    const [ clicked, setClicked ] = useState(false);
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ cpf, setCpf ] = useState('');

    function submitForm (event) {
        event.preventDefault();
        setClicked(true);
        proceedSubmiting();
    }

    function proceedSubmiting () {
        const request = axios.post('http://localhost:3000/users', {name, email, cpf});  
        request.then( res => submitSucceeded(res.data));
        request.catch(submitFailed);
    }

    function submitSucceeded (user) {
        setUserId(user.id);
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

                    <label htmlFor='name'>Nome completo:</label>
                    <input 
                        type='text' 
                        id='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}   
                        required 
                    />
                    
                    <label htmlFor='email'>Email:</label>
                    <input 
                        type='text' 
                        id='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}   
                        required 
                    />

                    <label htmlFor='cpf'>CPF:</label>
                    <InputMask
                        mask={'999.999.999-99'} 
                        type='text' 
                        id='cpf'
                        value={cpf}
                        onChange={(e) => setCpf(e.target.value)}   
                        required
                    />

                    <div className='to-fill'></div>

                    <MainButton available={true} disabled={clicked} clicked={clicked}>
                        Preencher endereço
                    </MainButton>
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
