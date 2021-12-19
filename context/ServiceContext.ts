import { createContext } from "react";
import { Authenticator } from "../service/auth";

type Services = {
  auth: Authenticator;
};

export const ServiceContext = createContext<Services>({} as Services);
