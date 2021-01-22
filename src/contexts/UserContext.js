import React, { createContext, useState } from 'react';

const UserContext = createContext();
export default UserContext;

export function UserProvider (props) {
    const [ userId, setUserId ] = useState('');
    const [ addressId, setAddressId ] = useState('');
    const [ paymentMethod, setPaymentMethod ] = useState('');
    const [ cardName, setCardName ] = useState('');
    const [ cardNumber, setCardNumber ] = useState('');
    const [ expiration, setExpiration ] = useState('');
    const [ cvv, setCvv ] = useState('');

    const value = {
        userId,
        setUserId,
        addressId,
        setAddressId,
        paymentMethod,
        setPaymentMethod,
        cardName,
        setCardName,
        cardNumber,
        setCardNumber,
        expiration,
        setExpiration,
        cvv,
        setCvv
    };

    return (
        <UserContext.Provider value = {value}>
            {props.children}
        </UserContext.Provider>
    );
}
