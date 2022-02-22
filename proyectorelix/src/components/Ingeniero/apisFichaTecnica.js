import axios, { Axios } from "axios";

const URLTIPOSPROYECTOS = `http://relixapi.mskdevmusic.com/tiposproyecto`;
const URLVENDEDORES = `http://relixapi.mskdevmusic.com/vendedor`;
const URLDEPARTAMENTOS = `http://relixapi.mskdevmusic.com/departamento`;
const obtenerTiposDeProyectos = async () => {
  try {
    const { data } = await axios.get(URLTIPOSPROYECTOS);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const obtenerVendedores = async () => {
  try {
    const { data } = await axios.get(URLVENDEDORES);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const obtenerDepartamentos = async () => {
  try {
    const { data } = await axios.get(URLDEPARTAMENTOS);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { obtenerTiposDeProyectos, obtenerVendedores, obtenerDepartamentos };
