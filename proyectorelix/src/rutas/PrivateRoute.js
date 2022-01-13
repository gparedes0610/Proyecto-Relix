import React, { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import authContext from "../context/autenticacion/authContext";

function PrivateRoute(props) {
  const autentificaciones = useContext(authContext);
  const { autenticado, usuarioAutenticado, cargando } = autentificaciones;

  useEffect(() => {}, []);

  return <div>habla cgda</div>;
}

export default PrivateRoute;
