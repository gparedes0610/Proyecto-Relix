import React, { useMemo } from "react";
import NavBar from "../components/NavBar";
import "../components/Navbar.css";

import Ok from "../assets/ok.svg";
import Foco from "../assets/foco.svg";
import BdSimulado from "../services/BdSimulado.json";
import { COLUMNS } from "../services/columns";
import { useTable, usePagination } from "react-table";
import { Table } from "react-bootstrap";
function IngenieroView() {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => BdSimulado, []);

  const tableInstance = useTable(
    {
      columns: columns,
      data: data, // de aqui viene la data
      initialState: { pageIndex: 0 },
    },
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    headerGroups,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow,
  } = tableInstance;

  const { pageIndex, pageSize } = state;

  return (
    <div>
      <NavBar />
      <div className="container-fluid pt-4 mb-3">
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
        <div className="row pt-3">
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
            {/*  onChange={(e) => {
                          actualizarInput(e);
                        }} */}
            <select
              className="form-select"
              aria-label="Default select example"
              name="partida"
            >
              <option>Eliga una partida</option>
              {/*  {roles.map((rol, i) => (
                          <option key={i} value={rol.idRol}>
                            {rol.nombreRol}
                          </option>
                        ))} */}
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
      <div className="container-fluid">
        <Table striped bordered hover {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup, i) => (
              <tr {...headerGroup.getHeaderGroupProps} key={i}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} key={i}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </Table>

        <div className="mt-3 mb-3">
          <div className="d-flex justify-content-between">
            <div>
              <span>
                Pagina{" "}
                <strong>
                  {pageIndex + 1} de {pageOptions.length}
                </strong>
              </span>
            </div>

            <div>
              <span>
                {" "}
                Ir a la pagina:{" "}
                <input
                  type="number"
                  defaultValue={pageIndex + 1}
                  onChange={(e) => {
                    const pageNumber = e.target.value
                      ? Number(e.target.value) - 1 //se le resta uno xq en el pageindex se sumo uno, y este valor reeemplaza el pageindex
                      : 0;

                    //console.log("pageNumber", pageNumber);
                    gotoPage(pageNumber);
                  }}
                  className="ms-2"
                />
              </span>

              <select
                value={pageSize}
                onChange={(e) => setPageSize(Number(e.target.value))}
                className="ms-3"
              >
                {[10, 25, 50].map((pageSize, i) => (
                  <option value={pageSize} key={i}>
                    Mostrar {pageSize}
                  </option>
                ))}
              </select>

              <button
                onClick={() => gotoPage(0)}
                disabled={!canPreviousPage}
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
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
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
                onClick={() => nextPage()}
                disabled={!canNextPage}
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
                onClick={() => gotoPage(pageCount - 1)}
                disabled={!canNextPage}
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
        <div className="container-fluid mb-2">
          <div className="row">
            <div className="col-12 col-md-4"></div>
            <div className="col-12 col-md-4"></div>
            <div className="col-12 col-md-4 d-flex justify-content-end">
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
              {/*  <button>Agregar Item</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IngenieroView;
