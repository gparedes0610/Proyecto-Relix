import authContext from "./authContext";
import authReducer from "./authReducer";
import {
  REGISTRO_EXITOSO,
  REGISTRO_ERROR,
  OBTENER_USUARIO,
  LOGIN_EXITOSO,
  LOGIN_ERROR,
  CERRAR_SESION,
} from "../../types";
import { useReducer } from "react";
import clienteAxios from "../../config/axios"; //obtengo la bd urlS
import tokenAuth from "../../config/token"; //valido el token en el headers
const AuthStateProvider = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    autenticado: null,
    usuario: null,
    mensaje: null,
    cargando: true,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  //iniciar sesion

  return (
    <authContext.Provider value={{}}>{props.children}</authContext.Provider>
  );
};
export default AuthStateProvider;
