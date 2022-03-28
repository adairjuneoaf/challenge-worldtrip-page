import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    white: {
      "50": "#FFFFFF",
      "100": "#F5F8FA",
    },
    gray: {
      "100": "#DADADA",
      "200": "#999999",
    },
    black: {
      "900": "#000000",
    },
    blue: {
      "200": "#47585B",
    },
    yellow: {
      "500": "#FFBA08",
    },
  },
  fonts: {
    body: "Poppins",
    heading: "Poppins",
  },
  styles: {
    global: {
      body: {
        backgroundColor: "white.100",
        color: "blue.200",
      },
    },
  },
});
