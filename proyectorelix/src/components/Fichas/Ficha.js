import React from "react";

function Ficha({ fichatecnica }) {
  return (
    <li>
      <button type="button" class="btn btn-outline-secondary">
        {fichatecnica.nombreFichatecnica}
      </button>
    </li>
  );
}

export default Ficha;
