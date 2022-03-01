import React from "react";

function BtnCrearFicha({ ActivarFicha, setActivarFicha }) {
  return (
    <div>
      <button
        type="button"
        className="btn btn-outline-primary text-uppercase"
        onClick={() => setActivarFicha(!ActivarFicha)}
      >
        Asignar Ficha de Proyecto
      </button>
    </div>
  );
}

export default BtnCrearFicha;
