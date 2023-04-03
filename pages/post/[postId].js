import { useRouter } from "next/router";
import { MainLayout } from "../../components/MainLayout";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Post({ post: serverPost }) {
  const router = useRouter();

  const [post, setPost] = useState(serverPost);

  useEffect(() => {
    async function load() {
      const response = await fetch(`http://localhost:4200/posts/${router.query.postId}`);
      const data = await response.json();
      setPost(data);
    }

    if (!post) {
      load();
    }
  }, [post, router.query.postId]);

  if (!post) {
    return <MainLayout>
      <p>Loading ...</p>
    </MainLayout>
  }

  return (
    <MainLayout>
      <h1>Post {router.query.postId} - {post.title}</h1>
      <hr />
      <p>{post.body}</p>
      <Link href={'/posts'}>Go back to all posts</Link>
    </MainLayout>
  );
}

Post.getInitialProps = async (ctx) => {
  if (!ctx.req) {
    return { post: null }
  }
  const response = await fetch(`http://localhost:4200/posts/${ctx.query.postId}`);
  const post = await response.json();

  return {
    post
  }
}

// For server only:

// export async function getServerSideProps({ query }) {
//   const response = await fetch(`http://localhost:4200/posts/${query.postId}`);
//   const post = await response.json();

//   return { props: { post } }
// }