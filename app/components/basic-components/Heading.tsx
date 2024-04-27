import { Typography } from "@mui/material";
import React from "react";

const Heading = ({ title }: { title: string }) => {
  const words = title.split(" ");
  const firstWord = words.shift(); // Get the first word
  const restOfTitle = words.join(" "); // Join the remaining words

  return (
    <Typography className="text-5xl font-bold text-center my-12">
      {firstWord}{" "}
      <span className="bg-gradient-to-r from-primaryColor to-secondaryColor text-transparent bg-clip-text">{restOfTitle}</span>
    </Typography>
  );
};

export default Heading;