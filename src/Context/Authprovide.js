import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";
import app from "../firebase/Firebase.config";

export const Authcontext = createContext();
const auth = getAuth(app);

const Authprovide = ({ children }) => {
  const [user, setuser] = useState();
  const [loading, setloading] = useState(true);

  const createUser = (email, password) => {
    setloading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    setloading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleSignIn = (provider) => {
    return signInWithPopup(auth, provider);
  };

  const updateuser = (userinfo) => {
    return updateProfile(auth.currentUser, userinfo);
  };
  const logout = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setuser(currentuser);
      console.log(currentuser);
      setloading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    createUser,
    login,
    googleSignIn,
    updateuser,
    user,
    logout,
    loading,
  };

  return (
    <Authcontext.Provider value={authInfo}>
      {!loading && children}
    </Authcontext.Provider>
  );
};

export default Authprovide;
