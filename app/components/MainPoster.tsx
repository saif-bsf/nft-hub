"use client";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import data from "@/app/data/data.json";

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
    <Box
      data-aos="fade-up"
      className="py-10 flex flex-1 w-full flex-col md:flex-row"
    >
      <Box
        data-scroll
        data-scroll-speed="0.1"
        className="flex flex-1 flex-col justify-center main-poster-text"
      >
        <Typography className="font-bold text-5xl">{title}</Typography>
        <Typography className="my-5">{description}</Typography>
        <Button
          variant="contained"
          className="bg-primary max-w-44 rounded-3xl p-2 main-poster-button"
          sx={{
            background: "linear-gradient(45deg, #556cd6, #ff00ea)",
            borderRadius: 3,
            border: 0,
            color: "white",
            height: 48,
            padding: "0 30px",
            boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
          }}
        >
          View in OPENSEA
        </Button>
        <Box className="flex my-8">
          <Image
            src="/user-avatars.png"
            width={100}
            height={100}
            alt="image not found"
          />
          <Box>
            <Typography className="font-bold text-2xl ml-4">47k+</Typography>
            <Typography className="ml-4">Community members</Typography>
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
