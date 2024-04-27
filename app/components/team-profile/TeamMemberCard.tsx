import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

type TeamMemberCardProps = {
  image: string;
  name: string;
  role: string;
};

const TeamMemberCard = (props: TeamMemberCardProps) => {
  const { image, name, role } = props;
  return (
    <Box className="flex flex-col gap-2">
      <Image
        className="border p-2 rounded-3xl"
        src={image}
        height={200}
        width={200}
        alt={name}
      />
      <Typography className="font-bold text-2xl text-center">{name}</Typography>
      <Typography className="text-sm text-center">{role}</Typography>
    </Box>
  );
};

export default TeamMemberCard;
