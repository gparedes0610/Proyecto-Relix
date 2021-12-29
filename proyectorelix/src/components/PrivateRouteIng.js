import React, { useContext } from "react";
import { TokenContext } from "../context/tokenContext";
import { Navigate } from "react-router-dom";
function PrivateRouteIng(props) {
  const { usuario, ingeniero } = useContext(TokenContext);
  console.log("estoy en private route ing", usuario);
  console.log("estoy en private route ing y este es mi rol", usuario[0].idRol);
  //const { idRol } = usuario;
  /*   console.log(
    "estoy en privateroute de ingeniero y mi sol res",
    usuario[0].idRol
  ); */
  //console.log(`estoy en privateroute ing`, usuario);
  //const idRol = JSON.parse(localStorage.getItem("idRol"));
  return usuario[0].idRol === "3" ? props.children : <Navigate to="/" />;
}

export default PrivateRouteIng;
