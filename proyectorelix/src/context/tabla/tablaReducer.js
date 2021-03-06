import {
  OBTENER_DATOS_TABLA,
  AGREGAR_DATOS_TABLA,
  ACTUALIZAR_DATOS_TABLA,
  GUARDAR_COTIZACIONES,
  GUARDAR_COTIZACIONES_EN_LA_BD,
} from "../../types";

const tableReducer = (state, action) => {
  switch (action.type) {
    case OBTENER_DATOS_TABLA:
      return {
        ...state,
        tablaDatos: action.payload,
      };
    case AGREGAR_DATOS_TABLA:
      return {
        ...state,
        tablaDatos: action.payload,
      };
    case GUARDAR_COTIZACIONES:
      return {
        ...state,
        cotizaciones: action.payload,
      };
    case GUARDAR_COTIZACIONES_EN_LA_BD:
      return {
        ...state,
        tablaDatos: action.payload,
      };
    case ACTUALIZAR_DATOS_TABLA:
      const { rowUpdated, keyId } = action.payload;
      const tablaDatos = state.tablaDatos.map((tarea) => {
        return tarea[keyId] === rowUpdated[keyId] ? rowUpdated : tarea;
      });
      return {
        ...state,
        tablaDatos,
      };
    default:
      return state;
  }
};

export default tableReducer;
