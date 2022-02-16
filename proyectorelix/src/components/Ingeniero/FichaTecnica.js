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
                  <div style={{ background: "white" }}>
                    <div
                      className="d-flex justify-content-between mb-2"
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
                    </div>

                    <div
                      className="d-flex justify-content-between mb-2"
                      style={{ background: "white" }}
                    >
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
                          Cliente:
                        </Form.Label>
                        <Form.Control type="text" placeholder="Cliente" />
                      </Form.Group>

                      <Form.Group
                        controlId="formBasicText"
                        style={{ background: "white" }}
                      >
                        <Form.Label style={{ background: "white" }}>
                          Ruc:
                        </Form.Label>
                        <Form.Control type="text" placeholder="Ruc" />
                      </Form.Group>

                      <Form.Group
                        controlId="formBasicText"
                        style={{ background: "white" }}
                      >
                        <Form.Label style={{ background: "white" }}>
                          Direccion Fiscal:
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Direccion Fiscal"
                        />
                      </Form.Group>
                    </div>

                    <div
                      className="d-flex justify-content-between"
                      style={{ background: "white" }}
                    >
                      <Form.Group
                        controlId="formBasicText"
                        style={{ background: "white" }}
                      >
                        <Form.Label style={{ background: "white" }}>
                          Telefono:
                        </Form.Label>
                        <Form.Control type="text" placeholder="Atencion" />
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

                      <Form.Group
                        controlId="formBasicText"
                        style={{ background: "white" }}
                      >
                        <Form.Label style={{ background: "white" }}>
                          Monto USD inc IGV:
                        </Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="Ingrese monto"
                        />
                      </Form.Group>
                    </div>

                    <div
                      className="d-flex justify-content-between"
                      style={{ background: "white" }}
                    >
                      <Form.Group>
                        <Form.Label style={{ background: "white" }}>
                          Division:
                        </Form.Label>
                        <Form.Select aria-label="Default select example">
                          <option>Seleccione Division</option>
                          <option value="1">Agua</option>
                          <option value="2">Riego</option>
                        </Form.Select>
                      </Form.Group>

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
                        <Form.Control
                          type="text"
                          placeholder="Ingrese cultivo"
                        />
                      </Form.Group>

                      <Form.Group
                        controlId="formBasicText"
                        style={{ background: "white" }}
                      >
                        <Form.Label style={{ background: "white" }}>
                          Duracion(meses):
                        </Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="Ingrese duracion"
                        />
                      </Form.Group>
                    </div>
                  </div>

                  <div
                    className="d-flex justify-content-between"
                    style={{ background: "white" }}
                  >
                    <Form.Group
                      controlId="formBasicText"
                      style={{ background: "white" }}
                    >
                      <Form.Label style={{ background: "white" }}>
                        Inicio proyectado:
                      </Form.Label>
                      <Form.Control type="text" placeholder="Ingrese inicio" />
                    </Form.Group>

                    <Form.Group
                      controlId="formBasicText"
                      style={{ background: "white" }}
                    >
                      <Form.Label style={{ background: "white" }}>
                        Fin Proyectado:
                      </Form.Label>
                      <Form.Control type="text" placeholder="Ingrese fin" />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label style={{ background: "white" }}>
                        Tipo de Facturacion:
                      </Form.Label>
                      <Form.Select aria-label="Default select example">
                        <option>Seleccione Tipo de Facturacion</option>
                        <option value="1">
                          Llave en mano / Valorización por avance
                        </option>
                        <option value="2">
                          Suministro de materiales e instalación
                        </option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group>
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
                    </Form.Group>
                  </div>

                  <div
                    className="d-flex justify-content-between"
                    style={{ background: "white" }}
                  >
                    <Form.Group>
                      <Form.Label style={{ background: "white" }}>
                        Financiamiento:
                      </Form.Label>
                      <Form.Select aria-label="Default select example">
                        <option>Seleccione Financiamiento</option>
                        <option value="1">Si</option>
                        <option value="2">No</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group
                      controlId="formBasicText"
                      style={{ background: "white" }}
                    >
                      <Form.Label style={{ background: "white" }}>
                        Detallar:
                      </Form.Label>
                      <Form.Control type="text" placeholder="Ingrese detalle" />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label style={{ background: "white" }}>
                        Estado:
                      </Form.Label>
                      <Form.Select aria-label="Default select example">
                        <option>Seleccione Tipo de Proyecto</option>
                        <option value="1">Cerrado</option>
                        <option value="2">Preparación</option>
                        <option value="3">Diseño</option>
                        <option value="4">Negociación</option>
                        <option value="5">Perdido</option>
                      </Form.Select>
                    </Form.Group>
                  </div>

                  {/* <Button
                    variant="info w-25 mt-2 text-white"
                    type="submit"
                    style={{
                      background:
                        "linear-gradient(180deg, #1478A3 0%, rgba(37, 182, 244, 0.51) 100%)",
                      border: "none",
                    }}
                  >
                    Guardar
                  </Button> */}

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
