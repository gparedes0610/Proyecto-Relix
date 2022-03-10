import React, { useContext } from "react";
import tablaContext from "../../context/tabla/tablaContext";

function Select({ data, keyId }) {
  const tablacontext = useContext(tablaContext);
  const { actualizarDatosTabla } = tablacontext;
  const onChange = (e) => {
    const rowUpdated = { ...data, optionSelected: e.target.value };
    actualizarDatosTabla(rowUpdated, keyId);
  };
  return (
    <select
      value={data.optionSelected || data.precioventacuatroProducto}
      onChange={onChange}
    >
      <option value={data.precioventaunoProducto}>
        {data.precioventaunoProducto}
      </option>
      <option value={data.precioventadosProducto}>
        {data.precioventadosProducto}
      </option>
      <option value={data.precioventatresProducto}>
        {data.precioventatresProducto}
      </option>
      <option value={data.precioventacuatroProducto}>
        {data.precioventacuatroProducto}
      </option>
    </select>
  );
}

export default Select;
