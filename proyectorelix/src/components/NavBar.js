import React, { useEffect, useState } from "react";
import LogoRelix from "../assets/relixjpg1.svg";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Offcanvas,
  Button,
} from "react-bootstrap";
//import { Link, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useContext } from "react";
import authContext from "../context/autenticacion/authContext";

function NavBar() {
  /////////////////////////////////
  const autentificaciones = useContext(authContext);
  const { usuario, usuarioAutenticado } = autentificaciones;

  useEffect(() => {
    usuarioAutenticado();
  }, []);

  if (!usuario) {
    return null;
  }

  return (
    <>
      <Navbar
        //bg="white"
        expand="lg"
        className="mb-5"
        //style={{ background: "#51BBFE" }}
      >
        {/* style={{ background: "white" }} */}
        <Container fluid>
          {/*   style={{ background: "white" }} */}
          <Navbar.Brand>
            <img
              src={LogoRelix}
              alt="relix"
              className="img-fluid"
              style={{ width: "200px" }}
            />
          </Navbar.Brand>
          {/*  , background: "white"  */}
          <span className="text-uppercase h6" style={{ color: "#001737" }}>
            DashBoard {">"}{" "}
            <span
              className="text-uppercase h6"
              style={{ color: "#4253FF", background: "white" }}
            >
              Necesita crear una ficha Tecnica
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
                      {`Bienvenido ${usuario.nombreUsuario} (${usuario.nombreRol})`}
                    </span>
                  </div>
                }
                id="basic-nav-dropdown"
                className="bg-white pe-5"
                bg="white"
                style={{ background: "white !important" }}
              >
                <NavDropdown.Item>Cerrar Sesion</NavDropdown.Item>
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
