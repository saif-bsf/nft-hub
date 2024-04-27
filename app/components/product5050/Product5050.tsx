import { Box, Typography } from "@mui/material";
import React from "react";
import data from "@/app/data/data.json";
import ProductItem from "./ProductItem";

const Product5050 = () => {
  const { product5050 } = data;
  const { title, products } = product5050;

  return (
    <Box>
      <Typography className="text-5xl font-bold text-center my-12">
        {title}
      </Typography>
      <Box>
        <ProductItem
          variant="image-start"
          subTitle={products[0].subTitle}
          image={products[0].image}
          description={products[0].description}
        />
        <ProductItem
          variant="image-end"
          subTitle={products[1].subTitle}
          image={products[1].image}
          description={products[1].description}
        />
        <ProductItem
          variant="image-start"
          subTitle={products[2].subTitle}
          image={products[2].image}
          description={products[2].description}
        />
      </Box>
    </Box>
  );
};

export default Product5050;
