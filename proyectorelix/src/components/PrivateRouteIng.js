import React, { useContext } from "react";
import { TokenContext } from "../context/tokenContext";
import { Navigate } from "react-router-dom";
function PrivateRouteIng(props) {
  const { rol } = useContext(TokenContext);
  return rol === 3 ? props.children : <Navigate to="/" />;
}

export default PrivateRouteIng;
