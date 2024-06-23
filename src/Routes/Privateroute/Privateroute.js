import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Authcontext } from "../../Context/Authprovide";

const Privateroute = ({ children }) => {
  const { user, loading } = useContext(Authcontext);
  const location = useLocation();
  if (loading) {
    return <h1>Loading </h1>;
  }
  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default Privateroute;
