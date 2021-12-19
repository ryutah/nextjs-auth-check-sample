import { useReducer } from "react";
import { BaseProps } from "../types/BaseProps";
import { CountContext } from "./CountContext";
import { countInitialState, countReducer } from "./CountReducer";

export const CountProvider = ({ children }: BaseProps) => {
  const [state, dispatch] = useReducer(countReducer, countInitialState);

  return (
    <CountContext.Provider value={{ state, dispatch }}>
      {children}
    </CountContext.Provider>
  );
};
