import { Typography } from "@mui/material";
import React from "react";

const Heading = ({ title }: { title: string }) => {
  return (
    <Typography className="text-5xl font-bold text-center my-12">
      {title}
    </Typography>
  );
};

export default Heading;
