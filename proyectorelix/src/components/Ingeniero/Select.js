import React from "react";

function Select({ parametros }) {
  return (
    <select>
      <option>{parametros.precioventaunoProducto}</option>
      <option>{parametros.precioventadosProducto}</option>
      <option>{parametros.precioventatresProducto}</option>
      <option>{parametros.precioventacuatroProducto}</option>
    </select>
  );
}

export default Select;
