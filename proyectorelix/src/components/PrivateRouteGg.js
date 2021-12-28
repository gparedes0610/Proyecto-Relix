import React, { useContext } from "react";
import { TokenContext } from "../context/tokenContext";
import { Navigate } from "react-router-dom";

function PrivateRouteGg(props) {
  const { rol } = useContext(TokenContext);
  return rol === 2 ? props.children : <Navigate to="/" />;
}

export default PrivateRouteGg;
