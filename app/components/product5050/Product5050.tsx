import { Box } from "@mui/material";
import React from "react";
import data from "@/app/data/data.json";
import ProductItem from "./ProductItem";
import Heading from "../basic-components/Heading";

const Product5050 = () => {
  const { product5050 } = data;
  const { title, products } = product5050;

  return (
    <Box>
      <Heading title={title} />
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
