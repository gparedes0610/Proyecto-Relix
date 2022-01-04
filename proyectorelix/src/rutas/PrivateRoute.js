import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute(props) {
  /* const { usuario } = useContext(TokenContext);
  const { idRol } = usuario;
  console.log("soy rol y estoy en privateroute de administrador", idRol); */
  const usuriodeLS = JSON.parse(localStorage.getItem("appUsuarios"));

  console.log(
    "estoy en private route ing y vengo del local storage",
    usuriodeLS
  );
  console.log("este rol viene del localstorage", usuriodeLS[0].idRol);
  /*   {
        if (rol ==='1'){
            <Navigate to="/" />
        }else if(rol ==='2'){
            <Navigate to="/" />
        }
    } */
  return usuriodeLS[0].idRol === "1" ? props.children : <Navigate to="/" />;
}

export default PrivateRoute;
