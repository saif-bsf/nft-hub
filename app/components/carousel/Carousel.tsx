import { Box } from "@mui/material";
import React from "react";
import data from "@/app/data/data.json";
import Card from "./Card";
import Heading from "../basic-components/Heading";

const Carousel = () => {
  const { carousel } = data;
  const { title, cards } = carousel;
  return (
    <Box>
      <Heading title={title} />
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
