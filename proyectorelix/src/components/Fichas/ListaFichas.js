import React, { useContext, useEffect, useState } from "react";
import fichaTecnicaContext from "../../context/fichaTecnica/fichaTecnicaContext";
import Ficha from "./Ficha";

function ListaFichas() {
  ///////////////////////////////
  const fichatecnicacontext = useContext(fichaTecnicaContext);
  const {
    registroDeFichaTecnica,
    obtenerTodasLasFichasTecnicas,
    todasLasFichasTecnica,
  } = fichatecnicacontext;
  //////////////////////////////
  return (
    <ul class="list-group">
      {todasLasFichasTecnica.map((fichatecnica, i) => (
        <li key={i}>
          <Ficha fichatecnica={fichatecnica} />
        </li>
      ))}
    </ul>
  );
}

export default ListaFichas;
