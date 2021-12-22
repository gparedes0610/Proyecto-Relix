import React from "react";
import LogoRelix from "../assets/relixjpg 1.svg";
import login from "../assets/login.svg";
import { Form, Button } from "react-bootstrap";
function LoginView() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6" style={{ background: "white" }}>
            <img src={LogoRelix} alt="" className="mt-2 mb-4" />
            <h3 style={{ background: "white" }}>Iniciar Sesion</h3>
            <p style={{ background: "white" }}>
              Inicia Sesion para continuar en la aplicacion
            </p>
            <Form style={{ background: "white" }}>
              <Form.Group
                className="mb-3"
                controlId="formBasicEmail"
                style={{ background: "white" }}
              >
                <Form.Label style={{ background: "white" }}>Correo:</Form.Label>
                <Form.Control type="email" placeholder="Ingrese su Correo" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="formBasicEmail"
                style={{ background: "white" }}
              >
                <Form.Label style={{ background: "white" }}>
                  Password:
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Ingrese su password"
                />
              </Form.Group>
              <Button
                variant="info w-100 mt-2 text-white"
                style={{
                  background:
                    "linear-gradient(180deg, #1478A3 0%, rgba(37, 182, 244, 0.51) 100%)",
                  border: "none",
                }}
              >
                Ingresar
              </Button>
            </Form>
          </div>
          <div className="col-12 col-md-6">
            <img src={login} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginView;
