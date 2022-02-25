import {
  TODAS_LAS_FICHAS_TECNICAS,
  REGISTRO_FICHATECNICA_EXITOSA,
  REGISTRO_FICHATECNICA_ERROR,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case REGISTRO_FICHATECNICA_EXITOSA:
      return {
        ...state,
        //todasLasFichasTecnica: [action.payload, ...state.todasLasFichasTecnica],
        //alerta: action.payload,
      };
    case TODAS_LAS_FICHAS_TECNICAS:
      return {
        ...state,
        todasLasFichasTecnica: action.payload,
        //alerta: action.payload,
      };
    default:
      return state;
  }
};
