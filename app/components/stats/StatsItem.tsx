import { Box, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

type StatsItemProps = {
  title: string;
  value: string;
};

const StatsItem = (props: StatsItemProps) => {
  const { title, value } = props;
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const boxElement = boxRef.current;
    if (!boxElement) return;

    gsap.fromTo(
      boxElement,
      { x: -50, opacity: 0 }, // Start from slightly off-screen left with opacity 0
      { x: 0, opacity: 1, duration: 1, ease: "slow(0.7, 0.7, false)" } // Slide to the original position with slow easing
    );
  }, []);

  return (
    <Box ref={boxRef}>
      <Typography className="font-bold text-5xl mb-4">{value}</Typography>
      <Typography>{title}</Typography>
    </Box>
  );
};

export default StatsItem;
