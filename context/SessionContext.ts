import { createContext, Dispatch } from "react";
import { SessionAction, SessionState } from "./SessionReducer";

type State = {
  state: SessionState;
  dispatch: Dispatch<SessionAction>;
};

export const SessionContext = createContext<State>({} as State);
