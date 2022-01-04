import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
function Cus016() {
  const data = [
    {
      npedido: "npedido1",
      guiatranslado: "guiatranslado1",
      codarticulo: "codarticulo1",
      descripcion: "descripcion1",
      precio: "precio1",
      saldoproducto: "saldoproducto1",
      cantguia12: "cantguia121",
    },
    {
      npedido: "npedido1",
      guiatranslado: "guiatranslado1",
      codarticulo: "codarticulo1",
      descripcion: "descripcion1",
      precio: "precio1",
      saldoproducto: "saldoproducto1",
      cantguia12: "cantguia121",
    },
    {
      npedido: "npedido1",
      guiatranslado: "guiatranslado1",
      codarticulo: "codarticulo1",
      descripcion: "descripcion1",
      precio: "precio1",
      saldoproducto: "saldoproducto1",
      cantguia12: "cantguia121",
    },
    {
      npedido: "npedido1",
      guiatranslado: "guiatranslado1",
      codarticulo: "codarticulo1",
      descripcion: "descripcion1",
      precio: "precio1",
      saldoproducto: "saldoproducto1",
      cantguia12: "cantguia121",
    },
  ];

  const columns = [
    {
      headerName: "N.Pedido",
      field: "npedido",
    },
    {
      headerName: "Guia Translado",
      field: "guiatranslado",
    },
    {
      headerName: "Cod.Articulo",
      field: "codarticulo",
    },
    {
      headerName: "Descripcion",
      field: "descripcion",
    },
    {
      headerName: "Precio",
      field: "precio",
    },
    {
      headerName: "Saldo producto",
      field: "saldoproducto",
    },
    {
      headerName: "Cant.Guia12",
      field: "cantguia12",
    },
  ];
  const defaultColDef = {
    /* filter: true, */
    /*  filter: true,
                floatingFilter: true, */
    editable: true,
    flex: 1,
  };
  return (
    <div className="container">
      <div className="row mt-4 mb-2">
        <div className="col-12 col-md-3"></div>
        <div className="col-12 col-md-3"></div>
        <div className="col-12 col-md-3"></div>
        <div className="col-12 col-md-3">
          <input className="form-control" type="text" placeholder="Buscar..." />
        </div>
      </div>
      <div
        id="myGrid"
        className="ag-theme-alpine"
        style={{ height: 400, width: "100%" }}
      >
        <AgGridReact
          rowData={data}
          columnDefs={columns}
          defaultColDef={defaultColDef}
        />
      </div>

      <div className="row mt-5 mb-4">
        <div className="col-12 col-md-6 text-end"></div>
        <div className="col-12 col-md-6 text-end">
          <button
            style={{
              background: "#3BBA00",
              border: "none",
              color: "white ",
              padding: "8px 16px",
            }}
            className="ms-3"
          >
            Generar Plantilla
          </button>
          <button
            style={{
              background: "#3BBA00",
              border: "none",
              color: "white ",
              padding: "8px 16px",
            }}
            className="ms-3"
          >
            Factura
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cus016;
