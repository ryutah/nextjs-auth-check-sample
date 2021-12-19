import { Layout } from "../Layout";
import { UnauthorizedContainer } from "./Containers";

export const Signin = () => {
  return (
    <UnauthorizedContainer>
      <Layout>
        <h1>Sign in</h1>
        <button>Signin</button>
      </Layout>
    </UnauthorizedContainer>
  );
};
