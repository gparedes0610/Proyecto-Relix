import React from "react";

function Select({ data, setValue }) {
  const onChange = (e) => {
    const options = { ...data, optionSelected: e.target.value };
    setValue({ options, isManual: false });
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
