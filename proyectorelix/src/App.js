import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import "./components/Navbar.css";
import "./App.css";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";

import LoginView from "./components/auth/LoginView";
import RegisterView from "./components/auth/RegisterView";

import BackOfficeView from "./views/BackOfficeView";
import GerenteView from "./views/GerenteView";
import MaestroView from "./views/MaestroView";
import Aside from "./views/Aside";
import Cus014 from "./views/Cus014";
import Cu08 from "./views/Cu08";
import Cus016 from "./views/Cus016";
import Cus017 from "./views/Cus017";

//contex
import AuthStateProvider from "./context/autenticacion/authState";
import AlertaStateProvider from "./context/alertas/alertaState";
import FichaTecnicaStateProvider from "./context/fichaTecnica/fichaTecnicaState";
//contex
import FichaTecnica from "./components/Ingeniero/FichaTecnica";
import SesionIniciada from "./views/SesionIniciada";
import ReporteDePartidas from "./views/ReporteDePartidas";

import tokenAuth from "./config/token";
import PresupuestoCotizacion from "./views/PresupuestoCotizacion";
import MaterialesProcesados from "./views/MaterialesProcesados";
import MaterialesAtendidos from "./views/MaterialesAtendidos";
import MaterialesServicios from "./views/MaterialesServicios";
import PrivateRoute from "./rutas/PrivateRoute";
import CambiarContrasena from "./views/CambiarContrasena";
import PlaneamientoDeCompras from "./views/PlaneamientoDeCompras";

function App() {
  //revisar si tenemos un token
  const token = localStorage.getItem("token");
  if (token) {
    tokenAuth(token);
  }

  return (
    <AlertaStateProvider>
      <AuthStateProvider>
        <FichaTecnicaStateProvider>
          <Router>
            <Routes>
              <Route path="/" element={<LoginView />} />
              {/* <Route path="/registrar" element={<RegisterView />} /> */}
              <Route path="/cambiarclave" element={<CambiarContrasena />} />
              <Route
                path="/sesioniniciada/*"
                element={
                  <PrivateRoute>
                    <SesionIniciada />
                  </PrivateRoute>
                }
              />
              <Route path="/gerente" element={<GerenteView />} />
              <Route path="/backoffice" element={<BackOfficeView />} />
              <Route path="/cu08" element={<Cu08 />} />
              <Route path="/guiatranslado" element={<Cus014 />} />
              <Route path="/guiavalorizada" element={<Cus016 />} />
              <Route path="/guiavalorizadareal" element={<Cus017 />} />

              <Route
                path="/reportedepartidas"
                element={<ReporteDePartidas />}
              />
              <Route
                path="/presupuestocotizacion"
                element={<PresupuestoCotizacion />}
              />
              <Route
                path="/materialesprocesados"
                element={<MaterialesProcesados />}
              />
              <Route
                path="/materialesatendidos"
                element={<MaterialesAtendidos />}
              />
              <Route
                path="/materialesservicios"
                element={<MaterialesServicios />}
              />
              <Route
                path="/planeamiento-de-compras"
                element={<PlaneamientoDeCompras />}
              />
              <Route path="/maestro" element={<MaestroView />} />
              <Route path="/aside" element={<Aside />} />

              {/* <Route path="*" element={<NotFound />} />
        <Route path="/" element={<LoginView />} />
        <Route path="/fichatecnica" element={<FichaTecnica />} /> */}
              {/*     <Route
          path="/administrador"
          element={
            <PrivateRoute>
              <AdministradorView />
            </PrivateRoute>
          }
        />
        <Route
          path="/ingeniero"
          element={
            <PrivateRouteIng>
              <IngenieroView />
            </PrivateRouteIng>
          }
        /> */}
            </Routes>
          </Router>
        </FichaTecnicaStateProvider>
      </AuthStateProvider>
    </AlertaStateProvider>
  );
}

export default App;
