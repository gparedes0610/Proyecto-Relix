import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./components/Navbar.css";
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

import AuthStateProvider from "./context/autenticacion/authState";
import AlertaStateProvider from "./context/alertas/alertaState";
import FichaTecnica from "./components/Ingeniero/FichaTecnica";
import SesionIniciada from "./views/SesionIniciada";

import tokenAuth from "./config/token";
function App() {
  //revisar si tenemos un token
  const token = localStorage.getItem("token");
  if (token) {
    tokenAuth(token);
  }

  return (
    <AlertaStateProvider>
      <AuthStateProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LoginView />} />
            <Route path="/registrar" element={<RegisterView />} />
            <Route path="/fichatecnica" element={<FichaTecnica />} />
            <Route path="/sesioniniciada/*" element={<SesionIniciada />} />
            <Route path="/gerente" element={<GerenteView />} />
            <Route path="/backoffice" element={<BackOfficeView />} />
            <Route path="/cu08" element={<Cu08 />} />
            <Route path="/guiatranslado" element={<Cus014 />} />
            <Route path="/guiavalorizada" element={<Cus016 />} />
            <Route path="/guiavalorizadareal" element={<Cus017 />} />

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
      </AuthStateProvider>
    </AlertaStateProvider>
  );
}

export default App;
