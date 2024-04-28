import { Box, TextField, Typography } from "@mui/material";
import React from "react";
import data from "@/app/data/data.json";
import Heading from "../basic-components/Heading";
import GradientButton from "../basic-components/GradientButton";

const SubscribeBox = () => {
  const { subscribeBox } = data;
  const { title, description, placeholder } = subscribeBox;
  return (
    <Box className="flex flex-1 flex-col py-8 justify-center border rounded-xl">
      <Heading title={title} />
      <Typography className="text-center mb-4">{description}</Typography>
      <Box className="flex justify-center gap-4">
        <TextField
          variant="filled"
          placeholder={placeholder}
          sx={{
            "& .MuiFilledInput-root": {
              borderRadius: "16px", // Adjust this value to control the border radius
              background: "#D3D3D3", // Change background color if needed
            },
            "& .MuiFilledInput-input": {
              padding: "10px", // Optional: Adjust padding if necessary
            },
            "& .MuiFilledInput-underline:before": {
              borderBottom: 0, // Remove underline
            },
            "& .MuiFilledInput-underline:after": {
              borderBottom: 0, // Remove underline on focus
            },
          }}
        />
        <GradientButton btnText="Subscribe" />
      </Box>
    </Box>
  );
};

export default SubscribeBox;
