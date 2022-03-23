import React, { useContext, useEffect, useState } from "react";
import fichaTecnicaContext from "../../context/fichaTecnica/fichaTecnicaContext";
import Ficha from "./Ficha";

function ListaFichas({ setActivarFicha, ActivarFicha }) {
  ///////////////////////////////
  const fichatecnicacontext = useContext(fichaTecnicaContext);
  const {
    registroDeFichaTecnica,
    obtenerTodasLasFichasTecnicas,
    todasLasFichasTecnica,
  } = fichatecnicacontext;
  //////////////////////////////
  return (
    <ul className="list-group cambiarcolores">
      {todasLasFichasTecnica.length > 0 ? (
        todasLasFichasTecnica.map((fichatecnica, i) => (
          <Ficha
            fichatecnica={fichatecnica}
            key={i}
            setActivarFicha={setActivarFicha}
            ActivarFicha={ActivarFicha}
          />
        ))
      ) : (
        <p className="text-danger lead">No existe fichas tecnicas asignadas</p>
      )}
    </ul>
  );
}

export default ListaFichas;
