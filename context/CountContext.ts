import { createContext, Dispatch } from "react";
import { CountAction, CountState } from "./CountReducer";

type State = {
  state: CountState;
  dispatch: Dispatch<CountAction>;
};

export const CountContext = createContext<State>({} as State);
