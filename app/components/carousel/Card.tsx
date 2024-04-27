import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

type CardPropsType = {
  image: string;
  title: string;
  author: string;
};

const Card = (props: CardPropsType) => {
  const { image, title, author } = props;
  return (
    <Box className="flex-none w-1/2 md:w-1/4">
      <Image src={image} width={300} height={300} alt="image not found" />
      <Box className="my-4 text-center">
        <Typography className="font-bold text-xl">{title}</Typography>
        <Typography>{author}</Typography>
      </Box>
    </Box>
  );
};

export default Card;
