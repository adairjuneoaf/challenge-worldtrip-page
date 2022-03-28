// Main Dependencies
import React from "react";
import { NextPage } from "next";
import { AppProps } from "next/app";

// Chakra UI Dependencies
import { ChakraProvider } from "@chakra-ui/react";

// Style Dependencies
import { theme } from "../styles/theme";
import "../styles/components/SlideContinents.css";
import HeaderComponent from "../components/Header";

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <HeaderComponent />
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;
