import { createContext } from "react";

//crear variable context
export const AuthContext = createContext();

//creas en context

export const AuthContextProvider = (props) => {
  return (
    <AuthContextProvider.Provider value={{}}>
      {props.children}
    </AuthContextProvider.Provider>
  );
};
