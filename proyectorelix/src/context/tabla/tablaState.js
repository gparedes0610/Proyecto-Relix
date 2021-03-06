import { useReducer } from "react";

import tablaContext from "./tablaContext";

import tablaReducer from "./tablaReducer";

import {
  OBTENER_DATOS_TABLA,
  AGREGAR_DATOS_TABLA,
  ACTUALIZAR_DATOS_TABLA,
  GUARDAR_COTIZACIONES,
  GUARDAR_COTIZACIONES_EN_LA_BD,
} from "../../types";
import clienteAxios from "../../config/axios";

const TablaStateProvider = (props) => {
  const initialState = {
    tablaDatos: [],
    cotizaciones: [],
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
      console.log("hay un error");
      console.log(error.response.data.messages.error);
    }
  };

  const agregarDatosTabla = async (datos) => {
    //tarea.id = uuidv4();
    console.log("estas en agregarDatosTabla y has enviado", datos);
    try {
      const resultado = await clienteAxios.post("/detallefichatecnica", datos);
      console.log("resultado de agregarDatosTabla", resultado);
      console.log(
        "resultado de agregarDatosTabla,ESTO ES LO Q ME DEVUELVE",
        resultado.data
      );
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
  //////////////////guardar cotizacion
  /* const guardarCotizacion = async (idFichaTecnica) => {
    console.log("en guardarCotizacion el id es", idFichaTecnica);
    try {
      const resultado = await clienteAxios.put(
        "/detallefichatecnica",
        idFichaTecnica
      );
      console.log("resultado de agregarDatosTabla", resultado);
      console.log("resultado de agregarDatosTabla", resultado.data);
      dispatch({
        type: GUARDAR_COTIZACIONES,
        payload: resultado.data,
      });
    } catch (error) {
      console.log(error.response.data.messages.error);
    }
  }; */
  //////////////////guardar cotizacion
  const guardarCotizacionEnLaBd = async (data) => {
    console.log("esta es la data en guardarCotizacionEnLaBd ", data);
    try {
      const resultado = await clienteAxios.put("/guardardataficha", data);
      console.log("resultado de agregarDatosTabla", resultado);
      console.log("resultado de agregarDatosTabla", resultado.data);
      dispatch({
        type: GUARDAR_COTIZACIONES_EN_LA_BD,
        payload: resultado.data,
      });
    } catch (error) {
      console.log(error.response.data.messages.error);
    }
  };

  return (
    <tablaContext.Provider
      value={{
        tablaDatos: state.tablaDatos,
        cotizaciones: state.cotizaciones,
        resultado: state.resultado,
        obtenerDatosTabla,
        agregarDatosTabla,
        actualizarDatosTabla,
        //guardarCotizacion,
        guardarCotizacionEnLaBd,
      }}
    >
      {props.children}
    </tablaContext.Provider>
  );
};

export default TablaStateProvider;
