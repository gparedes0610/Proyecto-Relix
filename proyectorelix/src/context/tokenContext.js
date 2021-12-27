import { createContext } from "react";

export const TokenContext = createContext();

export const TokenContextProvider = (props) => {
  return (
    <TokenContextProvider.Provider value={{}}>
      {props.children}
    </TokenContextProvider.Provider>
  );
};
