import React from "react";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
function PlantillaPedido() {
  const columns = [
    {
      headerName: "Agencia",
      field: "agencia",
    },
    {
      headerName: "Num Pedido",
      field: "numeropedido",
    },
    {
      headerName: "Fecha",
      field: "fecha",
    },
    {
      headerName: "Centro de costo",
      field: "centrocosto",
    },
    {
      headerName: "Tipo de documento",
      field: "tipodocumento",
    },
    {
      headerName: "Codigo Cliente",
      field: "codigocliente",
    },
    {
      headerName: "Codigo Vendedor",
      field: "codigovendedor",
    },

    {
      headerName: "Moneda",
      field: "moneda",
    },
    {
      headerName: "Cod.Forma de pago",
      field: "codformadepago",
    },
    {
      headerName: "Fecha Vencimiento",
      field: "fechavencimiento",
    },
    {
      headerName: "Nro. Orden de compra",
      field: "ordendecompra",
    },
    {
      headerName: "Glosa",
      field: "glosa",
    },
    {
      headerName: "Tipo pedido",
      field: "tipopedido",
    },
    {
      headerName: "Tipo pedido para calculo percepcion",
      field: "percepcion",
    },
    {
      headerName: "Cod.Articulo",
      field: "codarticulo",
    },
    {
      headerName: "Precio",
      field: "precio",
    },
    {
      headerName: "Cantidad",
      field: "cantidad",
    },
    {
      headerName: "Decuento en %",
      field: "descuentoporcentaje",
    },
    {
      headerName: "Numeracion",
      field: "numeracion",
    },
    {
      headerName: "Descripcion",
      field: "descripcion",
    },
  ];
  const defaultColDef = {
    /* filter: true, */
    /*  filter: true,
    floatingFilter: true, */
    editable: true,
  };
  return (
    <div className="container">
      <div
        id="myGrid"
        className="ag-theme-alpine"
        style={{ height: 400, width: "1300px" }}
      >
        <AgGridReact
          //rowData={data}
          columnDefs={columns}
          defaultColDef={defaultColDef}
        />
      </div>
    </div>
  );
}

export default PlantillaPedido;
