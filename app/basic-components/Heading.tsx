"use client";
import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Heading = ({ title }: { title: string }) => {
  useEffect(() => {
    AOS.init({
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  }, []);
  const words = title.split(" ");
  const firstWord = words.shift(); // Get the first word
  const restOfTitle = words.join(" "); // Join the remaining words

  return (
    <Typography
      data-aos="fade-up"
      className="text-5xl font-bold text-center my-12"
    >
      {firstWord}{" "}
      <span className="bg-gradient-to-r from-primaryColor to-secondaryColor text-transparent bg-clip-text">
        {restOfTitle}
      </span>
    </Typography>
  );
};

export default Heading;
