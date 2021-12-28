import { createContext, useEffect, useState } from "react";

export const TokenContext = createContext();

export const TokenContextProvider = (props) => {
  const [rol, setRol] = useState("");
  const [usuario, guardarUsuario] = useState([]);

  console.log("soy rol de tokencontext", rol);

  const guardarSesion = (sesion) => {
    guardarUsuario([...usuario, sesion]);
  };
  console.log("soy un usario", usuario);

  /*  useEffect(() => {
    localStorage.setItem("rol", JSON.stringify(rol));
  }, [rol]); */

  const limpiarSesion = () => {
    localStorage.clear();
    setRol("");
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
      value={{ rol, setRol, limpiarSesion, guardarSesion, usuario }}
    >
      {props.children}
    </TokenContext.Provider>
  );
};
