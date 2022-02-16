import authContext from "./authContext";
import authReducer from "./authReducer";
import {
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

  //retorna el usuario autenticado
  const usuarioAutenticado = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      //todo:funcion para enviar el token por headers
      tokenAuth(token);
    }

    try {
      const respuesta = await clienteAxios.get("/auth/login");
      // console.log("esta es la respuesta en usuarioAutenticado", respuesta);
      dispatch({
        type: OBTENER_USUARIO,
        payload: respuesta.data,
      });
    } catch (error) {
      console.log(error.response.data.messages.error);
      dispatch({
        type: LOGIN_ERROR,
      });
    }
  };

  //iniciar sesion
  const iniciarSesion = async (datos) => {
    try {
      const respuesta = await clienteAxios.post("/auth/login", datos); //envio correo y clave
      console.log(respuesta);
      ////
      dispatch({
        type: LOGIN_EXITOSO,
        payload: respuesta.data,
      });

      //obtener el usuario
      usuarioAutenticado();
    } catch (error) {
      //console.log("HUBO UN ERROR PES CSMRE", error);
      console.log(
        "HUBO UN ERROR PES CSMRE",
        error.response.data.messages.error
      );
      const alerta = {
        msg: error.response.data.messages.error,
        categoria: "alert alert-danger",
      };
      dispatch({
        type: LOGIN_ERROR,
        payload: alerta,
      });
    }
  };

  //cerrar sesion

  const cerrarSesion = () => {
    dispatch({
      type: CERRAR_SESION,
    });
  };

  return (
    <authContext.Provider
      value={{
        token: state.token,
        autenticado: state.autenticado,
        usuario: state.usuario,
        mensaje: state.mensaje,
        cargando: state.cargando,
        iniciarSesion,
        usuarioAutenticado,
        cerrarSesion,
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};
export default AuthStateProvider;
