import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import useAxiosPublic from "../Hooks/useAxiosPublic";

export const AuthContext=createContext(null);
const auth=getAuth(app);
const provider= new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null);
    const [loading, setLoading]=useState(true);
    const axiosPublic =useAxiosPublic();

    const createUser=(email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const googleLogin=()=>{
      return signInWithPopup(auth, provider);
    }

    const userLogin=(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut=()=>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            if(currentUser){
                const userInfo ={email: currentUser.email};
                axiosPublic.post('/jwt', userInfo)
                .then(res=>{
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token);
                    }
                })
            }else{
                localStorage.removeItem('access-token');
            }
            setLoading(false);
        })
        return ()=>{
            unSubscribe();
        }
    },[axiosPublic])

    const authInfo ={user, createUser, loading, logOut, userLogin, googleLogin};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;