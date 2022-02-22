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
} from "../Ingeniero/apisFichaTecnica";

function FichaTecnica() {
  //consumiento apis
  const [tiposDeProyectos, setTiposDeProyectos] = useState([]);
  const [vendedores, setVendedores] = useState([]);
  const [departamentos, setDepartamentos] = useState([]);
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
  });
  const { vendedorProyecto } = registrarFichaTecnica;

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
    } catch (error) {
      console.log(error);
    }
  };
  //console.log("vendedores", vendedores);
  //console.log("departamentos", departamentos);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="container-fluid">
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
                  <div
                    className="d-flex justify-content-between my-3"
                    style={{ background: "white" }}
                  >
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
                    {/* ya esta */}
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
                    {/* esto tiene que venir al verificar la api */}
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
                    </Form.Group>{" "}
                    {/* ya esta */}
                  </div>
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
                  <div
                    className="d-flex justify-content-between my-3"
                    style={{ background: "white" }}
                  >
                    <Form.Group
                      controlId="formBasicText"
                      style={{ background: "white" }}
                    >
                      <Form.Label style={{ background: "white" }}>
                        Nombre del proyecto:
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="nombreProyecto"
                        placeholder="Nombre del proyecto"
                        onChange={(e) => actualizarInput(e)}
                      />
                    </Form.Group>{" "}
                    {/* ya esta */}
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
                  <div
                    className="d-flex justify-content-between my-3"
                    style={{ background: "white" }}
                  >
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

                    <Form.Group>
                      <Form.Label style={{ background: "white" }}>
                        Departamento:
                      </Form.Label>
                      <Form.Select aria-label="Default select example">
                        {departamentos.map((departamento, i) => (
                          <option value={departamento.idDepartamento} key={i}>
                            {departamento.nombreDepartamento}
                          </option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                  </div>
                  <div
                    className="d-flex justify-content-between my-3"
                    style={{ background: "white" }}
                  >
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

                    <Form.Group
                      controlId="formBasicText"
                      style={{ background: "white" }}
                    >
                      <Form.Label style={{ background: "white" }}>
                        Direccion de Entrega:
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Direccion de entrega"
                      />
                    </Form.Group>

                    <Form.Group
                      controlId="formBasicText"
                      style={{ background: "white" }}
                    >
                      <Form.Label style={{ background: "white" }}>
                        Alcance
                      </Form.Label>
                      <Form.Control type="text" placeholder="Alcance" />
                    </Form.Group>
                  </div>
                  <div
                    className="d-flex justify-content-between my-3"
                    style={{ background: "white" }}
                  >
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
                      />
                    </Form.Group>

                    <Form.Group
                      controlId="formBasicText"
                      style={{ background: "white" }}
                    >
                      <Form.Label style={{ background: "white" }}>
                        Cultivo:
                      </Form.Label>
                      <Form.Control type="text" placeholder="Ingrese cultivo" />
                    </Form.Group>

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
                      />
                    </Form.Group>

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
                      />
                    </Form.Group>
                  </div>
                  <div
                    className="d-flex justify-content-between my-3"
                    style={{ background: "white" }}
                  >
                    <Form.Group>
                      <Form.Label style={{ background: "white" }}>
                        Detracciones:
                      </Form.Label>
                      <Form.Select aria-label="Default select example">
                        <option>Seleccione una Opcion</option>
                        <option value="1">Si</option>
                        <option value="2">No</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group>
                      <Form.Label style={{ background: "white" }}>
                        Retenciones:
                      </Form.Label>
                      <Form.Select aria-label="Default select example">
                        <option>Seleccione una Opcion</option>
                        <option value="1">Si</option>
                        <option value="2">No</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group>
                      <Form.Label style={{ background: "white" }}>
                        Carta Fianza por Anticipo:
                      </Form.Label>
                      <Form.Select aria-label="Default select example">
                        <option>Seleccione una Opcion</option>
                        <option value="1">Si</option>
                        <option value="2">No</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group>
                      <Form.Label style={{ background: "white" }}>
                        Fiel Cumplimiento:
                      </Form.Label>
                      <Form.Select aria-label="Default select example">
                        <option>Seleccione una Opcion</option>
                        <option value="1">Si</option>
                        <option value="2">No</option>
                      </Form.Select>
                    </Form.Group>
                  </div>
                  <div
                    className="d-flex justify-content-between my-3"
                    style={{ background: "white" }}
                  >
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
                      />
                    </Form.Group>

                    <Form.Group
                      controlId="formBasicText"
                      style={{ background: "white" }}
                    >
                      <Form.Label style={{ background: "white" }}>
                        Inicio Proyectado:
                      </Form.Label>
                      <Form.Control type="date" placeholder="Ingrese inicio" />
                    </Form.Group>

                    <Form.Group
                      controlId="formBasicText"
                      style={{ background: "white" }}
                    >
                      <Form.Label style={{ background: "white" }}>
                        Termino Proyectado:
                      </Form.Label>
                      <Form.Control type="date" placeholder="Ingrese fin" />
                    </Form.Group>

                    {/* <Form.Group>
                      <Form.Label style={{ background: "white" }}>
                        Forma de Pago:
                      </Form.Label>
                      <Form.Select aria-label="Default select example">
                        <option>Seleccione Forma de Pago</option>
                        <option value="1">Contado</option>
                        <option value="2">
                          Anticipo con la OC y saldo contra valorizaciones
                        </option>
                        <option value="3">100% Avance valorizado</option>
                        <option value="4">
                          Avance contra entrega de materiales
                        </option>
                        <option value="5">
                          Instalación contra entrega de obra
                        </option>
                      </Form.Select>
                    </Form.Group> */}
                  </div>
                  <h3 className="text-primary my-3">Forma de pago</h3>
                  <div
                    className="d-flex justify-content-between my-3"
                    style={{ background: "white" }}
                  >
                    <Form.Group>
                      <Form.Label style={{ background: "white" }}>
                        Anticipo:
                      </Form.Label>
                      <Form.Select aria-label="Default select example">
                        <option>Seleccione opcion</option>
                        <option value="1">Si</option>
                        <option value="2">No</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group
                      controlId="formBasicText"
                      style={{ background: "white" }}
                    >
                      <Form.Label style={{ background: "white" }}>
                        %:
                      </Form.Label>
                      <Form.Control type="text" placeholder="%" />
                    </Form.Group>

                    <Form.Group
                      controlId="formBasicText"
                      style={{ background: "white" }}
                    >
                      <Form.Label style={{ background: "white" }}>
                        Saldo:
                      </Form.Label>
                      <Form.Control type="text" placeholder="Saldo" />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label style={{ background: "white" }}>
                        Financimiento:
                      </Form.Label>
                      <Form.Select aria-label="Default select example">
                        <option>Seleccione opcion</option>
                        <option value="1">Si</option>
                        <option value="2">No</option>
                      </Form.Select>
                    </Form.Group>
                  </div>
                  <div
                    className="d-flex justify-content-between my-3"
                    style={{ background: "white" }}
                  >
                    <Form.Group
                      controlId="formBasicText"
                      style={{ background: "white" }}
                    >
                      <Form.Label style={{ background: "white" }}>
                        Tasa:
                      </Form.Label>
                      <Form.Control type="text" placeholder="Tasa" />
                    </Form.Group>

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
                      />
                    </Form.Group>

                    <Form.Group
                      controlId="formBasicText"
                      style={{ background: "white" }}
                    >
                      <Form.Label style={{ background: "white" }}>
                        Plazo:
                      </Form.Label>
                      <Form.Control type="text" placeholder="Plazo" />
                    </Form.Group>

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
                      />
                    </Form.Group>
                  </div>
                  <div
                    className="d-flex justify-content-between my-3"
                    style={{ background: "white" }}
                  >
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
                      />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label style={{ background: "white" }}>
                        Factura negociable:
                      </Form.Label>
                      <Form.Select aria-label="Default select example">
                        <option>Seleccione opcion</option>
                        <option value="1">Si</option>
                        <option value="2">No</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group>
                      <Form.Label style={{ background: "white" }}>
                        Letras anticipadas:
                      </Form.Label>
                      <Form.Select aria-label="Default select example">
                        <option>Seleccione opcion</option>
                        <option value="1">Si</option>
                        <option value="2">No</option>
                      </Form.Select>
                    </Form.Group>
                  </div>
                  <h3 className="text-primary my-3">Facturacion</h3>
                  <div
                    className="d-flex justify-content-between my-3"
                    style={{ background: "white" }}
                  >
                    <Form.Group>
                      <Form.Label style={{ background: "white" }}>
                        Anticipo con la OC:
                      </Form.Label>
                      <Form.Select aria-label="Default select example">
                        <option>Seleccione opcion</option>
                        <option value="1">Si</option>
                        <option value="2">No</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group>
                      <Form.Label style={{ background: "white" }}>
                        A firma de contrato:
                      </Form.Label>
                      <Form.Select aria-label="Default select example">
                        <option>Seleccione opcion</option>
                        <option value="1">Si</option>
                        <option value="2">No</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group
                      controlId="formBasicText"
                      style={{ background: "white" }}
                    >
                      <Form.Label style={{ background: "white" }}>
                        Saldo:
                      </Form.Label>
                      <Form.Control type="text" placeholder="Saldo" />
                    </Form.Group>
                  </div>
                  <Form.Group className="my-2">
                    <Form.Label style={{ background: "white" }}>
                      Estado:
                    </Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option>Seleccione Tipo de Estado</option>
                      <option value="1">Preparacion</option>
                      <option value="2">Diseño</option>
                      <option value="3">Negociacion</option>
                      <option value="4">Cerrado</option>
                      <option value="5">Perdido</option>
                    </Form.Select>
                  </Form.Group>
                  <h3 className="text-primary my-3">Recursos</h3>
                  <div
                    className="d-flex justify-content-between my-3"
                    style={{ background: "white" }}
                  >
                    <Form.Group
                      controlId="formBasicText"
                      style={{ background: "white" }}
                    >
                      <Form.Label style={{ background: "white" }}>
                        Instalacion:
                      </Form.Label>
                      <Form.Control type="text" placeholder="Instalacion" />
                    </Form.Group>

                    <Form.Group
                      controlId="formBasicText"
                      style={{ background: "white" }}
                    >
                      <Form.Label style={{ background: "white" }}>
                        Guardiania:
                      </Form.Label>
                      <Form.Control type="text" placeholder="Guardiania" />
                    </Form.Group>

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
                      />
                    </Form.Group>

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
                      />
                    </Form.Group>

                    <Form.Group
                      controlId="formBasicText"
                      style={{ background: "white" }}
                    >
                      <Form.Label style={{ background: "white" }}>
                        Vehiculo:
                      </Form.Label>
                      <Form.Control type="text" placeholder="Vehiculo" />
                    </Form.Group>

                    <Form.Group
                      controlId="formBasicText"
                      style={{ background: "white" }}
                    >
                      <Form.Label style={{ background: "white" }}>
                        Prevencionista:
                      </Form.Label>
                      <Form.Control type="text" placeholder="Prevencionista" />
                    </Form.Group>
                  </div>
                  <div
                    className="d-flex justify-content-between my-3"
                    style={{ background: "white" }}
                  >
                    <Form.Group
                      controlId="formBasicText"
                      style={{ background: "white" }}
                    >
                      <Form.Label style={{ background: "white" }}>
                        Costos del Proyecto USD:
                      </Form.Label>
                      <Form.Control type="text" placeholder="USD" />
                    </Form.Group>

                    <Form.Group
                      controlId="formBasicText"
                      style={{ background: "white" }}
                    >
                      <Form.Label style={{ background: "white" }}>
                        Margen %:
                      </Form.Label>
                      <Form.Control type="text" placeholder="Margen %" />
                    </Form.Group>

                    <Form.Group
                      controlId="formBasicText"
                      style={{ background: "white" }}
                    >
                      <Form.Label style={{ background: "white" }}>
                        Utilidad USD:
                      </Form.Label>
                      <Form.Control type="text" placeholder="Utilidad USD" />
                    </Form.Group>

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
                      />
                    </Form.Group>

                    <Form.Group
                      controlId="formBasicText"
                      style={{ background: "white" }}
                    >
                      <Form.Label style={{ background: "white" }}>
                        Prevencionista:
                      </Form.Label>
                      <Form.Control type="text" placeholder="Prevencionista" />
                    </Form.Group>

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
                      />
                    </Form.Group>
                  </div>
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
                    />
                  </Form.Group>
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
                    />
                  </Form.Group>
                  <div
                    className="d-flex justify-content-between mt-3"
                    style={{ background: "white" }}
                  >
                    {/* style={{
                        background:
                          "linear-gradient(180deg, #1478A3 0%, rgba(37, 182, 244, 0.51) 100%)",
                        border: "none",
                      }} */}
                    <Button
                      variant="info w-25 mt-2 text-white btn btn-success"
                      type="submit"
                    >
                      Guardar
                    </Button>
                    <Button
                      variant="info w-25 mt-2 text-white  btn btn-warning"
                      type="submit"
                    >
                      Retroceder
                    </Button>
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
