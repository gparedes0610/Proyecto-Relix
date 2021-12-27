import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./components/Navbar.css";
import "./App.css";

import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import TrabajoView from "./views/TrabajoView";
import PrivateRoute from "./components/PrivateRoute";
import FichaTecnica from "./components/FichaTecnica";
import { TokenContextProvider } from "./context/tokenContext";

function App() {
  return (
    <TokenContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginView />} />
          {/*   <Route path="/registrar" element={<RegisterView />} /> */}
          <Route path="/sesioniniciada" element={<TrabajoView />} />
          <Route path="/fichatecnica" element={<FichaTecnica />} />
          <Route
            path="/registrar"
            element={
              <PrivateRoute>
                <RegisterView />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </TokenContextProvider>
  );
}

export default App;
