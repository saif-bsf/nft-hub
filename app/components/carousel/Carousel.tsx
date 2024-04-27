import { Box, Typography } from "@mui/material";
import React from "react";
import data from "@/app/data/data.json";
import Card from "./Card";

const Carousel = () => {
  const { carousel } = data;
  const { title, cards } = carousel;
  return (
    <Box>
      <Typography className="text-5xl font-bold text-center my-12">
        {title}
      </Typography>
      <Box className="flex justify-between">
        {cards.map((card) => (
          <Card
            key={card.title}
            title={card.title}
            image={card.image}
            author={card.author}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Carousel;
