import { createContext, useEffect, useState } from "react";

export const TokenContext = createContext();

export const TokenContextProvider = (props) => {
  // const [rol, setRol] = useState("");
  const [usuario, guardarUsuario] = useState([]);
  const [ingeniero, setIngeniero] = useState({
    token: "",
    idRol: "",
    nombreUsuario: "",
  });
  console.log("soy un usuario y estoy en tokencontext", usuario);
  const guardarSesion = (sesion) => {
    guardarUsuario([...usuario, sesion]);
  };

  /*  useEffect(() => {
    localStorage.setItem("rol", JSON.stringify(rol));
  }, [rol]); */

  const limpiarSesion = () => {
    localStorage.clear();
    //setRol("");
    guardarUsuario([]);
  };

  useEffect(() => {
    const usuariosStorage = JSON.parse(localStorage.getItem("appUsuarios"));
    if (usuariosStorage.length > 0) {
      guardarUsuario(usuariosStorage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("appUsuarios", JSON.stringify(usuario));
  }, [usuario]);

  return (
    <TokenContext.Provider
      value={{ limpiarSesion, guardarSesion, usuario, ingeniero, setIngeniero }}
    >
      {props.children}
    </TokenContext.Provider>
  );
};
