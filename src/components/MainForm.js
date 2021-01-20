import styled from 'styled-components';

const MainForm = styled.form` 
    background-color: rgba(250,250,250,0.8);
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    min-height: 600px;
    padding: 20px;
    width: 500px;

    h2 {
        font-size: 20px;
        font-weight: 700;
        margin: 20px 0;
    }

    label {
        font-size: 18px;
        margin-bottom: 5px;
    }

    input {
        border: 1px solid #CCC;
        border-radius: 5px;
        font-size: 16px;
        margin-bottom: 20px;
        padding: 10px;
        width: 100%;
    }

    button {
        align-self: flex-end;
    }

    .to-fill {
        flex-grow: 1;
    }
`;


export default MainForm;
