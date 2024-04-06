import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
  return (
    <Html lang="en">
      <Head title="Jacob Reed">
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="description" content="Jacob Reed's personal website" />
        <meta property="og:title" content="Jacob Reed" key="title" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
