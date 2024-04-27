import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const MainPoster = () => {
  return (
    <Box data-aos="fade-up" className="py-10 flex flex-1 w-full">
      <Box className="flex flex-1 flex-col justify-center">
        <Typography className="font-bold text-5xl">
          High Quality NFT Collection
        </Typography>
        <Typography className="my-5">
          A 890 piece custom Nfthub's collection is joining the NFT space on
          Opensea.
        </Typography>
        <Button
          variant="contained"
          className="bg-primary max-w-44 rounded-3xl p-2"
        >
          View in OPENSEA
        </Button>
        <Box className="flex my-8">
          <Image
            src="/user-avatars.png"
            width={100}
            height={100}
            alt="image not found"
          />
          <Box>
            <Typography className="font-bold text-2xl ml-4">47k+</Typography>
            <Typography className="ml-4">Community members</Typography>
          </Box>
        </Box>
      </Box>
      <Box className="flex flex-1">
        <Image
          className="flex flex-1"
          src="/main-poster.png"
          width={500}
          height={300}
          alt="image not found"
        />
      </Box>
    </Box>
  );
};

export default MainPoster;
