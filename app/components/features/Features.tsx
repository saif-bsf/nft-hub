import { Box, Typography } from "@mui/material";
import React from "react";
import data from "@/app/data/data.json";
import FeatureItem from "./FeatureItem";
import Heading from "../../basic-components/Heading";

const Features = () => {
  const { features } = data;
  const { title, cards } = features;
  return (
    <Box id="Choose">
      <Heading title={title} />
      <Box className="flex flex-1 gap-4 flex-col md:flex-row">
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
