import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { TokenContext } from "../context/tokenContext";

function PrivateRoute(props) {
  const { usuario } = useContext(TokenContext);
  const { idRol } = usuario;
  console.log("soy rol y estoy en privateroute de administrador", idRol);
  /*   {
        if (rol ==='1'){
            <Navigate to="/" />
        }else if(rol ==='2'){
            <Navigate to="/" />
        }
    } */
  return idRol === 1 ? props.children : <Navigate to="/" />;
}

export default PrivateRoute;
