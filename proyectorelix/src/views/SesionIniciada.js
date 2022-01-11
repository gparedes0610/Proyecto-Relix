import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import "../components/Navbar.css";

import BdSimulado from "../services/BdSimulado.json";

import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

import ComoTrabajar from "../components/ComoTrabajar";
import Tabla from "../components/Ingeniero/Tabla";
import FormFicha from "../components/Fichas/FormFicha";
import ListaFichas from "../components/Fichas/ListaFichas";

function SesionIniciada() {
  useEffect(() => {}, []);
  return (
    <>
      <NavBar />

      <div className="container-fluid">
        {/* muestra requisitos */}
        <div className="row">
          <ComoTrabajar />
        </div>
        {/* muestra requisitos */}
        <div className="row">
          <div className="col-12 col-md-9">
            <Tabla />
          </div>

          <div className="col-12 col-md-3 text-center mt-2">
            <div className="row">
              <div className="col-12">
                <FormFicha />
              </div>
            </div>
            <div className="row mt-4 text-start">
              <div className="col-12">
                <h5>Lista de Fichas</h5>
                <ListaFichas />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SesionIniciada;
