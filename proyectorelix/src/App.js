import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./components/Navbar.css";
import "./App.css";

import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import LoginView from "./components/auth/LoginView";
import RegisterView from "./components/auth/RegisterView";
import FichaTecnica from "./components/FichaTecnica";
import BackOfficeView from "./views/BackOfficeView";
import IngenieroView from "./views/IngenieroView";
import GerenteView from "./views/GerenteView";
import MaestroView from "./views/MaestroView";
import Aside from "./views/Aside";
import Cus014 from "./views/Cus014";
import Cu08 from "./views/Cu08";
import Cus016 from "./views/Cus016";
import Cus017 from "./views/Cus017";

/* import IngenieroView from "./views/IngenieroView";
import PrivateRoute from "./rutas/PrivateRoute"; */
//import FichaTecnica from "./components/FichaTecnica";
/* 
import AdministradorView from "./views/AdministradorView";
import GerenteView from "./views/GerenteView";
import BackOfficeView from "./views/BackOfficeView"; */
//import NotFound from "./components/NotFound";
//import LoginView from "./components/auth/LoginView";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginView />} />
        <Route path="/registrar" element={<RegisterView />} />
        <Route path="/fichatecnica" element={<FichaTecnica />} />
        <Route path="/ingeniero" element={<IngenieroView />} />
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
  );
}

export default App;
