import Head from "next/head";
import { MainLayout } from "../components/MainLayout";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Posts({ posts }) {
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   async function load() {
  //     const response = await fetch("http://localhost:4200/posts");
  //     const json = await response.json();
  //     setPosts(json);
  //   }

  //   load();
  // }, []);

  return (
    <MainLayout>
      <Head>
        <title>Posts Page | NextJS Minin</title>
      </Head>
      <h1>Posts Page</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`/post/${post.id}`}><a>{post.title}</a></Link>
          </li>
        ))}
      </ul>
    </MainLayout>
  );
}

Posts.getInitialProps = async () => {
  const response = await fetch("http://localhost:4200/posts");
  const posts = await response.json();

  return {
    posts
  }
}