import React, { useContext, useEffect } from "react";
import { Table } from "react-bootstrap";

import authContext from "../../context/autenticacion/authContext";
function TablaUsuarios({ setVerUsuarios, verUsuarios }) {
  const autentificaciones = useContext(authContext);
  const { todosLosUsuarios, obtenerTodosLosUsuarios, actualizarUsuario } =
    autentificaciones;
  useEffect(() => {
    obtenerTodosLosUsuarios();
  }, []);
  //console.log("hola usuarios", todosLosUsuarios);
  const verRegistrar = () => {
    setVerUsuarios(!verUsuarios);
  };

  const cambiarEstado = (usuario) => {
    console.log("diste click en cambiar estado");
    console.log(usuario);
    if (usuario.estadoUsuario == "ACTIVO") {
      usuario.estadoUsuario = "INACTIVO";
      usuario.idEstadousuario = 0;
      //console.log("se tendria q cambiar a usuario inactivo", usuario);
    } else {
      usuario.idEstadousuario = 1;
      usuario.estadoUsuario = "ACTIVO";
      //console.log("entro al else", usuario);
    }
    console.log("fuera de la condicional", usuario);
    actualizarUsuario(usuario);
  };

  return (
    <div className="container">
      <Table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Correo</th>
            <th>Rol</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {todosLosUsuarios.map((usuario, i) => (
            <tr key={i}>
              <td>{usuario.nombreUsuario}</td>
              <td>{usuario.apellidoUsuario}</td>
              <td>{usuario.correoUsuario}</td>
              <td>{usuario.nombreRol}</td>
              <td>{usuario.estadoUsuario}</td>
              <td>
                {usuario.estadoUsuario == "ACTIVO" ? (
                  <button
                    className="btn btn-danger text-uppercase"
                    onClick={() => cambiarEstado(usuario)}
                  >
                    Inhabilitar
                  </button>
                ) : (
                  <button
                    className="btn btn-success text-uppercase"
                    onClick={() => cambiarEstado(usuario)}
                  >
                    Habilitar
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <button className="btn btn-warning" onClick={() => verRegistrar()}>
        Retroceder
      </button>
    </div>
  );
}

export default TablaUsuarios;
