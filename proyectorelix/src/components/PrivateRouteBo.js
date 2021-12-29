import React, { useContext } from "react";
import { TokenContext } from "../context/tokenContext";
import { Navigate } from "react-router-dom";

function PrivateRouteBo(props) {
  const { rol } = useContext(TokenContext);
  return rol === 4 ? props.children : <Navigate to="/" />;
}

export default PrivateRouteBo;
