import React from "react";
import NavBar from "../components/NavBar";
import "../components/Navbar.css";

import Ok from "../assets/ok.svg";
import Foco from "../assets/foco.svg";
import BdSimulado from "../services/BdSimulado.json";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
function IngenieroView() {
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

  const defaultColDef = {
    /* filter: true, */
    /*  filter: true,
    floatingFilter: true, */
    editable: true,
  };

  return (
    <div>
      <NavBar />
      <div className="container pt-4 mb-5">
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

        <div className="row pt-4">
          <div className=" col-12 col-md-3">
            <input className="form-control" type="file" id="formFile" />
          </div>
          <div className=" col-12 col-md-3">
            <input
              className="form-control"
              type="number"
              placeholder="Descuento Total"
            />
          </div>
          <div className=" col-12 col-md-3 d-flex">
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
          </div>
          <div className=" col-12 col-md-3">
            <input
              className="form-control"
              type="Text"
              placeholder="Busqueda"
            />
          </div>
        </div>
      </div>

      <div className="container">
        <div
          id="myGrid"
          className="ag-theme-alpine"
          style={{ height: 400, width: "1300px" }}
        >
          <AgGridReact
            rowData={data}
            columnDefs={columns}
            defaultColDef={defaultColDef}
          />
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-md-6 text-end"></div>
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

            <button
              // disabled={!canPreviousPage}
              style={{
                background: "#C4C4C4",
                border: "none",
                color: "white ",
                padding: "8px 7px",
                borderRadius: "5px",
              }}
              className="ms-3"
            >
              {"<<"}
            </button>
            <button
              //disabled={!canPreviousPage}
              style={{
                background: "#C4C4C4",
                border: "none",
                color: "white ",
                padding: "8px 7px",
                borderRadius: "5px",
              }}
              className="ms-1"
            >
              {"<"}
            </button>
            <button
              //  disabled={!canNextPage}
              style={{
                background: "#39D5D5",
                border: "none",
                color: "white ",
                padding: "8px 7px",
                borderRadius: "5px",
              }}
            >
              {">"}
            </button>
            <button
              // disabled={!canNextPage}
              style={{
                background: "#39D5D5",
                border: "none",
                color: "white ",
                padding: "8px 7px",
                borderRadius: "5px",
              }}
              className="ms-1"
            >
              {">>"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IngenieroView;
