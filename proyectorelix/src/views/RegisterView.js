import React, { useEffect, useState } from "react";
import LogoRelix from "../assets/relixjpg 1.svg";
import register from "../assets/register.svg";
import { obtenerRoles } from "../services/rolesService";
import { crearUsuarios, obtenerUsuarios } from "../services/usuarioService";
import { Form, Button } from "react-bootstrap";

function RegisterView() {
  const [roles, setRoles] = useState([]);

  const [registrarUsuario, setregistrarUsuario] = useState({
    nombreUsuario: "",
    apellidoUsuario: "",
    correoUsuario: "",
    passwordUsuario: "m",
    idRol: "",
  });

  const [usuarios, setUsuarios] = useState([]);

  const actualizarInput = (e) => {
    setregistrarUsuario({
      ...registrarUsuario,
      [e.target.name]: e.target.value,
    });
  };

  const manejarSubmit = async (e) => {
    e.preventDefault();
    console.log("se registro algo");
    console.log(registrarUsuario);

    try {
      await crearUsuarios({ ...registrarUsuario });
    } catch (error) {
      console.log(error);
    }
  };

  const getData = async () => {
    try {
      const usuariosObtenidos = await obtenerUsuarios();
      setUsuarios(usuariosObtenidos);
      const rolesObtenidos = await obtenerRoles();
      setRoles(rolesObtenidos);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  //console.log("esta es la data cargada de usuarios", usuarios);
  //console.log("esta es la data cargada de roles", roles);

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
                  <h3
                    style={{ background: "white" }}
                    className="text-uppercase"
                  >
                    Registrar
                  </h3>
                </div>

                <div>
                  <Form
                    style={{ background: "white" }}
                    className="pb-5"
                    onSubmit={(e) => manejarSubmit(e)}
                  >
                    <Form.Group
                      className="mb-3"
                      controlId="formBasicText"
                      style={{ background: "white" }}
                    >
                      <Form.Label style={{ background: "white" }}>
                        Nombre:
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Ingrese su Nombre"
                        name="nombreUsuario"
                        onChange={(e) => actualizarInput(e)}
                      />
                    </Form.Group>

                    <Form.Group
                      className="mb-3"
                      controlId="formBasicText"
                      style={{ background: "white" }}
                    >
                      <Form.Label style={{ background: "white" }}>
                        Apellido:
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Ingrese su Apellido"
                        name="apellidoUsuario"
                        onChange={(e) => actualizarInput(e)}
                      />
                    </Form.Group>

                    <Form.Group
                      className="mb-3"
                      controlId="formBasicEmail"
                      style={{ background: "white" }}
                    >
                      <Form.Label style={{ background: "white" }}>
                        Correo:
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Ingrese su Correo"
                        name="correoUsuario"
                        onChange={(e) => actualizarInput(e)}
                      />
                    </Form.Group>

                    {/*  <Form.Group
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
                        name="passwordUsuario"
                        onChange={(e) => actualizarInput(e)}
                      />
                    </Form.Group> */}

                    <Form.Group
                      controlId="formGridState"
                      style={{ background: "white" }}
                    >
                      <Form.Label style={{ background: "white" }}>
                        Rol
                      </Form.Label>
                      <Form.Select
                        defaultValue="Seleccione"
                        name="idRol"
                        onChange={(e) => {
                          actualizarInput(e);
                        }}
                      >
                        <option>Seleccione</option>
                        {roles.map((rol, i) => (
                          <option key={i} value={rol.idRol}>
                            {rol.nombreRol}
                          </option>
                        ))}
                      </Form.Select>
                    </Form.Group>

                    {/*  <Form.Group
                      className="mb-3"
                      controlId="formBasicText"
                      style={{ background: "white" }}
                    >
                      <Form.Label style={{ background: "white" }}>
                        Rol:
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Ingrese su Apellido"
                        name="idRol"
                        onChange={(e) => actualizarInput(e)}
                      />
                    </Form.Group> */}

                    <Button
                      variant="info w-100 mt-4 text-white"
                      type="submit"
                      style={{
                        background:
                          "linear-gradient(180deg, #1478A3 0%, rgba(37, 182, 244, 0.51) 100%)",
                        border: "none",
                      }}
                    >
                      Registrar
                    </Button>
                  </Form>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6 mx-0 px-0 ">
              <img
                src={register}
                alt=""
                style={{
                  background:
                    "linear-gradient(180deg, #1478A3 0%, rgba(37, 182, 244, 0.51) 100%)",
                  boxShadow: "0px 4px 25px rgba(0, 0, 0, 0.15)",
                  width: "100%",
                  height: "100%",
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

export default RegisterView;
