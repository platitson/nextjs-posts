import Router from "next/router";
import { MainLayout } from "../../components/MainLayout";

export default function About({ title }) {
  const btnClickHandler = () => {
    Router.push("/");
  };

  return (
    <MainLayout>
      <h1>{title}</h1>
      <button onClick={btnClickHandler}>Go back to Home</button>
      <button onClick={() => Router.push("/posts")}>Go to Posts</button>
    </MainLayout>
  );
}

About.getInitialProps = async () => {
  const response = await fetch('http://localhost:4200/about');
  const data = await response.json();

  return {
    title: data.title
  }
}