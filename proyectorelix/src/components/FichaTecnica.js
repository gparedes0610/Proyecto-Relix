import React from "react";
import LogoRelix from "../assets/relixjpg1.svg";
import { Form, Button } from "react-bootstrap";
function FichaTecnica() {
  return (
    <div>
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div
              className="col-12 col-md-6"
              style={{
                background: "white",
                boxShadow: "0px 4px 25px rgba(0, 0, 0, 0.15)",
                borderRadius: "10px",
              }}
            >
              <div
                style={{
                  background: "white",
                  height: "100%",
                }}
              >
                <div style={{ background: "white" }}>
                  <img src={LogoRelix} alt="" className="mt-2 mb-2" />
                  <h4
                    style={{ background: "white" }}
                    className="text-uppercase"
                  >
                    Ficha Tecnica
                  </h4>
                </div>

                <div>
                  <Form style={{ background: "white" }} className="pb-3 ">
                    <div style={{ background: "white" }}>
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
                          Ubicacion:
                        </Form.Label>
                        <Form.Control type="text" placeholder="Ubicacion" />
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
                          Monto USD inc IGV:
                        </Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="Ingrese monto"
                        />
                      </Form.Group>

                      <Form.Group
                        controlId="formBasicText"
                        style={{ background: "white" }}
                      >
                        <Form.Label style={{ background: "white" }}>
                          Etapa Actual:
                        </Form.Label>
                        <Form.Control type="text" placeholder="Etapa actual" />
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
                          Area:
                        </Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="Ingrese Area m2"
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
                    </div>

                    <Form.Group
                      controlId="formBasicText"
                      style={{ background: "white" }}
                    >
                      <Form.Label style={{ background: "white" }}>
                        Tipo de Proyecto:
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={2}
                        placeholder="Tipo de proyecto"
                      />
                    </Form.Group>

                    <div
                      className="d-flex justify-content-between"
                      style={{ background: "white" }}
                    >
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

                      <Form.Group
                        controlId="formBasicText"
                        style={{ background: "white" }}
                      >
                        <Form.Label style={{ background: "white" }}>
                          Modalidad:
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Ingrese modalidad"
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
                          Inicio proyectado:
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Ingrese inicio"
                        />
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
                    </div>

                    <Form.Group
                      controlId="formBasicText"
                      style={{ background: "white" }}
                    >
                      <Form.Label style={{ background: "white" }}>
                        Forma de pago:
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={2}
                        placeholder="Forma de pago...."
                      />
                    </Form.Group>

                    <Form.Group
                      controlId="formBasicText"
                      style={{ background: "white" }}
                    >
                      <Form.Label style={{ background: "white" }}>
                        Proximo Hito:
                      </Form.Label>
                      <Form.Control type="text" placeholder="Proximo hito" />
                    </Form.Group>

                    <Button
                      variant="info w-25 mt-2 text-white"
                      type="submit"
                      style={{
                        background:
                          "linear-gradient(180deg, #1478A3 0%, rgba(37, 182, 244, 0.51) 100%)",
                        border: "none",
                      }}
                    >
                      Guardar
                    </Button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FichaTecnica;
