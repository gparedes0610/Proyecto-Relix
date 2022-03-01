import React, { useContext, useEffect, useState } from "react";
import fichaTecnicaContext from "../../context/fichaTecnica/fichaTecnicaContext";
import "./styles.css";
function Ficha({ fichatecnica, setActivarFicha, ActivarFicha }) {
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
  const crearTabla = (fichaTecnicaId) => {
    console.log(
      "hizo click en crear tabla y el id de esa fichatecnica es ",
      fichaTecnicaId
    );
    console.log("y este es el objeto", fichatecnica);
    fichaTecnicaActual(fichaTecnicaId);
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
          Crear Tabla
        </button>{" "}
        <button className="btn btn-warning py-0" onClick={() => btnEditar()}>
          Editar
        </button>
      </div>
    </li>
  );
}

export default Ficha;
