import React, { useContext, useEffect, useState, useMemo } from "react";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

import * as XLSX from "xlsx";

import fichaTecnicaContext from "../../context/fichaTecnica/fichaTecnicaContext";
import tablaContext from "../../context/tabla/tablaContext";
import Select from "./Select";

function Tabla() {
  /////////////////////////////
  const tablacontext = useContext(tablaContext);
  const { tablaDatos, obtenerDatosTabla, agregarDatosTabla } = tablacontext;
  //////////////////////////
  ///////////////////////////////
  const fichatecnicacontext = useContext(fichaTecnicaContext);
  const { fichaTecnica } = fichatecnicacontext;
  //console.log("ficha tecnica", fichaTecnica);
  //////////////////////////////
  //useEffect(() => {}, [fichaTecnica]);
  console.log("tabla de datos", tablaDatos);
  const [dataTabla, setDataTabla] = useState([]);
  const [IdFichaDataTabla, setIdFichaDataTabla] = useState([]);

  const [prueba, setPrueba] = useState("");

  const [verPrecios, setVerPrecios] = useState(false);

  useEffect(() => {}, [verPrecios]);

  /* COLUMNAS */
  const columns = [
    {
      headerName: "Partida",
      field: "partidaDetallefichatecnica",
      filter: true,
    },
    {
      headerName: "SubPartida",
      field: "subpartidaDetallefichatecnica",
    },
    {
      headerName: "Marca",
      field: "marcaDetallefichatecnica",
      filter: true,
    },
    {
      headerName: "Codido Proveedor",
      field: "codigoproveedorDetallefichatecnica",
    },
    {
      headerName: "Codigo ERP",
      field: "codigosoftcomProducto",
    },
    {
      headerName: "Descripcion",
      field: "descripcionDetallefichatecnica",
    },
    {
      headerName: "Cantidad Total",
      field: "cantidadDetallefichatecnica",
    },
    {
      headerName: "PreUnitario",
      field: "preUnitario",
      cellRendererFramework: (params) => (
        <>
          <Select parametros={params.data} />
        </>
      ),
    },
    {
      headerName: "Precio Total",
      field: "precioTotal",
      cellRendererFramework: (params) => (
        <>
          <span>{params.data.cantidadDetallefichatecnica * prueba}</span>
        </>
      ),
    },
    {
      headerName: "Costo Ing",
      field: "costopromedioProducto",
    },
    {
      headerName: "Costo Total",
      field: "costototaling",
      cellRendererFramework: (params) => (
        <>
          <span>
            {params.data.cantidadDetallefichatecnica *
              params.data.costopromedioProducto}
          </span>
        </>
      ),
    },
    {
      headerName: "Acciones",
      field: "acciones",
      sortable: false,
      editable: false,
      filter: false,

      cellRendererFramework: (params) => (
        <div>
          <button onClick={() => actionButton(params)}>Aplicar</button>{" "}
        </div>
      ),
    },
  ];
  /* COLUMNAS */

  const autoGroupColumnDef = useMemo(() => {
    return {
      headerName: "Athlete",
      field: "athlete",
      minWidth: 250,
      cellRenderer: "agGroupCellRenderer",
      cellRendererParams: {
        checkbox: true,
      },
    };
  }, []);
  const actionButton = (params) => {
    console.log("toda la fila", params.data, params.data.idDetallefichatecnica);
  };

  const defaultColDef = {
    /* filter: true, */
    /*  filter: true,
    floatingFilter: true, */
    //editable: true,
  };

  /* para importar un excel y convertilo en un array de objetos */

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
      // console.log(itemsFinales); ///////////////estos son los datos del excel pasado a objeto
      const items = itemsFinales;
      //console.log(items);
      const agregarId = items.map((item) => ({
        ...item,
        idFichatecnica: fichaTecnica[0].idFichatecnica,
      }));
      //console.log("agregado idFichaTecnica", agregarId);
      agregarDatosTabla(agregarId);
      //console.log("tabladatos", tablaDatos);
      //setDataTabla(tablaDatos);
      //setIdFichaDataTabla(itemsFinales);
    });
  };

  if (!fichaTecnica)
    return (
      <h3 className="fw-bolder mt-3 text-uppercase">
        Cree tabla por ficha tecnica para trabajar
      </h3>
    ); // solo puede haber un return
  return (
    <div>
      {/* {tablaDatos.map((dato, i) => (
        <select>
          <option value={dato.precioventaunoProducto}>
            {dato.precioventaunoProducto}
          </option>
          <option value={dato.precioventadosProducto}>
            {dato.precioventadosProducto}
          </option>
          <option value={dato.precioventatresProducto}>
            {dato.precioventatresProducto}
          </option>
          <option value={dato.precioventacuatroProducto}>
            {dato.precioventacuatroProducto}
          </option>
          <option value="value1">{i}</option>
        </select>
      ))} */}
      {/*   Acciones */}
      <div className="row mt-3 mb-4">
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
              placeholder="Descuento Total"
            />
            <button className="btn btn-success ms-2">Aplicar</button>
          </div>
          {/* <div className="d-flex">
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
          </div> */}
        </div>
      </div>

      {/* <div className="row mt-3 mb-3">
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
      </div> */}
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
              rowData={tablaDatos}
              columnDefs={columns}
              defaultColDef={defaultColDef}
              autoGroupColumnDef={autoGroupColumnDef}
            />
          </div>
        </div>
      </div>
      {/* TABLA */}
      <div className="row mt-3 mb-3">
        <div className="col-12 col-md-6 text-start">
          {/* <button
            style={{
              border: "none",
              color: "white ",
              padding: "8px 16px",
            }}
            className="ms-3 btn-danger"
          >
            Modificar ficha tecnica
          </button> */}
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
            Guardar Cotizacion
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
