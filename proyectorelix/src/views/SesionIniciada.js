import React, { useContext, useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import "../components/Navbar.css";
import "../css/styles.css";
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

//administrador
import RegisterView from "../components/auth/RegisterView";
import TablaUsuarios from "../components/Administrador/TablaUsuarios";
//Gerente
import GerenteView from "./GerenteView";

import fichaTecnicaContext from "../context/fichaTecnica/fichaTecnicaContext";

function SesionIniciada() {
  ///////////////////////////////
  const fichatecnicacontext = useContext(fichaTecnicaContext);
  const {
    registroDeFichaTecnica,
    obtenerTodasLasFichasTecnicas,
    todasLasFichasTecnica,
  } = fichatecnicacontext;
  //////////////////////////////
  /////////////////////////////////
  const [ActivarFicha, setActivarFicha] = useState(false);
  const [verUsuarios, setVerUsuarios] = useState(false);
  const autentificaciones = useContext(authContext);
  const {
    usuarioAutenticado,
    usuario,
    obtenerTodosLosUsuarios,
    todosLosUsuarios,
  } = autentificaciones;

  useEffect(() => {
    obtenerTodasLasFichasTecnicas();
    usuarioAutenticado();
    obtenerTodosLosUsuarios();
  }, []);
  if (!usuario) {
    return null;
  }
  return (
    <>
      <NavBar setVerUsuarios={setVerUsuarios} verUsuarios={verUsuarios} />

      <div className="container-fluid">
        {/* muestra requisitos */}
        <div className="row">
          {usuario.idRol == "3" ? <ComoTrabajar /> : null}
        </div>
        {/* muestra requisitos */}
        <div className="row">
          {/*  TABLA */}

          {usuario.idRol == "1" ? (
            verUsuarios ? (
              <TablaUsuarios
                setVerUsuarios={setVerUsuarios}
                verUsuarios={verUsuarios}
              />
            ) : (
              <RegisterView />
            )
          ) : (
            <>
              <div className="col-12 col-md-12 col-lg-12 col-xl-9">
                {usuario.idRol == "2" && <GerenteView />}
                {usuario.idRol == "3" ? (
                  ActivarFicha ? (
                    <FichaTecnica />
                  ) : (
                    <Tabla />
                  )
                ) : null}
              </div>

              {/* FIN TABLA */}

              {/* FICHAS */}
              <div className="col-12 col-md-12 col-lg-12 col-xl-3 text-center mt-2">
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
                    <h5 className="fw-bolder">Lista de Fichas</h5>
                    <ListaFichas
                      setActivarFicha={setActivarFicha}
                      ActivarFicha={ActivarFicha}
                    />
                  </div>
                </div>
              </div>
              {/*FIN FICHAS */}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default SesionIniciada;
