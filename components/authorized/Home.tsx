import { Layout } from "../Layout";
import { AuthorizedContainer } from "./Containers";
import Link from "next/link";

export const Home = () => (
  <AuthorizedContainer>
    <Layout>
      <h1>Home!</h1>
      <div>
        <Link href="/count">Count</Link>
      </div>
      <div>
        <Link href="/data_fetch">Data Fetch</Link>
      </div>
    </Layout>
  </AuthorizedContainer>
);
