import { Box } from "@mui/material";
import React from "react";
import MainPoster from "./MainPoster";
import Divider from "./Divider";
import Carousel from "./carousel/Carousel";
import Features from "./features/Features";
import Stats from "./stats/Stats";

const Body = () => {
  return (
    <Box>
      <MainPoster />
      <Divider />
      <Carousel />
      <Divider />
      <Features />
      <Divider />
      <Stats />
      <Divider />
    </Box>
  );
};

export default Body;
