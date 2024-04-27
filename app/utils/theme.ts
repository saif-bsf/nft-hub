"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#ff00ea",
    },
    error: {
      main: "#ff0000",
    },
    background: {
      default: "#000000",
    },
  },
});

export default theme;
