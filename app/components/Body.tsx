"use client"
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
import { useEffect } from 'react';
import QuesAccordion from "./ques-accordion/QuesAccordion";
import Banner from "./banner/Banner";

const Body = () => {

  useEffect( () => {(
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
      }
    )()}, [])

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

export default Body;
