import React, { useState } from "react";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

import * as XLSX from "xlsx";
function Tabla() {
  /* DATA FALSA */
  const data = [
    {
      partida: "partida1",
      subpartida: "subpartida2",
      marca: "marca",
      codprov: "codproveedor1",
      codsoftcom: "codsoftcom1",
      descripcion: "descripcion1",
      cantTotal: 12,
      preUnitario: 24,
      preTotal: 47,
      costoReal: 145,
      costoTotal: 478,
    },
    {
      partida: "partida1",
      subpartida: "subpartida2",
      marca: "marca",
      codprov: "codproveedor1",
      codsoftcom: "codsoftcom1",
      descripcion: "descripcion1",
      cantTotal: 12,
      preUnitario: 24,
      preTotal: 47,
      costoReal: 145,
      costoTotal: 478,
    },
    {
      partida: "partida1",
      subpartida: "subpartida2",
      marca: "marca",
      codprov: "codproveedor1",
      codsoftcom: "codsoftcom1",
      descripcion: "descripcion1",
      cantTotal: 12,
      preUnitario: 24,
      preTotal: 47,
      costoReal: 145,
      costoTotal: 478,
    },
    {
      partida: "partida1",
      subpartida: "subpartida2",
      marca: "marca",
      codprov: "codproveedor1",
      codsoftcom: "codsoftcom1",
      descripcion: "descripcion1",
      cantTotal: 12,
      preUnitario: 24,
      preTotal: 47,
      costoReal: 145,
      costoTotal: 478,
    },
    {
      partida: "partida1",
      subpartida: "subpartida2",
      marca: "marca",
      codprov: "codproveedor1",
      codsoftcom: "codsoftcom1",
      descripcion: "descripcion1",
      cantTotal: 12,
      preUnitario: 24,
      preTotal: 47,
      costoReal: 145,
      costoTotal: 478,
    },
    {
      partida: "partida1",
      subpartida: "subpartida2",
      marca: "marca",
      codprov: "codproveedor1",
      codsoftcom: "codsoftcom1",
      descripcion: "descripcion1",
      cantTotal: 12,
      preUnitario: 24,
      preTotal: 47,
      costoReal: 145,
      costoTotal: 478,
    },
    {
      partida: "partida1",
      subpartida: "subpartida2",
      marca: "marca",
      codprov: "codproveedor1",
      codsoftcom: "codsoftcom1",
      descripcion: "descripcion1",
      cantTotal: 12,
      preUnitario: 24,
      preTotal: 47,
      costoReal: 145,
      costoTotal: 478,
    },
  ];
  /* DATA FALSA */

  /* COLUMNAS */
  const columns = [
    {
      headerName: "Partida",
      field: "partida",
    },
    {
      headerName: "Subpartida",
      field: "subpartida",
    },
    {
      headerName: "Marca",
      field: "marca",
    },
    {
      headerName: "Codprov",
      field: "codprov",
    },
    {
      headerName: "Codsoftcom",
      field: "codsoftcom",
    },
    {
      headerName: "Descripcion",
      field: "descripcion",
    },
    {
      headerName: "CantTotal",
      field: "cantTotal",
    },
    {
      headerName: "PreUnitario",
      field: "preUnitario",
      cellRendererFramework: (params) => (
        <select defaultValue={"DEFAULT"}>
          <option value="DEFAULT" disabled>
            Choose a salutation ...
          </option>
          <option value="value1">Value 1</option>
          <option value="value2" selected>
            Value 2
          </option>
          <option value="value3">Value 3</option>
        </select>
      ),
    },
    {
      headerName: "PreTotal",
      field: "preTotal",
    },
    {
      headerName: "CostoReal",
      field: "costoReal",
    },
    {
      headerName: "CostoTotal",
      field: "costoTotal",
    },
    /////////////////para agregar una columna
    {
      headerName: "Descuento",
      field: "",
    },
    {
      headerName: "Total con descuento",
      field: "",
    },
  ];
  /* COLUMNAS */

  const defaultColDef = {
    /* filter: true, */
    /*  filter: true,
    floatingFilter: true, */
    editable: true,
  };

  /* para importar un excel y convertilo en un array de objetos */
  const [items, setItems] = useState([]);

  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;

        const wb = XLSX.read(bufferArray, { type: "buffer" });

        const wsname = wb.SheetNames[0];

        const ws = wb.Sheets[wsname];

        const data = XLSX.utils.sheet_to_json(ws);

        resolve(data);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });

    promise.then((itemsFinales) => {
      //setItems(d);
      console.log(itemsFinales);
      //itemsFinales.map((item) => {
      //console.log(item);
      //});
    });
  };
  return (
    <div>
      {/*   Acciones */}
      <div className="row mt-3">
        <div className="col-12 col-md-6 mb-2">
          <input
            className="form-control"
            type="file"
            id="formFile"
            onChange={(e) => {
              const file = e.target.files[0];
              readExcel(file);
            }}
          />
        </div>
        <div className="col-12 col-md-6 mb-2">
          <div className="d-flex">
            <input
              className="form-control"
              type="number"
              placeholder="Dto por partida"
            />
            <select
              className="form-select"
              aria-label="Default select example"
              name="partida"
            >
              <option>Eliga una partida</option>
              <option>Partida1</option>
              <option>Partida2</option>
              <option>Partida3</option>
              <option>Partida4</option>
            </select>
            <button className="ms-2 btn btn-success">Aplicar</button>
          </div>
        </div>
      </div>

      <div className="row mt-3 mb-3">
        <div className="col-12 col-md-6  mb-2">
          <div className="d-flex">
            <input
              className="form-control"
              type="number"
              placeholder="Descuento Total"
            />
            <button className="btn btn-success ms-2">Aplicar</button>
          </div>
        </div>
        <div className="col-12 col-md-6 mb-2">
          <input className="form-control" type="Text" placeholder="Busqueda" />
        </div>
      </div>
      {/*   Acciones */}
      {/* TABLA */}
      <div className="row">
        <div className="col-12 ">
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
        </div>
      </div>
      {/* TABLA */}
      <div className="row mt-3 mb-3">
        <div className="col-12 col-md-6 text-start">
          <button
            style={{
              border: "none",
              color: "white ",
              padding: "8px 16px",
            }}
            className="ms-3 btn-danger"
          >
            Modificar ficha tecnica
          </button>
        </div>
        <div className="col-12 col-md-6 text-end">
          <button
            style={{
              background: "#008DCA",
              border: "none",
              color: "white ",
              padding: "8px 16px",
            }}
          >
            Alta de Negocio
          </button>
          <button
            style={{
              background: "#008DCA",
              border: "none",
              color: "white ",
              padding: "8px 16px",
            }}
            className="ms-3"
          >
            Descuento
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tabla;
