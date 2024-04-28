import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Box, Container, ThemeProvider } from "@mui/material";
import theme from "@/app/utils/theme";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NFTHub",
  description: "NFT Collections",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // useAOS();
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <Box className="bg-gradient-to-br from-backgroudGradient via-white to-transparent">
            <Container maxWidth="xl">
              <Header />
              {children}
              <Footer />
            </Container>
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
