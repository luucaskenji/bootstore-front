import React, { createContext, useState } from 'react';

const UserContext = createContext();
export default UserContext;

export function UserProvider (props) {
    const [ userId, setUserId ] = useState('');
    const [ addressId, setAddressId ] = useState('');
    const [ orderId, setOrderId ] = useState('');
    const [ paymentMethod, setPaymentMethod ] = useState('');

    const value = {
        userId,
        setUserId,
        addressId,
        setAddressId,
        paymentMethod,
        setPaymentMethod,
        orderId,
        setOrderId
    };

    return (
        <UserContext.Provider value = {value}>
            {props.children}
        </UserContext.Provider>
    );
}
