import styled from 'styled-components';

const MainButton = styled.button`
    background-color: ${ props => props.clicked ? '#B1C8D7' : '#2D82B7'};
    border-radius: 5px;
    color: #FFF;
    font-size: 20px;
    font-weight: 700;
    padding: 10px 0;
    text-align: center;
    width: 100%;
`;

export default MainButton;
