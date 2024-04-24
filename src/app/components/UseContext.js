"use client";
import { useContext } from 'react';
import { AuthContext } from './AuthContext';
const UseContext = () => {
    const user = useContext(AuthContext);
    console.log(user);
    return (
        <div>
            {/* <p>Welcome, {user.role}!</p> */}
        </div>
    )
}

export default UseContext
