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

export default function AddressData () {
    const history = useHistory();
    const { userId, setAddressId } = useContext(UserContext);
    const [ clicked, setClicked ] = useState(false);
    const [ cep, setCep ] = useState('');
    const [ streetName, setStreetName ] = useState('');
    const [ streetNumber, setStreetNumber ] = useState('');
    const [ complement, setComplement ] = useState('');
    const [ neighbourhood, setNeighbourhood ] = useState('');
    const [ city, setCity ] = useState('');
    const [ state, setState ] = useState('');

    function processCep (cepInput) {
        setCep(cepInput);
        if (cepInput[8] !== '_') {
            setClicked(true);
            const formattedCep = formatCep(cepInput);
            sendCep(formattedCep);
        }
    }

    function sendCep (cepNumber) {
        const request = axios.get(`https://viacep.com.br/ws/${cepNumber}/json/`);
        request.then( res => cepSucceeded(res.data));
        request.catch( () => setClicked(false) );
    }

    function cepSucceeded (fullAddress) {
        setStreetName(fullAddress.logradouro);
        setNeighbourhood(fullAddress.bairro);
        setCity(fullAddress.localidade);
        setState(fullAddress.uf);
        setClicked(false);
    }

    function submitForm (event) {
        event.preventDefault();
        const allowed = checkStateAndNumber();
        
        if (allowed) {
            setClicked(true);
            proceedSubmiting();
        }
        else {
            alert('Por favor, preencha o número e o estado corretamente');
        }
    }

    function checkStateAndNumber () {
        const regexState = new RegExp('^[A-Z]{2}$');
        const regexStreetNumber = new RegExp('^[0-9]+$');
        const stateValid = regexState.test(state);
        const streetNumberValid = regexStreetNumber.test(streetNumber);
        return stateValid && streetNumberValid;
    }

    function proceedSubmiting () {   
        const body = { cep, streetName, streetNumber, neighbourhood, city, state };
        if (complement) body.complement = complement;
        const request = axios.post(`http://localhost:3000/users/${userId}/address`, body);
        request.then( res => submitSucceeded(res.data));
        request.catch( error => submitFailed(error));
    }

    function submitSucceeded (addressData) {
        setAddressId(addressData.id);
        history.push('/escolher-pagamento');
    }

    function submitFailed (error) {
        console.log(error);
        alert('Não foi possível enviar seus dados, tente novamente');
        setClicked(false);
    }
  
    return (
        <OutterBox>
            <Main>
                <MainForm onSubmit={submitForm}>
                    <h2>Endereço</h2>

                    <label htmlFor='cep'>CEP:</label>
                    <InputMask
                        mask={'99999-999'}
                        type='text' 
                        id='cep'
                        value={cep}
                        onChange={(e) => processCep(e.target.value)}   
                        required
                    />
                    
                    <label htmlFor='streetName'>Rua:</label>
                    <input 
                        type='text' 
                        id='streetName'
                        value={streetName}
                        onChange={(e) => setStreetName(e.target.value)}   
                        required
                    />

                    <label htmlFor='streetNumber'>Número:</label>
                    <input 
                        type='text' 
                        id='streetNumber'
                        value={streetNumber}
                        onChange={(e) => setStreetNumber(e.target.value)}   
                        required
                    />

                    <label htmlFor='complement'>Complemento:</label>
                    <input 
                        type='text' 
                        id='complement'
                        value={complement}
                        onChange={(e) => setComplement(e.target.value)}
                    />

                    <label htmlFor='neighbourhood'>Bairro:</label>
                    <input 
                        type='text' 
                        id='neighbourhood'
                        value={neighbourhood}
                        onChange={(e) => setNeighbourhood(e.target.value)}   
                        required
                    />

                    <label htmlFor='city'>Cidade:</label>
                    <input 
                        type='text' 
                        id='city'
                        value={city}
                        onChange={(e) => setCity(e.target.value)}   
                        required
                    />

                    <label htmlFor='state'>Estado:</label>
                    <input 
                        type='text' 
                        id='state'
                        value={state}
                        onChange={(e) => setState(e.target.value)}   
                        required
                    />

                    <MainButton available={true} disabled={clicked} clicked={clicked}>
                        Ir para pagamento
                    </MainButton>
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

function formatCep (cep) {
    const hifenIndex = cep.indexOf('-');
    const formattedCep = cep.slice(0, hifenIndex) + cep.slice(hifenIndex + 1, cep.length);
    return formattedCep;
}
