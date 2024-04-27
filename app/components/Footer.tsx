import { Box, Typography } from "@mui/material";
import React from "react";
import data from "@/app/data/data.json";
import Link from "next/link";

const Footer = () => {
  const { footer } = data;
  const { title, quickLinks, communityLinks, copyright, description } = footer;
  return (
    <Box className="border-t py-8 grid grid-cols-4">
      <Box className="col-span-4 md:col-span-2 flex flex-1 flex-col justify-between">
        <Typography variant="h6" component="div" className="text-black">
          {title}
        </Typography>
        <Typography className="text-textColor">{description}</Typography>
        <Typography className="text-textColor">{copyright}</Typography>
      </Box>
      <Box className="hidden md:block col-span-1">
        <Typography className="font-bold my-2">{quickLinks.title}</Typography>
        <Box className="flex flex-col gap-2">
          {quickLinks.links.map((link) => (
            <Link
              href={"#" + link}
              className="no-underline cursor-pointer text-textColor"
              key={link}
            >
              {link}
            </Link>
          ))}
        </Box>
      </Box>
      <Box className="hidden md:block col-span-1">
        <Typography className="font-bold my-2">
          {communityLinks.title}
        </Typography>
        <Box className="flex flex-col gap-2">
          {communityLinks.links.map((link) => (
            <Link href="#" className="no-underline text-textColor" key={link}>
              {link}
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
