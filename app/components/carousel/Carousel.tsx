import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import data from "@/app/data/data.json";
import Card from "./Card";
import Heading from "../../basic-components/Heading";
import GradientButton from "../../basic-components/GradientButton";

const Carousel = () => {
  const { carousel } = data;
  const { title, cards } = carousel;

  return (
    <Box id="Collection">
      <Heading title={title} />
      <Box className="flex  overflow-x-auto flex-nowrap">
        {cards.map((card) => (
          <Card
            key={card.title}
            title={card.title}
            image={card.image}
            author={card.author}
          />
        ))}
      </Box>
      <Box className="text-center my-8">
        <GradientButton btnText="View Collection" />
      </Box>
    </Box>
  );
};

export default Carousel;
