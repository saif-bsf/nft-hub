import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React, { useRef } from "react";
import gsap from 'gsap';

type CardPropsType = {
  image: string;
  title: string;
  author: string;
};

const Card = (props: CardPropsType) => {
  const { image, title, author } = props;
  const cardRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(cardRef.current, { scale: 1.10, boxShadow: 'md', duration: 0.1 });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, { scale: 1, boxShadow: 'none', duration: 0.1 });
  };
  return (
    <Box className="flex-none w-1/2 md:w-1/4" ref={cardRef} onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ transition: 'transform 0.3s ease-in-out', boxShadow: 'none' }}>
      <Image src={image} width={300} height={300} alt="image not found" />
      <Box className="my-4 text-center">
        <Typography className="font-bold text-xl">{title}</Typography>
        <Typography>{author}</Typography>
      </Box>
    </Box>
  );
};

export default Card;
