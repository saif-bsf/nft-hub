import { Box } from "@mui/material";
import React from "react";
import data from "@/app/data/data.json";
import Heading from "../basic-components/Heading";
import RoadCard from "./RoadCard";

const Roadmap = () => {
  const { roadMap } = data;
  const { title, roadCards } = roadMap;
  return (
    <Box>
      <Heading title={title} />
      <Box className="flex flex-wrap gap-8">
        {roadCards.map((roadCard) => (
          <RoadCard
            key={roadCard.title}
            roadCardList={roadCard.roadCardList}
            title={roadCard.title}
            description={roadCard.description}
            subTitle={roadCard.subTitle}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Roadmap;
