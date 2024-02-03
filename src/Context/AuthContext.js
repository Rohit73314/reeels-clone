import React, { useState, useEffect } from 'react'
import { auth } from "../firebase";
// import firebase from 'firebase/compat/app';

import { Alert } from '@mui/material';
export const AuthContext = React.createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState();
    // const [email,setEmail] = useState('')
    const [loading, setLoading] = useState(true);

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password);
    }
    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password);
    }
    function logout() {
        return auth.signOut();
    }
    // email=user.email.val();
    function forgetpassword(email) {
        if (email !== null) {
         return auth.sendPasswordResetEmail(email)
            .then(() => {
                alert("Password reset email sent successfully");

             }).catch((err) => {
                const errormessage = err.message;
                alert(errormessage);
            })
        } else {
            alert("please enter a valid email")
        }

    }

    useEffect(() => {
        const unsub = auth.onAuthStateChanged((user) => {
            setUser(user);
            setLoading(false);
        })
        return () => {
            unsub();//cleanup
        }
    }, [])

    const store = {
        user,
        signup,
        login,
        logout,
        forgetpassword
    }

    return (
        <AuthContext.Provider value={store}>
            {!loading && children}
        </AuthContext.Provider>
    )


}
