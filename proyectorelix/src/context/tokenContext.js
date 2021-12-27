import { createContext, useEffect, useState } from "react";

export const TokenContext = createContext();

export const TokenContextProvider = (props) => {
  const [rol, setRol] = useState("1");

  const guardarRol = () => {
    localStorage.setItem("rol", JSON.stringify(rol));
  };

  /*  useEffect(() => {
    localStorage.setItem("rol", JSON.stringify(rol));
  }, [rol]); */

  const limpiarRol = () => {
    setRol("");
  };
  return (
    <TokenContext.Provider value={{ rol, setRol, limpiarRol, guardarRol }}>
      {props.children}
    </TokenContext.Provider>
  );
};
