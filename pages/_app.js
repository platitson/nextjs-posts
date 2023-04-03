import NextNProgress from 'nextjs-progressbar';
import "../styles/main.scss";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress />
      <Component {...pageProps} />
      {/* <style jsx global>{`
        body {
          font-family: "Roboto", sans-serif;
        }
      `}</style> */}
    </>
  );
}
