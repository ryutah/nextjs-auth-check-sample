import { FakeAuthenticator } from "../service/auth";
import { BaseProps } from "../types/BaseProps";
import { ServiceContext } from "./ServiceContext";

const initialState = {
  auth: new FakeAuthenticator(),
};

export const ServiceProvider = ({ children }: BaseProps) => {
  return (
    <ServiceContext.Provider value={initialState}>
      {children}
    </ServiceContext.Provider>
  );
};
