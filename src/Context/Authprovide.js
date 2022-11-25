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

  const createuser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleSignin = (provider) => {
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

  const authinfo = {
    createuser,
    login,
    googleSignin,
    updateuser,
    user,
    logout,
  };

  return (
    <Authcontext.Provider value={authinfo}>
      {!loading && children}
    </Authcontext.Provider>
  );
};

export default Authprovide;
