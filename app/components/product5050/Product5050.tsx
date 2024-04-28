import { Box } from "@mui/material";
import React from "react";
import data from "@/app/data/data.json";
import Heading from "../../basic-components/Heading";
import ProductItem from "./ProductItem";

const Product5050 = () => {
  const { product5050 } = data;
  const { title, products } = product5050;

  return (
    <Box>
      <Heading title={title} />
      <Box>
        <ProductItem
          count={products[0].count}
          variant="image-start"
          subTitle={products[0].subTitle}
          image={products[0].image}
          description={products[0].description}
        />
        <ProductItem
          count={products[1].count}
          variant="image-end"
          subTitle={products[1].subTitle}
          image={products[1].image}
          description={products[1].description}
        />
        <ProductItem
          count={products[2].count}
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
