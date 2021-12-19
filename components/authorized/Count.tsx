import { NextPage } from "next";
import { useContext } from "react";
import { CountContext } from "../../context/CountContext";
import { CountActionName } from "../../context/CountReducer";
import { AuthorizedContainer } from "./Containers";
import { Layout } from "../Layout";

export const Count: NextPage = () => {
  const { state, dispatch } = useContext(CountContext);

  return (
    <AuthorizedContainer>
      <Layout>
        <h1>Count</h1>
        <p>{state.count}</p>
        <button onClick={() => dispatch({ type: CountActionName.INCREMENT })}>
          increment
        </button>
        <button onClick={() => dispatch({ type: CountActionName.DECREMENT })}>
          decrement
        </button>
      </Layout>
    </AuthorizedContainer>
  );
};
