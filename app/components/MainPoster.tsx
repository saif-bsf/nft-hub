"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import data from "@/app/data/data.json";
import GradientButton from "../basic-components/GradientButton";

const MainPoster = () => {
  const background = useRef(null);
  const introImage = useRef(null);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: true,
        start: "top",
        end: "+=500px",
      },
    });
    timeline
      .from(background.current, { clipPath: `inset(15%)` })
      .to(introImage.current, { height: "200px" }, 0);
  }, []);

  const { mainPoster } = data;
  const { title, description } = mainPoster;
  return (
    <Box className="py-10 flex flex-1 w-full flex-col md:flex-row">
      <Box
        data-scroll
        data-scroll-speed="0.1"
        className="flex flex-1 flex-col justify-center main-poster-text"
      >
        <Typography className="font-bold text-5xl">{title}</Typography>
        <Typography className="my-5 text-textColor">{description}</Typography>
        <GradientButton btnText="View in OPENSEA" />
        <Box className="flex my-8">
          <Image
            src="/user-avatars.png"
            width={100}
            height={100}
            alt="image not found"
          />
          <Box>
            <Typography className="font-bold text-2xl ml-4">47k+</Typography>
            <Typography className="ml-4 text-textColor">
              Community members
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        data-scroll
        data-scroll-speed="0.9"
        className="flex flex-1 main-poster-image"
      >
        <Image
          className="flex flex-1"
          src="/main-poster.png"
          width={500}
          height={300}
          alt="image not found"
        />
      </Box>
    </Box>
  );
};

export default MainPoster;
