import { useEffect } from "react";
import { Layout } from "../Layout";
import { AuthorizedContainer } from "./Containers";

export type DataFetchProps = {
  name: string;
};

export const DataFetch = () => {
  useEffect(() => {
    console.log("ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ");
  });

  return (
    <AuthorizedContainer>
      <Layout>
        <h1>DataFetch</h1>
      </Layout>
    </AuthorizedContainer>
  );
};
