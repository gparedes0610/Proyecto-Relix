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
        <Route path="/backoffice" element={<BackOfficeView />} />
        <Route path="/ingeniero" element={<IngenieroView />} />
        <Route path="/gerente" element={<GerenteView />} />
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
