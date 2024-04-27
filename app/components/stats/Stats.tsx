import { Box, Divider } from "@mui/material";
import React from "react";
import data from "@/app/data/data.json";
import StatsItem from "./StatsItem";

const Stats = () => {
  const { stats } = data;
  return (
    <Box className="flex flex-1 justify-around flex-col items-center md:flex-row">
      {stats.map((stat) => (
        <>
          <StatsItem key={stat.value} title={stat.title} value={stat.value} />
          <Divider orientation="vertical" flexItem />
        </>
      ))}
    </Box>
  );
};

export default Stats;
