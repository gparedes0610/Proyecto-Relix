import { useReducer } from "react";

import tablaContext from "./tablaContext";

import tablaReducer from "./tablaReducer";

import {
  OBTENER_DATOS_TABLA,
  AGREGAR_DATOS_TABLA,
  ACTUALIZAR_DATOS_TABLA,
} from "../../types";
import clienteAxios from "../../config/axios";

const TablaStateProvider = (props) => {
  const initialState = {
    tablaDatos: [],
  };

  const [state, dispatch] = useReducer(tablaReducer, initialState);

  //obtener valores en la Tabla
  const obtenerDatosTabla = async (ficha) => {
    //console.log("entraste a obtenerDatosTabla Y PASASTE ESTE ID", ficha);
    //console.log("esta es el id", ficha.idFichatecnica);

    /*  const idFicha = JSON.stringify({
      idFichatecnica: ficha.idFichatecnica,
    }); */
    /* const fichaIdObjeto = {
      idFichatecnica: ficha.idFichatecnica,
    };
    console.log("este es el objeto", fichaIdObjeto); */
    try {
      const resultado = await clienteAxios.get(
        `/detallefichatecnica/${ficha.idFichatecnica}`
      );

      //console.log("TABLA", ficha);
      /* console.log(
        "Estoy en obtenerDatosTabla y este es el resultado",
        resultado.data
      ); */

      dispatch({
        type: OBTENER_DATOS_TABLA,
        payload: resultado.data, // lo ejecuta usefect al cargar la pagina
      });
    } catch (error) {
      console.log(error);
    }
  };

  const agregarDatosTabla = async (datos) => {
    //tarea.id = uuidv4();
    console.log("estas en agregarDatosTabla y has enviado", datos);
    try {
      const resultado = await clienteAxios.post("/detallefichatecnica", datos);
      console.log("resultado de agregarDatosTabla", resultado);
      console.log("resultado de agregarDatosTabla", resultado.data);
      dispatch({
        type: AGREGAR_DATOS_TABLA,
        payload: resultado.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  /**
   *
   * @param {any} rowUpdated
   * @param {string} keyId El nombre de la columna de la tabla que representa el Id
   */
  const actualizarDatosTabla = (rowUpdated, keyId) => {
    dispatch({
      type: ACTUALIZAR_DATOS_TABLA,
      payload: { rowUpdated, keyId },
    });
  };

  return (
    <tablaContext.Provider
      value={{
        tablaDatos: state.tablaDatos,
        obtenerDatosTabla,
        agregarDatosTabla,
        actualizarDatosTabla,
      }}
    >
      {props.children}
    </tablaContext.Provider>
  );
};

export default TablaStateProvider;
