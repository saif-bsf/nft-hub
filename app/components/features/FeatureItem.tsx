import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

type FeatureItemProps = {
  subTitle: string;
  svg: string;
  description: string;
};

const FeatureItem = (props: FeatureItemProps) => {
  const { subTitle, svg, description } = props;
  return (
    <Box className="border p-10 rounded-lg flex flex-1 flex-col gap-8">
      <Image src={svg} alt="svg not found" width={50} height={50} />
      <Typography className="font-bold text-xl">{subTitle}</Typography>
      <Typography className="text-textColor">{description}</Typography>
    </Box>
  );
};

export default FeatureItem;
