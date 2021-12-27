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
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
//import "./Navbar.css";
function NavBar() {
  /*  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true); */

  // <FaBars className="mx-2" />
  return (
    <>
      <Navbar bg="white" expand="lg">
        <Container style={{ background: "white" }}>
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
              PRESUPUESTO BLUE GOLD-CERRO VERDE
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
                      Bienvenido Jorge (Ingeniero)
                    </span>
                  </div>
                }
                id="basic-nav-dropdown"
                className="bg-white"
                bg="white"
                style={{ background: "white !important" }}
              >
                <NavDropdown.Item href="#action/3.2">
                  Cerrar Sesion
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Importado
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Tuberias PVC
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Materiales y equipos nacionales
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Mesa Fertilizacion
                </NavDropdown.Item>
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
