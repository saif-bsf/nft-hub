import { Box } from "@mui/material";
import React from "react";
import MainPoster from "./components/MainPoster";
import Carousel from "./components/carousel/Carousel";
import Features from "./components/features/Features";
import Stats from "./components/stats/Stats";
import Product5050 from "./components/product5050/Product5050";
import SubscribeBox from "./components/SubscribeBox";
import Roadmap from "./components/roadmap/Roadmap";
import TeamProfile from "./components/team-profile/TeamProfile";
import QuesAccordion from "./components/ques-accordion/QuesAccordion";
import Banner from "./components/banner/Banner";
import Divider from "./basic-components/Divider";

const Page = () => {
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
      <Banner />
    </Box>
  );
};

export default Page;
