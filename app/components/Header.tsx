import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import data from "@/app/data/data.json";
import { Link } from "@mui/material";

export default function Header() {
  const { header } = data;
  const { title, navLinks } = header;

  return (
    <Box className="py-8 flex flex-1 justify-between">
      <Typography variant="h6" component="div" className="text-black">
        {title}
      </Typography>
      <Box className="flex gap-5">
        {navLinks.map((link) => (
          <Link key={link} className="text-black no-underline">
            {link}
          </Link>
        ))}
      </Box>
      <Box></Box>
    </Box>
  );
}
