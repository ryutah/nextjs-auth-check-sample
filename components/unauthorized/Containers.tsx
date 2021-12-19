import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { ServiceContext } from "../../context/ServiceContext";
import { SessionContext } from "../../context/SessionContext";
import { BaseProps } from "../../types/BaseProps";
import { BaseContainer } from "../BaseContainer";

export const UnauthorizedContainer = ({ children }: BaseProps) => {
  const global = useContext(GlobalContext);
  const session = useContext(SessionContext);

  const { auth } = useContext(ServiceContext);
  const router = useRouter();
  useEffect(() => {
    (async () => {
      const isAuthorized = await auth.verify({
        session: session.dispatch,
        global: global.dispatch,
      });
      if (isAuthorized) {
        router.push("/");
      }
    })();
  }, [session.state]);

  if (!session.state.isAuthorized) {
    return <BaseContainer>{children}</BaseContainer>;
  }
  return <BaseContainer />;
};
