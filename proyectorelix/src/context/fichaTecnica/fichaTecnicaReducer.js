import {
  TODAS_LAS_FICHAS_TECNICAS,
  REGISTRO_FICHATECNICA_EXITOSA,
  REGISTRO_FICHATECNICA_ERROR,
  FICHATECNICA_ACTUAL,
  FICHA_EDICION,
  ACTUALIZAR_FICHA,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case REGISTRO_FICHATECNICA_EXITOSA:
      return {
        ...state,

        //todasLasFichasTecnica: [action.payload, ...state.todasLasFichasTecnica],
        //alerta: action.payload,
        todasLasFichasTecnica: [...state.todasLasFichasTecnica, action.payload],
      };
    case TODAS_LAS_FICHAS_TECNICAS:
      return {
        ...state,
        todasLasFichasTecnica: action.payload,
        //alerta: action.payload,
      };
    case FICHATECNICA_ACTUAL:
      return {
        ...state,
        fichaTecnica: state.todasLasFichasTecnica.filter(
          (ftecnica) => ftecnica.idFichatecnica === action.payload
        ),
      };
    case FICHA_EDICION:
      return {
        ...state,
        fichaEdicion: action.payload,
      };
    case ACTUALIZAR_FICHA:
      return {
        ...state,
        todasLasFichasTecnica: state.todasLasFichasTecnica.map((ficha) =>
          ficha.id === action.payload.id ? action.payload : ficha
        ),
      };
    default:
      return state;
  }
};
