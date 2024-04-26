import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Header() {
  const navItems = ["Home", "Collection", "Choose", "About", "Roadmap", "Blog"];
  return (
    <Box>
      <AppBar position="static" className="bg-white">
        <Toolbar>
          <Typography variant="h6" component="div" className="text-black">
            NFTHub
          </Typography>
          <Box className="flex flex-1 justify-center">
            {navItems.map((item) => (
              <Typography key={item} className="text-black mr-5">
                {item}
              </Typography>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
