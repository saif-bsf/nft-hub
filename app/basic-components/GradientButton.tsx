"use client";
import { Button } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";

const MotionButton = motion(Button);

const GradientButton = ({ btnText }: { btnText: string }) => {
  return (
    <MotionButton
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      variant="contained"
      className="py-2 max-w-56 rounded-3xl"
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
      {btnText}
    </MotionButton>
  );
};

export default GradientButton;
