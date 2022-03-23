import React, {
  useContext,
  useEffect,
  useState,
  useMemo,
  useCallback,
} from "react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

import * as XLSX from "xlsx";

import fichaTecnicaContext from "../../context/fichaTecnica/fichaTecnicaContext";
import tablaContext from "../../context/tabla/tablaContext";
import Select from "./Select";
import Swal from "sweetalert2";
import { round } from "../../utils";
import { GridTable, useGridTable } from "../GridTable";

function Tabla() {
  /////////////////////////////
  const [discount, setDiscount] = useState(0);
  const tablacontext = useContext(tablaContext);
<<<<<<< HEAD
  const { tablaDatos, agregarDatosTabla, guardarCotizacionEnLaBd } =
    tablacontext;
  //////////////////////////
  ///////////////////////////////
  const fichatecnicacontext = useContext(fichaTecnicaContext);
  const { fichaTecnica, guardarCotizacion } = fichatecnicacontext;
=======
  const { tablaDatos, agregarDatosTabla, guardarCotizacion } = tablacontext;
  //////////////////////////
  ///////////////////////////////
  const fichatecnicacontext = useContext(fichaTecnicaContext);
  const { fichaTecnica } = fichatecnicacontext;
>>>>>>> db6dba1bcf4ccf01baf6da96fa33e7a5b6437e0a
  //////////////////////////////
  //useEffect(() => {}, [fichaTecnica]);

  const [verPrecios] = useState(false);

  useEffect(() => {}, [verPrecios]);

  /* COLUMNAS */
  const columns = [
    {
      headerName: "idDetallefichatecnica",
      field: "idDetallefichatecnica",
      show: false,
    },
    {
      headerName: "Partida",
      field: "partidaDetallefichatecnica",
      filter: true,
      /*  headerCheckboxSelection: true,
      headerCheckboxSelectionFilteredOnly: true,
      checkboxSelection: true, */
      headerCheckboxSelection: true,
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
      field: "preciounitarioDetallefichatecnica",
<<<<<<< HEAD

=======
>>>>>>> db6dba1bcf4ccf01baf6da96fa33e7a5b6437e0a
      render: ({ value, setValue, rowState }) => {
        const cellPrecioConD = rowState.state.find(
          (cell) => cell.key === "preciocondescuento"
        );
        const rowData = rowState.data;

        const getPrecioConDescuento = (preUnit) => {
          const cantidad = Number(rowData.cantidadDetallefichatecnica);
          const precioTotal = cantidad * preUnit;

          const descuento = Number(
            rowData.descuentounitarioDetallefichatecnica || 0
          );
          const precio = Number(precioTotal || 0);
          const resultadoDescuentoUnitario = precio * (1 - descuento / 100);
          const descuentoGeneral = Number(
<<<<<<< HEAD
            rowData.descuentototalDetallefichatecnica || 0
=======
            rowData.descuentogeneralDetallefichatecnica || 0
>>>>>>> db6dba1bcf4ccf01baf6da96fa33e7a5b6437e0a
          );

          return resultadoDescuentoUnitario * (1 - descuentoGeneral / 100);
        };
<<<<<<< HEAD
        //console.log("->>>>>>>>>", value);
=======
        console.log("->>>>>>>>>", value);
>>>>>>> db6dba1bcf4ccf01baf6da96fa33e7a5b6437e0a
        // precioConD.setValue()
        const { options, isManual } = value;
        return isManual ? (
          <input
            type="number"
            value={options.optionSelected || 0}
            onChange={(e) => {
              setValue({
                ...options,
                optionSelected: e.target.value,
              });
            }}
          />
        ) : (
          <Select
            data={options}
            setValue={(newValue) => {
              setValue(newValue);
              const precioConD = getPrecioConDescuento(
                Number(newValue.options.optionSelected)
              );

              const format2Decimals = new Intl.NumberFormat("de-DE", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              });
              cellPrecioConD.setValue(format2Decimals.format(precioConD));
            }}
          />
        );
      },
    },
    {
      headerName: "Precio Total",
      field: "preciototalDetallefichatecnica",
      getValue(rowData) {
        const precioTotal =
          Number(
            rowData.preciounitarioDetallefichatecnica.options.optionSelected
          ) * Number(rowData.cantidadDetallefichatecnica);
        return precioTotal;
      },
      render: ({ value, rowState: { data } }) => {
        const precioTotal =
          value ||
          Number(
            data.preciounitarioDetallefichatecnica.options.optionSelected
          ) * Number(data.cantidadDetallefichatecnica);
        const isDecimal = precioTotal - Math.floor(precioTotal) !== 0;

<<<<<<< HEAD
        const result = `$ ${
=======
        const result = `S/ ${
>>>>>>> db6dba1bcf4ccf01baf6da96fa33e7a5b6437e0a
          isDecimal ? round(precioTotal, 2).toFixed(2) : precioTotal + ".00"
        }`;

        return result;
      },
    },
    {
      headerName: "Costo Ing",
      field: "costopromedioProducto",
    },
    {
      headerName: "Costo Total",
      field: "costototaling",
      getValue(data) {
        const { cantidadDetallefichatecnica, costopromedioProducto } = data;
        const cantidad = Number(cantidadDetallefichatecnica);
        const costo = Number(costopromedioProducto);
        const costoFinal = cantidad * costo;
        return costoFinal;
      },
      render: ({ value }) => {
        return <span>{value}</span>;
      },
    },
    {
      headerName: "Ingrese Descuento %",
      field: "descuentounitarioDetallefichatecnica",
      getValue(rowData) {
        if (rowData.descuentounitarioDetallefichatecnica === null) {
          return 0;
        }
        return rowData.descuentounitarioDetallefichatecnica;
      },
      render: ({ value, setValue }) => {
        return (
          <input
            type="number"
            value={value || 0}
            onChange={(e) => setValue(Number(e.target.value))}
          />
        );
      },
    },
    {
      label: "Descuento general",
<<<<<<< HEAD
      field: "descuentototalDetallefichatecnica",
      getValue(rowData) {
        if (
          rowData.descuentototalDetallefichatecnica === undefined ||
          rowData.descuentototalDetallefichatecnica === null
        ) {
          return 0;
        }
        return rowData.descuentototalDetallefichatecnica;
=======
      field: "descuentogeneralDetallefichatecnica",
      getValue(rowData) {
        if (
          rowData.descuentogeneralDetallefichatecnica === undefined ||
          rowData.descuentogeneralDetallefichatecnica === null
        ) {
          return 0;
        }
        return rowData.descuentogeneralDetallefichatecnica;
>>>>>>> db6dba1bcf4ccf01baf6da96fa33e7a5b6437e0a
      },
    },
    {
      headerName: "Precio Con descuento",
      key: "preciocondescuento",
      getValue(rowData) {
        const descuento = Number(
          rowData.descuentounitarioDetallefichatecnica || 0
        );
        const precio = Number(rowData.preciototalDetallefichatecnica || 0);
        const resultadoDescuentoUnitario = precio * (1 - descuento / 100);
        const descuentoGeneral = Number(
<<<<<<< HEAD
          rowData.descuentototalDetallefichatecnica || 0
=======
          rowData.descuentogeneralDetallefichatecnica || 0
>>>>>>> db6dba1bcf4ccf01baf6da96fa33e7a5b6437e0a
        );
        const format2Decimals = new Intl.NumberFormat("de-DE", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        });

        return format2Decimals.format(
          resultadoDescuentoUnitario * (1 - descuentoGeneral / 100)
        );
      },
      render: ({ value }) => {
<<<<<<< HEAD
        return <span>$ {value}</span>;
      },
    },
    /* {
=======
        return <span>{value}</span>;
      },
    },
    {
>>>>>>> db6dba1bcf4ccf01baf6da96fa33e7a5b6437e0a
      headerName: "Acciones",
      field: "acciones",
      sortable: false,
      editable: false,
      filter: false,

      render: (params) => (
        <div>
          <button className="btn btn-primary">Aplicar</button>{" "}
        </div>
      ),
<<<<<<< HEAD
    }, */
=======
    },
>>>>>>> db6dba1bcf4ccf01baf6da96fa33e7a5b6437e0a
  ].map((col) => ({
    label: col.headerName,
    width: "100px",
    key: col.field,
    ...col,
  }));
  /* COLUMNAS */
<<<<<<< HEAD
  //console.log(tablaDatos);
=======
  console.log(tablaDatos);
>>>>>>> db6dba1bcf4ccf01baf6da96fa33e7a5b6437e0a

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
      const items = itemsFinales;
      const agregarId = items.map((item) => ({
        ...item,
        idFichatecnica: fichaTecnica[0].idFichatecnica,
      }));
      agregarDatosTabla(agregarId);
      //setDataTabla(tablaDatos);
      //setIdFichaDataTabla(itemsFinales);
    });
  };
<<<<<<< HEAD
  //console.log("datos en la tabla", tablaDatos);
  /* para importar un excel y convertilo en un array de objetos */
=======

  const EnviarguardadoCotizacion = async () => {
    const accionUsuario = await Swal.fire({
      icon: "warning",
      title: "Recuerde que se enviara un correo al Gerente General",
      showConfirmButton: true,
      showCancelButton: true,
    });

    if (accionUsuario.isConfirmed) {
      guardarCotizacion(fichaTecnica[0].idFichatecnica);
    }
  };
>>>>>>> db6dba1bcf4ccf01baf6da96fa33e7a5b6437e0a

  const finalTablaDatos = useMemo(() => {
    return tablaDatos.map((rowData) => {
      const newRowData = { ...rowData };
      if (!newRowData.preciounitarioDetallefichatecnica) {
        const {
          precioventaunoProducto,
          precioventadosProducto,
          precioventatresProducto,
          precioventacuatroProducto,
        } = newRowData;
        const options = {
          optionSelected: precioventaunoProducto,
          precioventaunoProducto,
          precioventadosProducto,
          precioventatresProducto,
          precioventacuatroProducto,
        };
        const isManual = Object.keys(options).every(
          (key) => options[key] === 0
        );

        newRowData.preciounitarioDetallefichatecnica = { options, isManual };
      }
      return newRowData;
    });
  }, [tablaDatos]);

  const { gridTable } = useGridTable({
    data: finalTablaDatos,
    definitions: {
      columnsDefinition: columns,
      rowsDefinition: { idKey: "idDetallefichatecnica" },
    },
  });

  const applyDiscount = () => {
    const rowsStates = gridTable.fullState.state;
    rowsStates
      .filter((row) => row.show)
      .forEach((rowState) => {
        const discountCell = rowState.state.find((cellState) => {
<<<<<<< HEAD
          return cellState.key === "descuentototalDetallefichatecnica";
=======
          return cellState.key === "descuentogeneralDetallefichatecnica";
>>>>>>> db6dba1bcf4ccf01baf6da96fa33e7a5b6437e0a
        });
        console.log(discountCell.value);
        discountCell?.setValue(discount);
        console.log(discountCell.value);
      });
  };

  const [isFirstUpdate, setIsFirstUpdate] = useState(false);
  const updatePrecioTotal = useCallback(() => {
    gridTable.fullState.state.forEach((rowState) => {
      const precioTotalCell = rowState.state.find((cellState) => {
        return cellState.key === "preciototalDetallefichatecnica";
      });
      const cantidad = rowState.state.find((cellState) => {
        return cellState.key === "cantidadDetallefichatecnica";
      });
      const preUnitario = rowState.state.find((cellState) => {
        return cellState.key === "preciounitarioDetallefichatecnica";
      });
      precioTotalCell?.setValue(
        Number(cantidad.value) *
          Number(preUnitario.value.options.optionSelected)
      );
    });
  }, [gridTable.fullState.state]);

  useEffect(() => {
    if (!isFirstUpdate && gridTable.fullState.state.length > 0) {
      updatePrecioTotal();
      setIsFirstUpdate(true);
    }
  }, [gridTable.fullState.state, isFirstUpdate, updatePrecioTotal]);

  const dataUpdated = useMemo(() => {
    const data = gridTable.fullState.state.map((rowState) => {
      const rowData = {};
      rowState.state.forEach((cellState) => {
        rowData[cellState.key] = cellState.value;
      });
      return rowData;
    });
    return data;
  }, [gridTable.fullState.state]);

<<<<<<< HEAD
  /* const download = useCallback(() => {
=======
  const download = useCallback(() => {
>>>>>>> db6dba1bcf4ccf01baf6da96fa33e7a5b6437e0a
    const filename = "results.xlsx";
    const dataForExcel = dataUpdated.map((data) => ({
      ...data,
      preciounitarioDetallefichatecnica:
        data.preciounitarioDetallefichatecnica.options.optionSelected,
    }));
    const worksheet = XLSX.utils.json_to_sheet(dataForExcel);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Results");
    XLSX.writeFile(workbook, filename);
<<<<<<< HEAD
  }, [dataUpdated]); */

  //console.log("Datos actualizados que es lo que yo enviare", dataUpdated);

  const EnviarguardadoCotizacion = async () => {
    /* const accionUsuario = await Swal.fire({
      icon: "warning",
      title: "Recuerde que una ves enviado no se podra modificar mas",
      showConfirmButton: true,
      showCancelButton: true,
    });

    if (accionUsuario.isConfirmed) {
      guardarCotizacion(fichaTecnica[0].idFichatecnica);
    } */
    guardarCotizacion(fichaTecnica[0].idFichatecnica);
    /*   console.log(
      "hiciste click en EnviarguardadoCotizacion , ESTE ES EL ID",
      fichaTecnica[0].idFichatecnica,
      ", y esta es la ficha tecnica",
      fichaTecnica
    ); */
  };

  const cotizacionGuardadaEnLaBd = () => {
    console.log("se guardo", dataUpdated);
    console.log("este es el id de esta ficha", fichaTecnica[0].idFichatecnica);
    const tablaConIdDeFichaTecnica = dataUpdated.map((item) => ({
      ...item,
      idFichatecnica: fichaTecnica[0].idFichatecnica,
    }));
    console.log("toda la tabla", tablaConIdDeFichaTecnica);
    guardarCotizacionEnLaBd(tablaConIdDeFichaTecnica);
  };
=======
  }, [dataUpdated]);

  console.log("Datos actualizados! -> ", dataUpdated);
>>>>>>> db6dba1bcf4ccf01baf6da96fa33e7a5b6437e0a

  if (!fichaTecnica)
    return (
      <h3 className="fw-bolder mt-3 text-uppercase">
<<<<<<< HEAD
        Seleccionar Ver Tabla para empezar a Trabajar
=======
        Cree tabla por ficha tecnica para trabajar
>>>>>>> db6dba1bcf4ccf01baf6da96fa33e7a5b6437e0a
      </h3>
    ); // solo puede haber un return
  return (
    <div>
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
              value={discount}
              onChange={(e) => setDiscount(Number(e.target.value))}
            />
            <button className="btn btn-success ms-2" onClick={applyDiscount}>
              Aplicar
            </button>
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
      {/* TABLA */}
      <div className="row">
        {/* <button onClick={() => getSelectedRowData()} style={{ margin: 10 }}>
          Agarrar Filas
        </button> */}
        <div className="col-12 ">
          <div
            id="myGrid"
            className="ag-theme-alpine"
            style={{ height: 400, width: "100%", overflow: "scroll" }}
          >
            <GridTable
              gridTable={gridTable}
              // autoGroupColumnDef={autoGroupColumnDef}
              //  suppressRowClickSelection={true}
              //rowSelection={"multiple"}
              // rowSelection={rowSelectionType}
              //rowMultiSelectWithClick={true}
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
        <div className="col-12 col-md-9 text-end">
          {/* <button
            style={{
              background: "#008DCA",
              border: "none",
              color: "white ",
              padding: "8px 16px",
            }}
            className="ms-3"
            onClick={download}
          >
            Descargar Excel
          </button> */}

<<<<<<< HEAD
          {fichaTecnica[0].cotizacionenviadaFichatecnica === "1" ? (
            <p>Masaki chupa pinga</p>
          ) : (
            <>
              <button
                style={{
                  background: "#008DCA",
                  border: "none",
                  color: "white ",
                  padding: "8px 16px",
                }}
                className="ms-3"
                onClick={() => EnviarguardadoCotizacion()}
              >
                Guardar Cotizacion Final
              </button>

              <button
                style={{
                  background: "#008DCA",
                  border: "none",
                  color: "white ",
                  padding: "8px 16px",
                }}
                onClick={() => cotizacionGuardadaEnLaBd()}
                className="ms-3"
              >
                Guardar
              </button>
            </>
          )}
=======
          <button
            style={{
              background: "#008DCA",
              border: "none",
              color: "white ",
              padding: "8px 16px",
            }}
            className="ms-3"
            onClick={() => EnviarguardadoCotizacion()}
          >
            Guardar Cotizacion Final
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
            Guardar
          </button>
>>>>>>> db6dba1bcf4ccf01baf6da96fa33e7a5b6437e0a
        </div>
      </div>
    </div>
  );
}

export default Tabla;
