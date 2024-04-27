import { Box, Typography } from "@mui/material";
import React from "react";
import data from "@/app/data/data.json";
import Heading from "../basic-components/Heading";

const Roadmap = () => {
  const { roadMap } = data;
  const { title, roadCards } = roadMap;
  return (
    <Box>
      <Heading title={title} />
    </Box>
  );
};

export default Roadmap;
