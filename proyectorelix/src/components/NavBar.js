import React, { useState } from "react";
import LogoRelix from "../assets/relixjpg 1.svg";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Offcanvas,
  Button,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { TokenContext } from "../context/tokenContext";
import { useContext } from "react";
function NavBar() {
  const navigate = useNavigate();

  /*   const { usuario, limpiarSesion } = useContext(TokenContext);
  console.log("estoy en navbar y este es el usuario", usuario);
  console.log(
    "estoy en navbar y este es el nombre usuaro",
    usuario[0].nombreUsuario
  ); */

  /*  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true); */

  // <FaBars className="mx-2" />
  /*   const cerrarSesion = () => {
    // console.log("cerre sesion ctmre");
    limpiarSesion();
    navigate("/");
  }; */
  return (
    <>
      <Navbar bg="white" expand="lg">
        <Container fluid style={{ background: "white" }}>
          <Navbar.Brand href="#" style={{ background: "white" }}>
            <img
              src={LogoRelix}
              alt="relix"
              className="img-fluid"
              style={{ width: "200px" }}
            />
          </Navbar.Brand>
          <span
            className="text-uppercase h6"
            style={{ color: "#001737", background: "white" }}
          >
            DashBoard {">"}{" "}
            <span
              className="text-uppercase h6"
              style={{ color: "#4253FF", background: "white" }}
            >
              {/*    {usuario[0].idRol === "1" && "Bienvenido Administrador"}
              {usuario[0].idRol === "2" && "Bienvenido Gerente General"}
              {usuario[0].idRol === "3" && "Presupuesto Blue Gold"}
              {usuario[0].idRol === "4" && "Presupuesto Blue Gold"} */}
            </span>
          </span>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse
            id="basic-navbar-nav"
            style={{ background: "white" }}
          >
            <Nav className="ms-auto" style={{ background: "white" }} bg="white">
              <NavDropdown
                title={
                  <div className="d-inline" style={{ background: "white" }}>
                    <span style={{ background: "white" }}>
                      {/*    {`Bienvenido ${usuario[0].nombreUsuario}`} */}
                    </span>
                  </div>
                }
                id="basic-nav-dropdown"
                className="bg-white pe-5"
                bg="white"
                style={{ background: "white !important" }}
              >
                {/* {usuario[0].idRol === "1" ? (
                  <div>
                    <NavDropdown.Item>Control de Usuarios</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => cerrarSesion()}>
                      Cerrar Sesion
                    </NavDropdown.Item>
                  </div>
                ) : usuario[0].idRol === "2" ? (
                  <div>
                    {" "}
                    <NavDropdown.Item onClick={() => cerrarSesion()}>
                      Cerrar Sesion
                    </NavDropdown.Item>
                  </div>
                ) : usuario[0].idRol === "3" ? (
                  <div>
                    <NavDropdown.Item>Importado</NavDropdown.Item>
                    <NavDropdown.Item>Tuberias PVC</NavDropdown.Item>
                    <NavDropdown.Item>
                      Materiales y equipos nacionales
                    </NavDropdown.Item>
                    <NavDropdown.Item>Mesa Fertilizacion</NavDropdown.Item>
                    <NavDropdown.Item>Accesorios de conexion</NavDropdown.Item>
                    <NavDropdown.Item>Bombas y tableros</NavDropdown.Item>
                    <NavDropdown.Item>Item 37 Accesorios PVC</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => cerrarSesion()}>
                      Cerrar Sesion
                    </NavDropdown.Item>
                  </div>
                ) : (
                  <div>
                    <NavDropdown.Item onClick={() => cerrarSesion()}>
                      Reporte 1
                    </NavDropdown.Item>{" "}
                    <NavDropdown.Item onClick={() => cerrarSesion()}>
                      Reporte 2
                    </NavDropdown.Item>{" "}
                    <NavDropdown.Item onClick={() => cerrarSesion()}>
                      Reporte 3
                    </NavDropdown.Item>{" "}
                    <NavDropdown.Item onClick={() => cerrarSesion()}>
                      Reporte 4
                    </NavDropdown.Item>{" "}
                    <NavDropdown.Item onClick={() => cerrarSesion()}>
                      Cerrar Sesion
                    </NavDropdown.Item>{" "}
                  </div>
                )} */}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/*  <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas> */}
    </>
  );
}

export default NavBar;
