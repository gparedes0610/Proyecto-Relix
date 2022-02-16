import React, { useContext, useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import "../components/Navbar.css";

import BdSimulado from "../services/BdSimulado.json";

import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

import ComoTrabajar from "../components/ComoTrabajar";
import Tabla from "../components/Ingeniero/Tabla";
import BtnCrearFicha from "../components/Fichas/BtnCrearFicha";
import ListaFichas from "../components/Fichas/ListaFichas";
import authContext from "../context/autenticacion/authContext";
import FichaTecnica from "../components/Ingeniero/FichaTecnica";

//Gerente
import GerenteView from "./GerenteView";

function SesionIniciada() {
  /////////////////////////////////
  const [ActivarFicha, setActivarFicha] = useState(false);
  const autentificaciones = useContext(authContext);
  const { mensaje, autenticado, usuarioAutenticado, usuario } =
    autentificaciones;
  useEffect(() => {
    usuarioAutenticado();
  }, []);
  if (!usuario) {
    return null;
  }
  //console.log(usuario.idRol);
  return (
    <>
      <NavBar />

      <div className="container-fluid">
        {/* muestra requisitos */}
        <div className="row">
          {usuario.idRol == "2" ? null : <ComoTrabajar />}
        </div>
        {/* muestra requisitos */}
        <div className="row">
          {/*  TABLA */}

          <div className="col-12 col-md-12 col-lg-9">
            {/*   {ActivarFicha ? <Tabla /> : <FichaTecnica />} */}
            {usuario.idRol == "2" && <GerenteView />}
            {/*  {usuario.idRol == "3" && ActivarFicha ? (
              <FichaTecnica />
            ) : (
              <Tabla />
            )} */}
          </div>

          {/* FIN TABLA */}

          {/* FICHAS */}
          <div className="col-12 col-md-12 col-lg-3 text-center mt-2">
            <div className="row">
              <div className="col-12">
                {usuario.idRol == "2" ? null : (
                  <BtnCrearFicha
                    setActivarFicha={setActivarFicha}
                    ActivarFicha={ActivarFicha}
                  />
                )}
              </div>
            </div>
            <div className="row mt-4 text-start">
              <div className="col-12">
                <h5>Lista de Fichas</h5>
                <ListaFichas />
              </div>
            </div>
          </div>
          {/*FIN FICHAS */}
        </div>
      </div>
    </>
  );
}

export default SesionIniciada;
