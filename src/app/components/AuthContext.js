"use client";
import { createContext, useContext } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const user = { username: 'john_doe', role: 'admin' };
    
    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};