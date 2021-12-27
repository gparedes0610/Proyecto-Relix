import React from "react";
import NavBar from "../components/NavBar";
import "../components/Navbar.css";

import Ok from "../assets/ok.svg";
import Foco from "../assets/foco.svg";
function TrabajoView() {
  return (
    <div>
      <NavBar />
      <div className="container pt-4">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-3 "></div>
          <div className="col-3 "></div>
          <div className="col-12 col-md-3 ">
            <div className="d-flex justify-content-center align-item-center">
              <p className="my-0">¿Como trabajar en esta plantilla?</p>
              <img src={Ok} alt="" className="img-fluid ps-2" />
            </div>

            <div className="d-flex align-item-center">
              <img src={Foco} alt="" className="pe-2" />
              <p className="pt-2 my-0">Requisitos:</p>
            </div>

            <p className="my-0" style={{ fontSize: "14px" }}>
              .Cargar solamente archivos Excel
            </p>
            <small>.Cargar el excel con la estructura acordada</small>
          </div>
        </div>
        <div className="row pt-3">
          <div className="col-4">
            <input class="form-control" type="file" id="formFile" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrabajoView;
