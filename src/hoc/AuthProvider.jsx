import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState(null);

    const auth = getAuth();

    const register = async ({name, email, password}, error) => {
        
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                updateProfile(auth.currentUser, {
                    displayName: name
                });

                localStorage.setItem('uid', user.uid)

            })
            .catch(({ message }) => error(message))

    };

    const login = async ({email, password}, error) => {
        
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                localStorage.setItem('uid', user.uid)
            })
            .catch(({message}) => error(message))

    };
  
    const value = {register, login};

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}

export default AuthProvider