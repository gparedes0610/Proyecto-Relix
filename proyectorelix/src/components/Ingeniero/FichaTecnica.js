import React from "react";
import LogoRelix from "../../assets/relixjpg1.svg";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
function FichaTecnica() {
  const [registrarFichaTecnica, setRegistrarFichaTecnica] = useState({
    nombreProyecto: "",
    ubicacion: "",
    cliente: "",
    ruc: "",
    direccionFiscal: "",
    atencion: "",
    vendedor: "",
    telefono: "",
    referencia: "",
    validezOferta: "",
    montoUsd: "",
    etapaActual: "",
    area: "",
    cultivo: "",
    tipoProyecto: "",
    duracion: "",
    modalidad: "",
    inicioProyectado: "",
    finProyectado: "",
    formaDePago: "",
    proximoHito: "",
  });

  //consumiendo api para el select

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
                <Form style={{ background: "white" }} className="pb-3 ">
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
                      <Form.Control type="date" placeholder="Ingrese fecha" />
                    </Form.Group>

                    <Form.Group
                      controlId="formBasicText"
                      style={{ background: "white" }}
                    >
                      <Form.Label style={{ background: "white" }}>
                        NUM
                      </Form.Label>
                      <Form.Control type="text" placeholder="Codigo vendedor" />
                    </Form.Group>

                    <Form.Group
                      controlId="formBasicText"
                      style={{ background: "white" }}
                    >
                      <Form.Label style={{ background: "white" }}>
                        Division
                      </Form.Label>
                      <Form.Control type="text" placeholder="Division" />
                    </Form.Group>
                  </div>
                  <Form.Group className="my-2">
                    <Form.Label style={{ background: "white" }}>
                      Tipo de Proyecto:
                    </Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option>Seleccione Tipo de Proyecto</option>
                      <option value="1">
                        Sistema de Riego por Goteo (gotero insertado) - 08
                      </option>
                      <option value="2">
                        Sistema de Riego por Goteo (gotero botón) - 08
                      </option>
                      <option value="3">
                        Sistema de Riego por Aspersión - 08
                      </option>
                      <option value="4">
                        Sistema de Riego por Microaspersión -08
                      </option>
                      <option value="5">Implementación de Pozos - 09</option>
                      <option value="5">Perforación de Pozos - 09</option>
                      <option value="5">
                        Implementación y Perforación de Pozos - 09
                      </option>
                      <option value="5">
                        Proyecto Integral: Sistema de Riego por Goteo, Planta de
                        Tratamiento por Osmosis Inversa e Implementación de
                        Pozos - 1750 / 0850 / 0950{" "}
                      </option>
                      <option value="5">Suministro de materiales - 0707</option>
                      <option value="5">Otros: XXXXX</option>
                    </Form.Select>
                  </Form.Group>

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
                        placeholder="Nombre del proyecto"
                      />
                    </Form.Group>

                    <Form.Group
                      controlId="formBasicText"
                      style={{ background: "white" }}
                    >
                      <Form.Label style={{ background: "white" }}>
                        Cliente
                      </Form.Label>
                      <Form.Control type="text" placeholder="Cliente" />
                    </Form.Group>

                    <Form.Group
                      controlId="formBasicText"
                      style={{ background: "white" }}
                    >
                      <Form.Label style={{ background: "white" }}>
                        RUC
                      </Form.Label>
                      <Form.Control type="text" placeholder="Ruc" />
                    </Form.Group>

                    <Form.Group
                      controlId="formBasicText"
                      style={{ background: "white" }}
                    >
                      <Form.Label style={{ background: "white" }}>
                        Telefono
                      </Form.Label>
                      <Form.Control type="number" placeholder="Telefono" />
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
                        Direccion de Fiscal:
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Direccion de Fiscal"
                      />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label style={{ background: "white" }}>
                        Vendedor:
                      </Form.Label>
                      <Form.Select aria-label="Default select example">
                        <option>Seleccione Vendedor</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group
                      controlId="formBasicText"
                      style={{ background: "white" }}
                    >
                      <Form.Label style={{ background: "white" }}>
                        Codigo:
                      </Form.Label>
                      <Form.Control type="text" placeholder="Codigo" />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label style={{ background: "white" }}>
                        Departamento:
                      </Form.Label>
                      <Form.Select aria-label="Default select example">
                        <option>Selec Departamento</option>
                        <option value="1">Lima</option>
                        <option value="2">Trujillo</option>
                        <option value="3">Arequipa</option>
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
                        <option>Seleccione una Provincia</option>
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
                        <option>Seleccione un Distrito</option>
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
