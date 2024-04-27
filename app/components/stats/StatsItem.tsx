import { Box, Typography } from "@mui/material";
import React from "react";

type StatsItemProps = {
  title: string;
  value: string;
};

const StatsItem = (props: StatsItemProps) => {
  const { title, value } = props;
  return (
    <Box>
      <Typography className="font-bold text-5xl mb-4">{value}</Typography>
      <Typography>{title}</Typography>
    </Box>
  );
};

export default StatsItem;
