import { useReducer } from "react";

import fichaTecnicaContext from "./fichaTecnicaContext";
import fichaTecnicaReducer from "./fichaTecnicaReducer";

import {
  TODAS_LAS_FICHAS_TECNICAS,
  REGISTRO_FICHATECNICA_EXITOSA,
  REGISTRO_FICHATECNICA_ERROR,
} from "../../types";
import clienteAxios from "../../config/axios";
const FichaTecnicaStateProvider = (props) => {
  const initialState = {
    todasLasFichasTecnica: [],
  };

  const [state, dispatch] = useReducer(fichaTecnicaReducer, initialState);
  ////registrar ficha tecnica
  const registroDeFichaTecnica = async (datos) => {
    console.log("entraste a registroDeFichaTecnica", datos);
    try {
      const respuesta = await clienteAxios.post("/api/fichatecnica", datos);
      console.log("respuesta de registroDeFichaTecnica", respuesta);
      console.log(respuesta.data);
      dispatch({
        type: REGISTRO_FICHATECNICA_EXITOSA,
        payload: datos,
      });
    } catch (error) {
      console.log(error);
      console.log(error.response.data.messages.error);
    }
  };

  const obtenerTodasLasFichasTecnicas = async () => {
    try {
      const respuesta = await clienteAxios.get("/api/fichatecnica");
      console.log("respuesta de obtenerTodasLasFichasTecnicas", respuesta.data);
      dispatch({
        type: TODAS_LAS_FICHAS_TECNICAS,
        payload: respuesta.data,
      });
    } catch (error) {
      console.log(error.response.data.messages.error);
    }
  };

  return (
    <fichaTecnicaContext.Provider
      value={{
        todasLasFichasTecnica: state.todasLasFichasTecnica,
        registroDeFichaTecnica,
        obtenerTodasLasFichasTecnicas,
      }}
    >
      {props.children}
    </fichaTecnicaContext.Provider>
  );
};

export default FichaTecnicaStateProvider;
