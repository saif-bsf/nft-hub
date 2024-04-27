import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import data from "@/app/data/data.json";

const SubscribeBox = () => {
  const { subscribeBox } = data;
  const { title, description, placeholder } = subscribeBox;
  return (
    <Box className="flex flex-1 flex-col gap-5 py-12 justify-center border rounded-xl">
      <Typography className="text-5xl font-bold text-center">
        {title}
      </Typography>
      <Typography className="text-center">{description}</Typography>
      <Box className="flex justify-center gap-4">
        <TextField
          variant="filled"
          placeholder={placeholder}
          className="rounded-xl"
        />
        <Button variant="contained" className="py-2 rounded-3xl">
          Subscribe
        </Button>
      </Box>
    </Box>
  );
};

export default SubscribeBox;
