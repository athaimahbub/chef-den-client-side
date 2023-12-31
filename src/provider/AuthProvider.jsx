/* eslint-disable no-unused-vars,react/no-unescaped-entities,react/prop-types */

import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../firebase/firebase.config.js';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {
      const user = null

    const createUser = (email,password) => {
         return createUserWithEmailAndPassword(auth,email,password);
    }

    const authInfo = {
        user,
        createUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;