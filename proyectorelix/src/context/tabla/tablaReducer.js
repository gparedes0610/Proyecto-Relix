import { OBTENER_DATOS_TABLA, AGREGAR_DATOS_TABLA } from "../../types";

export default (state, action) => {
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
    default:
      return state;
  }
};
