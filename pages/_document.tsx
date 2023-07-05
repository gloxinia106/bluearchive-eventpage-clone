import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <div id="modal" style={{ position: "absolute", zIndex: 300 }}></div>
        <div id="popup" style={{ position: "absolute", zIndex: 300 }}></div>
        <NextScript />
      </body>
    </Html>
  );
}
