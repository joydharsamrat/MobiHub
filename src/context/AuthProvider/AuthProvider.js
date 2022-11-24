import React, { useEffect, useState } from 'react';
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithPopup, onAuthStateChanged, GoogleAuthProvider, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import app from '../../firebase/Firebase.config';

export const authContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider()
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const GoogleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        })

        return () => unsubscribe();
    }, [])
    const authInfo =
    {
        user,
        loading,
        createUser,
        logIn

    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;

