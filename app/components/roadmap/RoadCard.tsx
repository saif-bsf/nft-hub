import { Box, Divider, Typography } from "@mui/material";
import React from "react";

type RoadCardProps = {
  subTitle: string;
  title: string;
  description: string;
  roadCardList: Array<string>;
};
const RoadCard = (props: RoadCardProps) => {
  const { subTitle, title, description, roadCardList } = props;
  return (
    <Box className="flex flex-1 basis-1/4 flex-col border rounded-2xl p-8 gap-5">
      <Typography className="font-bold text-sm">{subTitle}</Typography>
      <Typography className="font-bold text-xl">{title}</Typography>
      <Typography className="text-textColor">{description}</Typography>
      <Divider className="max-w-20" />
      <Box>
        {roadCardList.map((item) => (
          <Typography className="my-2 text-textColor" key={item}>
            {item}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default RoadCard;
