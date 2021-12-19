import { useContext } from "react";
import { Load } from "../components/Load";
import { GlobalContext } from "../context/GlobalContext";
import { BaseProps } from "../types/BaseProps";

export const BaseContainer = ({ children }: BaseProps) => {
  const { state } = useContext(GlobalContext);

  if (state.isFirstVisit) {
    return <Load />;
  }
  return <>{children}</>;
};
