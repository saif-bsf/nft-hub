import { Box, Typography } from "@mui/material";
import React from "react";
import data from "@/app/data/data.json";
import FeatureItem from "./FeatureItem";

const Features = () => {
  const { features } = data;
  const { title, cards } = features;
  return (
    <Box>
      <Typography className="text-4xl font-bold text-center my-12">
        {title}
      </Typography>
      <Box className="flex flex-1 gap-4">
        {cards.map((card) => (
          <FeatureItem
            key={card.subTitle}
            svg={card.svg}
            subTitle={card.subTitle}
            description={card.description}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Features;
