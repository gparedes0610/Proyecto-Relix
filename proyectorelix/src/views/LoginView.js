import React, { useContext, useEffect, useState } from "react";
import LogoRelix from "../assets/relixjpg 1.svg";
import login from "../assets/login4.svg";
import { Form, Button } from "react-bootstrap";
import { validaSesion } from "../services/usuarioService";
import { TokenContext } from "../context/tokenContext";
import { Link, useNavigate } from "react-router-dom";

function LoginView() {
  const { setRol, guardarSesion } = useContext(TokenContext);

  const navigate = useNavigate();

  const [sesion, setSesion] = useState({
    correo: "",
    clave: "",
  });

  const enviarInput = (e) => {
    setSesion({ ...sesion, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("datos de sesion", sesion);
    //console.log("acepta");
    try {
      const data = await validaSesion({ ...sesion });
      /* console.log(data);
      console.log(data.user);
      console.log(data.Token);
      console.log(data.user.idRol); */
      localStorage.setItem("token", data.Token);
      localStorage.setItem("idRol", data.user.idRol);
      const idRolObtenido = JSON.parse(localStorage.getItem("idRol"));
      console.log(idRolObtenido);
      guardarSesion(data.user);
      setRol(idRolObtenido);
      // setRol(data.user.idRol);
      //guardarRolLs(data.user.idRol);
      if (idRolObtenido === 1) {
        navigate("/administrador");
      } else if (idRolObtenido === 2) {
        navigate("/gerente");
      } else if (idRolObtenido === 3) {
        navigate("/ingeniero");
      } else if (idRolObtenido === 4) {
        navigate("/backoffice");
      }
    } catch (error) {
      console.log(error);
    }
  };

  /* useEffect(() => {
    if (localStorage.getItem("token") != null) {
      navigate("/registrar");
    }
  }, []); */
  //console.log(usuarios);

  return (
    <>
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="row">
            <div
              className="col-12 col-lg-6"
              style={{
                background: "white",
                boxShadow: "0px 4px 25px rgba(0, 0, 0, 0.15)",
              }}
            >
              <div
                style={{
                  background: "white",
                  height: "100%",
                }}
                className="d-flex flex-column "
              >
                <div style={{ background: "white" }}>
                  <img src={LogoRelix} alt="" className="mt-4 mb-4" />
                  <h3 style={{ background: "white" }}>Iniciar Sesion</h3>
                  <p style={{ background: "white" }}>
                    Inicia Sesion para continuar en la aplicacion
                  </p>
                </div>

                <div>
                  <Form
                    style={{ background: "white" }}
                    className="pb-5"
                    onSubmit={handleSubmit}
                  >
                    <Form.Group
                      className="mb-3"
                      controlId="formBasicEmail"
                      style={{ background: "white" }}
                    >
                      <Form.Label style={{ background: "white" }}>
                        Correo:
                      </Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Ingrese su Correo"
                        name="correo"
                        onChange={(e) => enviarInput(e)}
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="formBasicPassword"
                      style={{ background: "white" }}
                    >
                      <Form.Label style={{ background: "white" }}>
                        Password:
                      </Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Ingrese su password"
                        name="clave"
                        onChange={(e) => enviarInput(e)}
                      />
                    </Form.Group>
                    <Button
                      variant="info w-100 mt-2 text-white"
                      style={{
                        background:
                          "linear-gradient(180deg, #1478A3 0%, rgba(37, 182, 244, 0.51) 100%)",
                        border: "none",
                      }}
                      // className="btn btn-success mb-2 w-100"
                      // to={`/registrar`}
                      type="submit"
                    >
                      Ingresar
                    </Button>
                  </Form>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6 mx-0 px-0 ">
              <img
                src={login}
                alt=""
                style={{
                  background:
                    "linear-gradient(180deg, #1478A3 0%, rgba(37, 182, 244, 0.51) 100%)",
                  boxShadow: "0px 4px 25px rgba(0, 0, 0, 0.15)",
                  width: "100%",
                  borderRadius: "0 10px 10px 0",
                }}
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginView;
