import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import data from "@/app/data/data.json";

const Banner = () => {
  const { banner } = data;
  const { title, bannerImage, info } = banner;
  return (
    <Box className="relative w-full" style={{ height: "50vh" }}>
      <Image
        src={bannerImage}
        layout="fill"
        objectFit="cover"
        alt="banner image"
        quality={100}
        className="z-0"
      />
      <Box className="absolute top-0 right-0 bottom-0 left-0 flex flex-col justify-center items-center gap-4 z-10">
        <Typography className="font-bold text-6xl text-center">
          {title}
        </Typography>
        <Typography className=" text-md text-center">{info}</Typography>
        <Button
          variant="contained"
          className="bg-primary max-w-44 rounded-3xl px-4"
        >
          Get Started
        </Button>
      </Box>
    </Box>
  );
};

export default Banner;