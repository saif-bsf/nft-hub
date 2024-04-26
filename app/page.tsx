import { Button, Container } from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import "./globals.css";

export default function Home() {
  return (
    <Container maxWidth="xl" className="bg-white">
      <Header />
      <Body />
      <Footer />
    </Container>
  );
}
