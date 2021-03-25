import React, { useContext } from 'react'
import './Client.css';
import { AuthContext } from '../Context/AuthContext';
function Client() {
    const { user } = useContext(AuthContext);
    return (
        <div className='client' >
            <h1>Client Page</h1>
            <p>Email : {user.email}</p>
            <p>city : {user.city}</p>
            <p>estbName: {user.estbName}</p>
        </div>
    )
}

export default Client
