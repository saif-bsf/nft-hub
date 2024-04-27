import React from "react";
import data from "@/app/data/data.json";
import { Box } from "@mui/material";
import Heading from "../basic-components/Heading";
import TeamMemberCard from "./TeamMemberCard";

const TeamProfile = () => {
  const { teamInfo } = data;
  const { title, teamMembers } = teamInfo;
  return (
    <Box>
      <Heading title={title} />
      <Box className="flex flex-1 justify-between">
        {teamMembers.map((member) => (
          <TeamMemberCard
            key={member.name}
            name={member.name}
            role={member.role}
            image={member.image}
          />
        ))}
      </Box>
    </Box>
  );
};

export default TeamProfile;
