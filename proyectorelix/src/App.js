import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginView />} />
          <Route path="/registrar" element={<RegisterView />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
