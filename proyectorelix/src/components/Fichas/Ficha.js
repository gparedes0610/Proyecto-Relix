import React, { useContext, useEffect, useState } from "react";
import fichaTecnicaContext from "../../context/fichaTecnica/fichaTecnicaContext";
import "./styles.css";
import tablaContext from "../../context/tabla/tablaContext";
function Ficha({ fichatecnica, setActivarFicha, ActivarFicha }) {
  const [existeTabla, setExisteTabla] = useState(false);
  //////////////////////
  const tablacontext = useContext(tablaContext);
  const { tablaDatos, obtenerDatosTabla } = tablacontext;
  ////////////////////////
  ///////////////////////////////
  const fichatecnicacontext = useContext(fichaTecnicaContext);
  const {
    fichaTecnica,
    todasLasFichasTecnica,
    registroDeFichaTecnica,
    obtenerTodasLasFichasTecnicas,
    fichaTecnicaActual,
    guardarFichaActual,
  } = fichatecnicacontext;
  //////////////////////////////

  //console.log("ficha tecnica", fichaTecnica);
  ////////////////////////////////////////////////////////TABLA EN CADA FICHA
  const crearTabla = (fichaTecnicaId) => {
    console.log(
      "hizo click en ver tabla y el id de esa fichatecnica es ",
      fichaTecnicaId,
      "ficha tecnica",
      fichatecnica
    );
    //console.log("y este es el objeto", fichatecnica);
    fichaTecnicaActual(fichaTecnicaId); // me chapa todos los datos de la ficha seleccionada
    //tmb deberia llamar los datos de la tabla por el id de la ficha
    obtenerDatosTabla(fichatecnica); // manda la ficha objeto, pero luego solo se envia el id de esa ficha en el get
  };

  /////////////////////////////////////////PARA EDITAR
  const btnEditar = () => {
    setActivarFicha(!ActivarFicha);
    console.log("hiciste click en editar");
    guardarFichaActual(fichatecnica);
  };
  return (
    <li className="list-group-item d-flex justify-content-between">
      <div>
        <p className="fw-bolder  text-uppercase my-0 py-0 mb-2">
          {fichatecnica.nombreFichatecnica}
        </p>
        <p
          className="my-0 py-0  fw-bold text-center text-uppercase estado"
          style={{ border: "2px solid #F18721", borderRadius: "25px" }}
        >
          {fichatecnica.estadoFichaproyecto}
        </p>
      </div>
      <div className="d-flex ">
        <button
          className="btn btn-success mx-2 py-0"
          onClick={() => crearTabla(fichatecnica.idFichatecnica)}
        >
          Ver Tabla
        </button>{" "}
        <button className="btn btn-warning py-0" onClick={() => btnEditar()}>
          Editar
        </button>
      </div>
    </li>
  );
}

export default Ficha;
