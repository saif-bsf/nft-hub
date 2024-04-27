import { Box } from "@mui/material";
import React from "react";
import MainPoster from "./MainPoster";
import Divider from "./Divider";
import Carousel from "./carousel/Carousel";
import Features from "./features/Features";
import Stats from "./stats/Stats";
import Product5050 from "./product5050/Product5050";
import SubscribeBox from "./SubscribeBox";

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
      <Product5050 />
      <Divider />
      <SubscribeBox />
      <Divider />
    </Box>
  );
};

export default Body;
