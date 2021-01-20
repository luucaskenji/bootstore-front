import React, { useState, useEffect, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

export default function Product () {
    const history = useHistory();
    const { id } = useParams();
  
    return (
        <OutterBox> Temporary Home Page </OutterBox>
    );
}

const OutterBox = styled.div`
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    margin-top: 100px;
    width: 100%;
`;