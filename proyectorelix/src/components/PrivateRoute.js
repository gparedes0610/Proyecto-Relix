import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { TokenContext } from "../context/tokenContext";

function PrivateRoute(props) {
  const { rol } = useContext(TokenContext);
  /*   {
        if (rol ==='1'){
            <Navigate to="/" />
        }else if(rol ==='2'){
            <Navigate to="/" />
        }
    } */
  return rol === "1" ? (
    props.children
  ) : rol === "2" ? (
    <Navigate to="/sesioniniciada" />
  ) : (
    <Navigate to="/" />
  );
}

export default PrivateRoute;
