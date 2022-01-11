import React from "react";
import Ok from "../assets/ok.svg";
import Foco from "../assets/foco.svg";
function ComoTrabajar() {
  return (
    <div>
      <div className="d-flex justify-content-start ">
        <p className="my-0 text-left">¿Como trabajar en esta plantilla?</p>
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
  );
}

export default ComoTrabajar;
