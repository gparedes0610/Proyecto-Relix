import React from "react";
import LogoRelix from "../../assets/relixjpg1.svg";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
//apis
import {
  obtenerTiposDeProyectos,
  obtenerVendedores,
  obtenerDepartamentos,
  obtenerEstados,
} from "../Ingeniero/apisFichaTecnica";

function FichaTecnica() {
  //consumiento apis
  const [tiposDeProyectos, setTiposDeProyectos] = useState([]);
  const [vendedores, setVendedores] = useState([]);
  const [departamentos, setDepartamentos] = useState([]);
  const [provincias, setProvincias] = useState([]);
  ////////////////
  const [estados, setEstados] = useState([]);
  ///////////////////////////////////////
  const [registrarFichaTecnica, setRegistrarFichaTecnica] = useState({
    fechaProyecto: "",
    divisionProyecto: "",
    tipoDeProyecto: "",
    nombreProyecto: "",
    clienteProyecto: "",
    rucProyecto: "",
    telefonoProyecto: "",
    direccionFiscal: "",
    vendedorProyecto: "",
    departamento: "",
    //////
    direccionEntrega: "",
    alcanceProyecto: "",
    areaProyecto: "",
    cultivoProyecto: "",
    modalidadContrato: "",
    modalidadEjecucion: "",
    detracciones: "",
    retenciones: "",
    cartaFianzaAnticipo: "",
    fielCumplimiento: "",
    plazoEjecucion: "",
    inicioProyectado: "",
    finProyectado: "",
    /*  forma de pago */
    anticipo: "",
    porcentaje: "",
    saldo: "",
    financiamiento: "",
    tasa: "",
    periodoGracia: "",
    plazo: "",
    periodoCuotas: "",
    inicioFinanciamiento: "",
    facturaNegociable: "",
    letrasAnticipadas: "",
    /*  Facturacion */
    anticipoOC: "",
    aFirmaDeContrato: "",
    saldoFacturacion: "",
    /*  falta estado */

    /*  Recursos */
    instalacion: "",
    guardiania: "",
    contenedorOficina: "",
    residenteObra: "",
    vehiculo: "",
    prevenciones: "",

    costosProyecto: "",
    margen: "",
    valorVentaSinIgv: "",
    prevencionista: "",
    valorVentaIgv: "",
    oportunidadesOptimizacion: "",
    riegosContrato: "",
  });

  const { vendedorProyecto, departamento } = registrarFichaTecnica;

  const [agarrarDepartamento, setAgarrarDepartamento] = useState({});

  const actualizarInput = (e) => {
    setRegistrarFichaTecnica({
      ...registrarFichaTecnica,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("ficha tecnica", registrarFichaTecnica);
  };

  const getData = async () => {
    try {
      const tiposDeProyectosObtenidos = await obtenerTiposDeProyectos();
      setTiposDeProyectos(tiposDeProyectosObtenidos);

      const todosLosVendedores = await obtenerVendedores();
      setVendedores(todosLosVendedores);

      const todosLosDepartamentos = await obtenerDepartamentos();
      setDepartamentos(todosLosDepartamentos);

      const TodosLosEstados = await obtenerEstados();
      setEstados(TodosLosEstados);
    } catch (error) {
      console.log(error);
    }
  };
  //console.log("vendedores", vendedores);
  console.log("departamentos", departamentos);
  // console.log("estados", estados);
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="container-fluid mt-3">
        <div className="row d-flex justify-content-center">
          <div
            className="col-12"
            style={{
              background: "white",
              boxShadow: "0px 4px 25px rgba(0, 0, 0, 0.15)",
              borderRadius: "10px",
            }}
          >
            <div>
              <div style={{ background: "white" }}>
                <img src={LogoRelix} alt="" className="mt-2 mb-2" />
                <h4 style={{ background: "white" }} className="text-uppercase">
                  Ficha Tecnica
                </h4>
              </div>

              <div>
                <Form
                  style={{ background: "white" }}
                  className="pb-3 "
                  onSubmit={(e) => onSubmit(e)}
                >
                  <div className="row ">
                    <div className="col-12  col-md-4">
                      {" "}
                      <Form.Group
                        controlId="formBasicText"
                        style={{ background: "white" }}
                      >
                        <Form.Label style={{ background: "white" }}>
                          Fecha
                        </Form.Label>
                        <Form.Control
                          type="date"
                          placeholder="Ingrese fecha"
                          name="fechaProyecto"
                          onChange={(e) => actualizarInput(e)}
                        />
                      </Form.Group>
                    </div>
                    <div className="col-12  col-md-4">
                      <Form.Group
                        controlId="formBasicText"
                        style={{ background: "white" }}
                      >
                        <Form.Label style={{ background: "white" }}>
                          NUM
                        </Form.Label>
                        {vendedorProyecto ? (
                          <>
                            <Form.Control
                              type="text"
                              placeholder="Codigo vendedor"
                              value={`PR-CODIGO VENDEDOR-${
                                vendedores[parseInt(vendedorProyecto) - 1]
                                  .codigoVendedor
                              }`}
                              disabled
                              style={{ width: "275px" }}
                            />
                          </>
                        ) : (
                          <>
                            <Form.Control
                              type="text"
                              placeholder="Codigo vendedor"
                              disabled
                            />
                          </>
                        )}
                      </Form.Group>
                    </div>
                    <div className="col-12 col-md-4">
                      <Form.Group
                        controlId="formBasicText"
                        style={{ background: "white" }}
                      >
                        <Form.Label style={{ background: "white" }}>
                          Division
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Division"
                          name="divisionProyecto"
                          onChange={(e) => actualizarInput(e)}
                        />
                      </Form.Group>
                    </div>
                  </div>
                  {/* ya esta */}
                  <Form.Group className="my-2">
                    <Form.Label style={{ background: "white" }}>
                      Tipo de Proyecto:
                    </Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      name="tipoDeProyecto"
                      onChange={(e) => {
                        actualizarInput(e);
                      }}
                    >
                      {tiposDeProyectos.map((proyecto, i) => (
                        <option key={i} value={proyecto.idTipoproyecto}>
                          {proyecto.tipoProyecto}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>{" "}
                  {/* ya esta */}
                  <div className="row" style={{ background: "white" }}>
                    <div className="col-12 col-sm-6  col-lg-3">
                      <Form.Group
                        controlId="formBasicText"
                        style={{ background: "white" }}
                      >
                        <Form.Label style={{ background: "white" }}>
                          Proyecto:
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="nombreProyecto"
                          placeholder="Nombre del proyecto"
                          onChange={(e) => actualizarInput(e)}
                        />
                      </Form.Group>{" "}
                      {/* ya esta */}
                    </div>
                    <div className="col-12 col-sm-6  col-lg-3">
                      <Form.Group
                        controlId="formBasicText"
                        style={{ background: "white" }}
                      >
                        <Form.Label style={{ background: "white" }}>
                          Cliente
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Cliente"
                          name="clienteProyecto"
                          onChange={(e) => actualizarInput(e)}
                        />
                      </Form.Group>
                      {/* ya esta */}
                    </div>
                    <div className="col-12 col-sm-6  col-lg-3">
                      <Form.Group
                        controlId="formBasicText"
                        style={{ background: "white" }}
                      >
                        <Form.Label style={{ background: "white" }}>
                          RUC
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Ruc"
                          name="rucProyecto"
                          onChange={(e) => actualizarInput(e)}
                        />
                      </Form.Group>
                      {/* ya esta */}
                    </div>
                    <div className="col-12 col-sm-6  col-lg-3">
                      <Form.Group
                        controlId="formBasicText"
                        style={{ background: "white" }}
                      >
                        <Form.Label style={{ background: "white" }}>
                          Telefono
                        </Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="Telefono"
                          name="telefonoProyecto"
                          onChange={(e) => actualizarInput(e)}
                        />
                      </Form.Group>
                      {/* ya esta */}
                    </div>
                  </div>
                  {/* ya esta */}
                  <div className="row" style={{ background: "white" }}>
                    <div className="col-12 col-sm-6 col-lg-3">
                      <Form.Group
                        controlId="formBasicText"
                        style={{ background: "white" }}
                      >
                        <Form.Label style={{ background: "white" }}>
                          Direccion de Fiscal:
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Direccion de Fiscal"
                          name="direccionFiscal"
                          onChange={(e) => actualizarInput(e)}
                        />
                      </Form.Group>
                      {/* ya esta */}
                    </div>

                    <div className="col-12 col-sm-6 col-lg-3">
                      <Form.Group>
                        <Form.Label style={{ background: "white" }}>
                          Vendedor:
                        </Form.Label>
                        <Form.Select
                          aria-label="Default select example"
                          name="vendedorProyecto"
                          onChange={(e) => {
                            actualizarInput(e);
                          }}
                        >
                          {vendedores.map((vendedor, i) => (
                            <option value={vendedor.idVendedor} key={i}>
                              {vendedor.nombreVendedor}
                            </option>
                          ))}
                        </Form.Select>
                      </Form.Group>
                      {/* ya esta */}
                    </div>

                    <div className="col-12 col-sm-6 col-lg-3">
                      <Form.Group
                        controlId="formBasicText"
                        style={{ background: "white" }}
                      >
                        <Form.Label style={{ background: "white" }}>
                          Codigo:
                        </Form.Label>
                        {vendedorProyecto ? (
                          <>
                            <Form.Control
                              type="text"
                              placeholder="Codigo"
                              value={
                                vendedores[parseInt(vendedorProyecto) - 1]
                                  .codigoVendedor
                              }
                              disabled
                            />
                          </>
                        ) : (
                          <>
                            <Form.Control
                              type="text"
                              placeholder="Codigo"
                              disabled
                            />
                          </>
                        )}
                      </Form.Group>
                      {/* ya esta */}
                    </div>

                    <div className="col-12 col-sm-6 col-lg-3">
                      <Form.Group>
                        <Form.Label style={{ background: "white" }}>
                          Departamento:
                        </Form.Label>
                        <Form.Select
                          aria-label="Default select example"
                          value={agarrarDepartamento}
                          name="departamento"
                          onChange={(e) => {
                            setAgarrarDepartamento(e.target.value);
                            actualizarInput(e);
                          }}
                        >
                          {departamentos.map((departamento, i) => (
                            <option value={departamento.idDepartamento} key={i}>
                              {departamento.nombreDepartamento}
                            </option>
                          ))}
                        </Form.Select>
                      </Form.Group>
                      {/* ya esta */}
                    </div>
                  </div>
                  {/* ya esta */}
                  <div className="row" style={{ background: "white" }}>
                    <div className="col-12 col-sm-6  col-lg-3">
                      <Form.Group>
                        <Form.Label style={{ background: "white" }}>
                          Provincia:
                        </Form.Label>
                        <Form.Select aria-label="Default select example">
                          <option value="1">Provincia1</option>
                          <option value="2">Provincia2</option>
                          <option value="3">Provincia3</option>
                        </Form.Select>
                      </Form.Group>
                    </div>
                    <div className="col-12 col-sm-6  col-lg-3">
                      <Form.Group>
                        <Form.Label style={{ background: "white" }}>
                          Distrito:
                        </Form.Label>
                        <Form.Select aria-label="Default select example">
                          <option value="1">Distrito1</option>
                          <option value="2">Distrito2</option>
                          <option value="3">Distrito3</option>
                        </Form.Select>
                      </Form.Group>
                    </div>
                    <div className="col-12 col-sm-6  col-lg-3">
                      <Form.Group
                        controlId="formBasicText"
                        style={{ background: "white" }}
                      >
                        <Form.Label style={{ background: "white" }}>
                          Direccion de Entrega:
                        </Form.Label>
                        <Form.Control
                          name="direccionEntrega"
                          onChange={(e) => {
                            actualizarInput(e);
                          }}
                          type="text"
                          placeholder="Direccion de entrega"
                        />
                      </Form.Group>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-3">
                      <Form.Group
                        controlId="formBasicText"
                        style={{ background: "white" }}
                      >
                        <Form.Label style={{ background: "white" }}>
                          Alcance
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Alcance"
                          name="alcanceProyecto"
                          onChange={(e) => {
                            actualizarInput(e);
                          }}
                        />
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row" style={{ background: "white" }}>
                    <div className="col-12 col-sm-6  col-lg-3">
                      <Form.Group
                        controlId="formBasicText"
                        style={{ background: "white" }}
                      >
                        <Form.Label style={{ background: "white" }}>
                          Area (Has):
                        </Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="Ingrese cantidad de hectareas"
                          name="areaProyecto"
                          onChange={(e) => {
                            actualizarInput(e);
                          }}
                        />
                      </Form.Group>
                    </div>

                    <div className="col-12 col-sm-6  col-lg-3">
                      <Form.Group
                        controlId="formBasicText"
                        style={{ background: "white" }}
                      >
                        <Form.Label style={{ background: "white" }}>
                          Cultivo:
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Ingrese cultivo"
                          name="cultivoProyecto"
                          onChange={(e) => {
                            actualizarInput(e);
                          }}
                        />
                      </Form.Group>
                    </div>

                    <div className="col-12 col-sm-6  col-lg-3">
                      <Form.Group
                        controlId="formBasicText"
                        style={{ background: "white" }}
                      >
                        <Form.Label style={{ background: "white" }}>
                          Modalidad del contrato:
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Modalidad del contrato"
                          name="modalidadContrato"
                          onChange={(e) => {
                            actualizarInput(e);
                          }}
                        />
                      </Form.Group>
                    </div>

                    <div className="col-12 col-sm-6  col-lg-3">
                      <Form.Group
                        controlId="formBasicText"
                        style={{ background: "white" }}
                      >
                        <Form.Label style={{ background: "white" }}>
                          Modalidad de ejecucion:
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Modalidad de ejecucion"
                          name="modalidadEjecucion"
                          onChange={(e) => {
                            actualizarInput(e);
                          }}
                        />
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row" style={{ background: "white" }}>
                    <div className="col-12 col-sm-6  col-lg-3">
                      <Form.Group>
                        <Form.Label style={{ background: "white" }}>
                          Detracciones:
                        </Form.Label>
                        <Form.Select
                          aria-label="Default select example"
                          name="detracciones"
                          onChange={(e) => {
                            actualizarInput(e);
                          }}
                        >
                          <option>Seleccione una Opcion</option>
                          <option value="1">Si</option>
                          <option value="2">No</option>
                        </Form.Select>
                      </Form.Group>
                    </div>

                    <div className="col-12 col-sm-6  col-lg-3">
                      <Form.Group>
                        <Form.Label style={{ background: "white" }}>
                          Retenciones:
                        </Form.Label>
                        <Form.Select
                          aria-label="Default select example"
                          name="retenciones"
                          onChange={(e) => {
                            actualizarInput(e);
                          }}
                        >
                          <option>Seleccione una Opcion</option>
                          <option value="1">Si</option>
                          <option value="2">No</option>
                        </Form.Select>
                      </Form.Group>
                    </div>

                    <div className="col-12 col-sm-6  col-lg-3">
                      <Form.Group>
                        <Form.Label style={{ background: "white" }}>
                          Carta Fianza por Anticipo:
                        </Form.Label>
                        <Form.Select
                          aria-label="Default select example"
                          name="cartaFianzaAnticipo"
                          onChange={(e) => {
                            actualizarInput(e);
                          }}
                        >
                          <option>Seleccione una Opcion</option>
                          <option value="1">Si</option>
                          <option value="2">No</option>
                        </Form.Select>
                      </Form.Group>
                    </div>

                    <div className="col-12 col-sm-6  col-lg-3">
                      <Form.Group>
                        <Form.Label style={{ background: "white" }}>
                          Fiel Cumplimiento:
                        </Form.Label>
                        <Form.Select
                          aria-label="Default select example"
                          name="fielCumplimiento"
                          onChange={(e) => {
                            actualizarInput(e);
                          }}
                        >
                          <option>Seleccione una Opcion</option>
                          <option value="1">Si</option>
                          <option value="2">No</option>
                        </Form.Select>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row" style={{ background: "white" }}>
                    <div className="col-12 col-12  col-md-4">
                      <Form.Group
                        controlId="formBasicText"
                        style={{ background: "white" }}
                      >
                        <Form.Label style={{ background: "white" }}>
                          Plazo de ejecucion:
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Plazo de ejecucion"
                          name="plazoEjecucion"
                          onChange={(e) => {
                            actualizarInput(e);
                          }}
                        />
                      </Form.Group>
                      {/* ya esta */}
                    </div>

                    <div className="col-12  col-md-4">
                      <Form.Group
                        controlId="formBasicText"
                        style={{ background: "white" }}
                      >
                        <Form.Label style={{ background: "white" }}>
                          Inicio Proyectado:
                        </Form.Label>
                        <Form.Control
                          type="date"
                          placeholder="Ingrese inicio"
                          name="inicioProyectado"
                          onChange={(e) => {
                            actualizarInput(e);
                          }}
                        />
                      </Form.Group>
                      {/* ya esta */}
                    </div>

                    <div className="col-12  col-md-4">
                      <Form.Group
                        controlId="formBasicText"
                        style={{ background: "white" }}
                      >
                        <Form.Label style={{ background: "white" }}>
                          Termino Proyectado:
                        </Form.Label>
                        <Form.Control
                          type="date"
                          placeholder="Ingrese fin"
                          name="finProyectado"
                          onChange={(e) => {
                            actualizarInput(e);
                          }}
                        />
                      </Form.Group>
                      {/* ya esta */}
                    </div>
                  </div>
                  <h3 className="text-primary my-3">Forma de pago</h3>
                  <div className="row" style={{ background: "white" }}>
                    <div className="col-12 col-sm-6  col-lg-3">
                      <Form.Group>
                        <Form.Label style={{ background: "white" }}>
                          Anticipo:
                        </Form.Label>
                        <Form.Select
                          aria-label="Default select example"
                          name="anticipo"
                          onChange={(e) => {
                            actualizarInput(e);
                          }}
                        >
                          <option>Seleccione opcion</option>
                          <option value="1">Si</option>
                          <option value="2">No</option>
                        </Form.Select>
                      </Form.Group>
                    </div>
                    <div className="col-12 col-sm-6  col-lg-3">
                      <Form.Group
                        controlId="formBasicText"
                        style={{ background: "white" }}
                      >
                        <Form.Label style={{ background: "white" }}>
                          %:
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="%"
                          name="porcentaje"
                          onChange={(e) => {
                            actualizarInput(e);
                          }}
                        />
                      </Form.Group>
                    </div>
                    <div className="col-12 col-sm-6  col-lg-3">
                      <Form.Group
                        controlId="formBasicText"
                        style={{ background: "white" }}
                      >
                        <Form.Label style={{ background: "white" }}>
                          Saldo:
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Saldo"
                          name="saldo"
                          onChange={(e) => {
                            actualizarInput(e);
                          }}
                        />
                      </Form.Group>
                    </div>
                    <div className="col-12 col-sm-6  col-lg-3">
                      <Form.Group>
                        <Form.Label style={{ background: "white" }}>
                          Financimiento:
                        </Form.Label>
                        <Form.Select
                          aria-label="Default select example"
                          name="financiamiento"
                          onChange={(e) => {
                            actualizarInput(e);
                          }}
                        >
                          <option>Seleccione opcion</option>
                          <option value="1">Si</option>
                          <option value="2">No</option>
                        </Form.Select>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row" style={{ background: "white" }}>
                    <div className="col-12 col-sm-6  col-lg-3">
                      <Form.Group
                        controlId="formBasicText"
                        style={{ background: "white" }}
                      >
                        <Form.Label style={{ background: "white" }}>
                          Tasa:
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Tasa"
                          name="tasa"
                          onChange={(e) => {
                            actualizarInput(e);
                          }}
                        />
                      </Form.Group>
                    </div>

                    <div className="col-12 col-sm-6  col-lg-3">
                      <Form.Group
                        controlId="formBasicText"
                        style={{ background: "white" }}
                      >
                        <Form.Label style={{ background: "white" }}>
                          Periodo de Gracia:
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Periodo de Gracia"
                          name="periodoGracia"
                          onChange={(e) => {
                            actualizarInput(e);
                          }}
                        />
                      </Form.Group>
                    </div>

                    <div className="col-12 col-sm-6  col-lg-3">
                      <Form.Group
                        controlId="formBasicText"
                        style={{ background: "white" }}
                      >
                        <Form.Label style={{ background: "white" }}>
                          Plazo:
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Plazo"
                          name="plazo"
                          onChange={(e) => {
                            actualizarInput(e);
                          }}
                        />
                      </Form.Group>
                    </div>

                    <div className="col-12 col-sm-6  col-lg-3">
                      <Form.Group
                        controlId="formBasicText"
                        style={{ background: "white" }}
                      >
                        <Form.Label style={{ background: "white" }}>
                          Periodo de cuotas:
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Periodo de cuotas"
                          name="periodoCuotas"
                          onChange={(e) => {
                            actualizarInput(e);
                          }}
                        />
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row" style={{ background: "white" }}>
                    <div className="col-12  col-md-4">
                      <Form.Group
                        controlId="formBasicText"
                        style={{ background: "white" }}
                      >
                        <Form.Label style={{ background: "white" }}>
                          Inicio del financiamiento:
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Inicio del financiamiento"
                          name="inicioFinanciamiento"
                          onChange={(e) => {
                            actualizarInput(e);
                          }}
                        />
                      </Form.Group>
                    </div>

                    <div className="col-12  col-md-4">
                      <Form.Group>
                        <Form.Label style={{ background: "white" }}>
                          Factura negociable:
                        </Form.Label>
                        <Form.Select
                          aria-label="Default select example"
                          name="facturaNegociable"
                          onChange={(e) => {
                            actualizarInput(e);
                          }}
                        >
                          <option>Seleccione opcion</option>
                          <option value="si">Si</option>
                          <option value="no">No</option>
                        </Form.Select>
                      </Form.Group>
                    </div>

                    <div className="col-12  col-md-4">
                      <Form.Group>
                        <Form.Label style={{ background: "white" }}>
                          Letras anticipadas:
                        </Form.Label>
                        <Form.Select
                          aria-label="Default select example"
                          name="letrasAnticipadas"
                          onChange={(e) => {
                            actualizarInput(e);
                          }}
                        >
                          <option>Seleccione opcion</option>
                          <option value="si">Si</option>
                          <option value="no">No</option>
                        </Form.Select>
                      </Form.Group>
                    </div>
                  </div>
                  <h3 className="text-primary my-3">Facturacion</h3>
                  <div className="row" style={{ background: "white" }}>
                    <div className="col-12  col-md-4">
                      <Form.Group>
                        <Form.Label style={{ background: "white" }}>
                          Anticipo con la OC:
                        </Form.Label>
                        <Form.Select
                          aria-label="Default select example"
                          name="anticipoOC"
                          onChange={(e) => {
                            actualizarInput(e);
                          }}
                        >
                          <option>Seleccione opcion</option>
                          <option value="si">Si</option>
                          <option value="no">No</option>
                        </Form.Select>
                      </Form.Group>
                    </div>

                    <div className="col-12  col-md-4">
                      <Form.Group>
                        <Form.Label style={{ background: "white" }}>
                          A firma de contrato:
                        </Form.Label>
                        <Form.Select
                          aria-label="Default select example"
                          name="aFirmaDeContrato"
                          onChange={(e) => {
                            actualizarInput(e);
                          }}
                        >
                          <option>Seleccione opcion</option>
                          <option value="si">Si</option>
                          <option value="no">No</option>
                        </Form.Select>
                      </Form.Group>
                    </div>

                    <div className="col-12  col-md-4">
                      <Form.Group
                        controlId="formBasicText"
                        style={{ background: "white" }}
                      >
                        <Form.Label style={{ background: "white" }}>
                          Saldo:
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Saldo"
                          name="saldoFacturacion"
                          onChange={(e) => {
                            actualizarInput(e);
                          }}
                        />
                      </Form.Group>
                    </div>
                  </div>
                  <Form.Group className="my-2">
                    <Form.Label style={{ background: "white" }}>
                      Estado:
                    </Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      name="estado"
                      onChange={(e) => {
                        actualizarInput(e);
                      }}
                    >
                      <option>Seleccione Tipo de Estado</option>
                      {estados.map((estado, i) => (
                        <option value={estado.idEstadofichaproyecto} key={i}>
                          {estado.estadoFichaproyecto}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                  <h3 className="text-primary my-3">Recursos</h3>
                  <div className="row" style={{ background: "white" }}>
                    <div className="col-12 col-sm-6  col-lg-3">
                      <Form.Group
                        controlId="formBasicText"
                        style={{ background: "white" }}
                      >
                        <Form.Label style={{ background: "white" }}>
                          Instalacion:
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Instalacion"
                          name="instalacion"
                          onChange={(e) => {
                            actualizarInput(e);
                          }}
                        />
                      </Form.Group>
                    </div>

                    <div className="col-12 col-sm-6  col-lg-3">
                      <Form.Group
                        controlId="formBasicText"
                        style={{ background: "white" }}
                      >
                        <Form.Label style={{ background: "white" }}>
                          Guardiania:
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Guardiania"
                          name="guardiania"
                          onChange={(e) => {
                            actualizarInput(e);
                          }}
                        />
                      </Form.Group>
                    </div>

                    <div className="col-12 col-sm-6  col-lg-3">
                      <Form.Group
                        controlId="formBasicText"
                        style={{ background: "white" }}
                      >
                        <Form.Label style={{ background: "white" }}>
                          Contenedor Oficina:
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Contenedor Oficina"
                          name="contenedorOficina"
                          onChange={(e) => {
                            actualizarInput(e);
                          }}
                        />
                      </Form.Group>
                    </div>

                    <div className="col-12 col-sm-6  col-lg-3">
                      <Form.Group
                        controlId="formBasicText"
                        style={{ background: "white" }}
                      >
                        <Form.Label style={{ background: "white" }}>
                          Residente de obra:
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Residente de obra"
                          name="residenteObra"
                          onChange={(e) => {
                            actualizarInput(e);
                          }}
                        />
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-sm-6  col-lg-3">
                      <Form.Group
                        controlId="formBasicText"
                        style={{ background: "white" }}
                      >
                        <Form.Label style={{ background: "white" }}>
                          Vehiculo:
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Vehiculo"
                          name="vehiculo"
                          onChange={(e) => {
                            actualizarInput(e);
                          }}
                        />
                      </Form.Group>
                    </div>

                    <div className="col-12 col-sm-6  col-lg-3">
                      <Form.Group
                        controlId="formBasicText"
                        style={{ background: "white" }}
                      >
                        <Form.Label style={{ background: "white" }}>
                          Prevencionista:
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Prevencionista"
                          name="prevenciones"
                          onChange={(e) => {
                            actualizarInput(e);
                          }}
                        />
                      </Form.Group>
                    </div>

                    <div className="col-12 col-sm-6  col-lg-3">
                      <Form.Group
                        controlId="formBasicText"
                        style={{ background: "white" }}
                      >
                        <Form.Label style={{ background: "white" }}>
                          Costos del Proyecto USD:
                        </Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="USD"
                          name="costosProyecto"
                          onChange={(e) => {
                            actualizarInput(e);
                          }}
                        />
                      </Form.Group>
                    </div>

                    <div className="col-12 col-sm-6  col-lg-3">
                      <Form.Group
                        controlId="formBasicText"
                        style={{ background: "white" }}
                      >
                        <Form.Label style={{ background: "white" }}>
                          Margen %:
                        </Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="Margen %"
                          name="margen"
                          onChange={(e) => {
                            actualizarInput(e);
                          }}
                        />
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-sm-6  col-lg-3">
                      <Form.Group
                        controlId="formBasicText"
                        style={{ background: "white" }}
                      >
                        <Form.Label style={{ background: "white" }}>
                          Utilidad USD:
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Utilidad USD"
                          name="utilidad"
                          onChange={(e) => {
                            actualizarInput(e);
                          }}
                        />
                      </Form.Group>
                    </div>

                    <div className="col-12 col-sm-6  col-lg-3">
                      <Form.Group
                        controlId="formBasicText"
                        style={{ background: "white" }}
                      >
                        <Form.Label style={{ background: "white" }}>
                          Valor venta sin IGV USD:
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Valor venta sin IGV USD"
                          name="valorVentaSinIgv"
                          onChange={(e) => {
                            actualizarInput(e);
                          }}
                        />
                      </Form.Group>
                    </div>

                    <div className="col-12 col-sm-6  col-lg-3">
                      <Form.Group
                        controlId="formBasicText"
                        style={{ background: "white" }}
                      >
                        <Form.Label style={{ background: "white" }}>
                          Prevencionista:
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Prevencionista"
                          name="prevencionista"
                          onChange={(e) => {
                            actualizarInput(e);
                          }}
                        />
                      </Form.Group>
                    </div>

                    <div className="col-12 col-sm-6  col-lg-3">
                      <Form.Group
                        controlId="formBasicText"
                        style={{ background: "white" }}
                      >
                        <Form.Label style={{ background: "white" }}>
                          Valor Venta con IGV:
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Valor Venta con IGV"
                          name="valorVentaIgv"
                          onChange={(e) => {
                            actualizarInput(e);
                          }}
                        />
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <Form.Group
                        controlId="formBasicText"
                        style={{ background: "white" }}
                      >
                        <Form.Label style={{ background: "white" }}>
                          Oportunidades de Optimizacion:
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Oportunidades de Optimizacion"
                          name="oportunidadesOptimizacion"
                          onChange={(e) => {
                            actualizarInput(e);
                          }}
                        />
                      </Form.Group>
                    </div>
                    <div className="col-12 col-md-6">
                      <Form.Group
                        controlId="formBasicText"
                        style={{ background: "white" }}
                      >
                        <Form.Label style={{ background: "white" }}>
                          Riesgos del contrato:
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Riesgos del contrato"
                          name="riegosContrato"
                          onChange={(e) => {
                            actualizarInput(e);
                          }}
                        />
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-12 col-md-6">
                      <Button
                        variant="info w-100 py-2  text-white btn btn-success"
                        type="submit"
                      >
                        Guardar
                      </Button>
                    </div>
                    <div className="col-12 col-md-6 ">
                      <Button
                        variant="info w-100 py-2 text-white  btn btn-warning"
                        type="submit"
                      >
                        Retroceder
                      </Button>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FichaTecnica;
