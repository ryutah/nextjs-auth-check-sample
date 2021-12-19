import { createContext, Dispatch } from "react";
import { GlobalAction, GlobalState } from "./GlobalReducer";

type State = {
  state: GlobalState;
  dispatch: Dispatch<GlobalAction>;
};

export const GlobalContext = createContext<State>({} as State);
