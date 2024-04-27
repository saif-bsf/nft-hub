import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

type ProductItemProps = {
  subTitle: string;
  image: string;
  description: string;
  variant: string;
};

const ProductItem = (props: ProductItemProps) => {
  const { variant, image, subTitle, description } = props;
  return (
    <Box
      className={`flex flex-1 flex-col ${
        variant === "image-start" ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <Box className="flex flex-1 p-12">
        <Image
          className="flex flex-1"
          src={image}
          height={400}
          width={400}
          alt="product image"
        />
      </Box>
      <Box className="flex flex-1 p-24 flex-col gap-12">
        <Typography className="text-5xl font-bold">{subTitle}</Typography>
        <Typography>{description}</Typography>
      </Box>
    </Box>
  );
};

export default ProductItem;
