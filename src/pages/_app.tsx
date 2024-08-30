import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ModalProvider } from "../components/ModalContext";


import React, { useEffect } from "react";

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.body.className =
      pageProps.overflow !== "hidden" ? "overflow" : "overflow-hidden";
  });
  return (

    <ModalProvider>
      <Component {...pageProps} />
    </ModalProvider>

  );
}
