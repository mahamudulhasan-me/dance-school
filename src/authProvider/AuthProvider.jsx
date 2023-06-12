import axios from "axios";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/Firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  // signIn With email password
  const logInWithEmailPassword = (email, password) => {
    setLoading(false);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   signIn with google
  const logInWithGoogle = () => {
    setLoading(false);
    return signInWithPopup(auth, googleProvider);
  };
  //   create new user
  const createNewUser = (email, password) => {
    setLoading(false);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //   handle logout
  const logout = () => {
    return signOut(auth);
  };
  //   check user is login or not
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        axios
          .post(`https://dance-school-server-roan.vercel.app/jwt`, {
            email: currentUser?.email,
          })
          .then((res) => {
            localStorage.setItem("access-token", res.data);
            console.log(res.data);
          });
        setLoading(false);
      } else {
        localStorage.removeItem("access-token");
      }
      return () => unsubscribe;
    });
  }, []);

  const authInfo = {
    user,
    loading,
    createNewUser,
    logInWithGoogle,
    logInWithEmailPassword,
    logout,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
