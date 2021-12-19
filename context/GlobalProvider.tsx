import { useReducer } from "react";
import { BaseProps } from "../types/BaseProps";
import { GlobalContext } from "./GlobalContext";
import { globalInitialState, globalReducer } from "./GlobalReducer";

export const GlobalProvider = ({ children }: BaseProps) => {
  const [state, dispatch] = useReducer(globalReducer, globalInitialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
