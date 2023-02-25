import Link from "next/link";
import Head from "next/head";

export function MainLayout({ children, title = "Next App" }) {
  return (
    <>
      <Head>
        <title>{title} | NextJS</title>
        <meta charSet="utf-8" />
        <meta name="keywords" content="next,nextjs,react" />
        <meta name="description" content="here i try all at once for next" />
      </Head>
      <nav>
        <Link href={"/"}>
          <a>Home</a>
        </Link>
        <Link href={"/about"}>
          <a>About</a>
        </Link>
        <Link href={"/posts"}>
          <a>Posts</a>
        </Link>
      </nav>
      <main>{children}</main>
      <style jsx>
        {`
          nav {
            position: fixed;
            height: 60px;
            top: 0;
            left: 0;
            right: 0;
            background: darkblue;
            display: flex;
            justify-content: space-around;
            align-items: center;
          }

          nav a {
            color: white;
            font-size: 20px;
            text-decoration: none;
          }

          main {
            margin-top: 60px;
            padding: 1rem;
          }
        `}
      </style>
    </>
  );
}
