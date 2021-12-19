import { useReducer } from "react";
import { BaseProps } from "../types/BaseProps";
import { SessionContext } from "./SessionContext";
import { sessionInitialState, sessionReducer } from "./SessionReducer";

export const SessionProvider = ({ children }: BaseProps) => {
  const [state, dispatch] = useReducer(sessionReducer, sessionInitialState);

  return (
    <SessionContext.Provider value={{ state, dispatch }}>
      {children}
    </SessionContext.Provider>
  );
};
