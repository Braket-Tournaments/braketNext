import React from "react";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>{/* <link rel="icon" href="/favicon.ico" /> */}</Head>
      <body className="font-HinaMincho m-0 p-0 border-0 box-border">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
