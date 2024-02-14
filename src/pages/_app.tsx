import React from "react";
import type { AppProps } from "next/app";
import RootLayout from "@/app/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />;
    </RootLayout>
  );
}

export default MyApp;
