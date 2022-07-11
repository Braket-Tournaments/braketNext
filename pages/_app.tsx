import "../styles/globals.css";
import { scale } from "../constants";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Braket</title>
        <style>
          {`
            :root {
              --font-size: ${scale}px;
              font-size: var(--font-size);
              --navbar-height: 6.5rem;
              --home-carousel-width: 85rem;
              --home-carousel-height: calc(var(--home-carousel-width) / (16 / 9));
            }
          `}
        </style>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
