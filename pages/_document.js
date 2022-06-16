import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocment extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <div id="modal-root" />
          <NextScript />
        </body>
      </Html>
    );
  }
}
