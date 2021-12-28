import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./components/Navbar.css";
import "./App.css";

import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import LoginView from "./views/LoginView";
import IngenieroView from "./views/IngenieroView";
import PrivateRoute from "./components/PrivateRoute";
import FichaTecnica from "./components/FichaTecnica";

import { TokenContextProvider } from "./context/tokenContext";
import AdministradorView from "./views/AdministradorView";
import GerenteView from "./views/GerenteView";
import PrivateRouteIng from "./components/PrivateRouteIng";
import PrivateRouteGg from "./components/PrivateRouteGg";

function App() {
  return (
    <TokenContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginView />} />
          {/* <Route path="/administrador" element={<AdministradorView />} /> */}
          {/* <Route path="/ingeniero" element={<IngenieroView />} /> */}
          {/*  <Route path="/gerente" element={<GerenteView />} /> */}
          <Route path="/fichatecnica" element={<FichaTecnica />} />
          <Route
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
          />

          <Route
            path="/gerente"
            element={
              <PrivateRouteGg>
                <GerenteView />
              </PrivateRouteGg>
            }
          />
        </Routes>
      </Router>
    </TokenContextProvider>
  );
}

export default App;
