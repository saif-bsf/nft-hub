import { Box } from "@mui/material";
import React from "react";
import MainPoster from "./MainPoster";
import Divider from "./basic-components/Divider";
import Carousel from "./carousel/Carousel";
import Features from "./features/Features";
import Stats from "./stats/Stats";
import Product5050 from "./product5050/Product5050";
import SubscribeBox from "./SubscribeBox";
import Roadmap from "./roadmap/Roadmap";
import TeamProfile from "./team-profile/TeamProfile";
import QuesAccordion from "./ques-accordion/QuesAccordion";

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
      <Roadmap />
      <Divider />
      <TeamProfile />
      <Divider />
      <QuesAccordion />
      <Divider />
    </Box>
  );
};

export default Body;
