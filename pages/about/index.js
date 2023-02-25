import Router from "next/router";
import { MainLayout } from "../../components/MainLayout";

export default function About() {
  const btnClickHandler = () => {
    Router.push("/");
  };

  return (
    <MainLayout>
      <h1>About Page</h1>
      <button onClick={btnClickHandler}>Go back to Home</button>
      <button onClick={() => Router.push("/posts")}>Go to Posts</button>
    </MainLayout>
  );
}
