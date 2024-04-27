import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import data from "@/app/data/data.json";
import Heading from "./basic-components/Heading";

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
        <Button
          variant="contained"
          className="py-2 rounded-3xl"
          sx={{
            background: "linear-gradient(45deg, #556cd6, #ff00ea)",
            borderRadius: 3,
            border: 0,
            color: "white",
            height: 48,
            padding: "0 30px",
            boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
          }}
        >
          Subscribe
        </Button>
      </Box>
    </Box>
  );
};

export default SubscribeBox;
