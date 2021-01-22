import React, { createContext, useState } from 'react';

const UserContext = createContext();
export default UserContext;

export function UserProvider (props) {
    const [ userId, setUserId ] = useState('');
    const [ addressId, setAddressId ] = useState('');

    return (
        <UserContext.Provider value = {{
            userId,
            setUserId,
            addressId,
            setAddressId
        }}>
            {props.children}
        </UserContext.Provider>
    );
}
