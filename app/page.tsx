"use client";
import { Button, Container } from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import "./globals.css";
import theme from "./utils/theme";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-backgroudGradient via-white to-transparent min-h-screen flex justify-center items-center">
      <Container maxWidth="xl">
        <Header />
        <Body />
        <Footer />
      </Container>
    </div>
  );
}
