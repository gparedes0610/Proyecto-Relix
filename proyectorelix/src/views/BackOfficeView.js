import React from "react";
import NavBar from "../components/NavBar";
import BdSimulado from "../services/BdSimulado.json";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { Card } from "react-bootstrap";

import edit from "../assets/edit.svg";
import duplicar from "../assets/duplicar.svg";
import PlantillaPedido from "./PlantillaPedido";
import Cus013 from "./Cus013";
import Cus014 from "./Cus014";
import Cus017 from "./Cus017";
import Cus016 from "./Cus016";

function BackOfficeView() {
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
    {
      headerName: "Acciones",
      field: "",

      cellRendererFramework: (params) => (
        <div>
          <button
            style={{
              background: "#56CCF2",
              border: "none",

              borderRadius: "5px",
            }}
          >
            <img
              src={duplicar}
              alt=""
              className="img-fluid"
              style={{ padding: "0 24px" }}
            />
          </button>
          <input type="checkbox" className="ms-3" />
        </div>
      ),
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
      <div className="container pt-4 mb-3">
        <div className="row mt-3">
          <div className="col-12 col-md-3"></div>
          <div className="col-12 col-md-3"></div>
          <div className="col-12 col-md-3"></div>
          <div className="col-12 col-md-3">
            <input
              className="form-control"
              type="text"
              placeholder="Buscar..."
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
              className="ms-3"
            >
              Generar Rq
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
      <div className="container mt-3">
        <div className="row mb-4">
          <div className="col-12 col-md-6">
            <Card style={{ width: "100%" }}>
              <Card.Body>
                <Card.Title style={{ color: "#F08820" }}>
                  Numero de Rq pedido - AutoNum 11 caracters
                </Card.Title>
                <Card.Text>
                  <div className="row">
                    <div className="col-12 col-md-4">
                      <p className="h6">Fecha</p>
                      <p className="h6">Fecha de vencimiento</p>
                      <p className="h6">Tipo de pedido</p>
                    </div>
                    <div className="col-12 col-md-4">
                      <p className="h6">Centro de costo</p>
                      <p className="h6">Glosa</p>
                      <p className="h6">Codigo Cliente</p>
                      <p className="h6">Tipo documento</p>
                      <p className="h6">Tipo pedido para percepcion</p>
                    </div>
                    <div className="col-12 col-md-4">
                      <p className="h6" style={{ color: "#4253FF" }}>
                        Codigo Vendedor
                      </p>
                      <p className="h6">Nro.Orden de compra</p>
                      <p className="h6">Codigo forma de pago</p>
                      <p className="h6">Moneda U$</p>
                      <p className="h6">Agencia 0001</p>
                    </div>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>

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
          </div>
        </div>
        <div className="row">
          <PlantillaPedido />
        </div>
        <div className="row">
          <Cus013 />
        </div>
        <div className="row">
          <Cus016 />
        </div>
        <div className="row">
          <Cus017 />
        </div>
      </div>
    </div>
  );
}

export default BackOfficeView;
