import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Authcontext } from "../../Context/Authprovide";

const Privateroute = ({ children }) => {
  const { user } = useContext(Authcontext);
  const location = useLocation();
  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default Privateroute;
