import { Box, Typography } from "@mui/material";
import React from "react";
import { greatVibes } from "@/app/layout";

const MainHeader = () => {
  return (
    <Box>
      <img id="header" src="/images/hero-bg.png" alt="Hero" />
      <Box
        position={"absolute"}
        zIndex={2}
        top={0}
        left={0}
        width={"100%"}
        height={"100%"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography>NEW SINGLE</Typography>
        <Typography
          display={{ xs: "none", sm: "block" }}
          fontSize={100}
          textAlign={"center"}
          className={greatVibes.className}
        >
          Feel the heart beats
        </Typography>
        <Typography
          display={{ xs: "block", sm: "none" }}
          variant="h3"
          textAlign={"center"}
          className={greatVibes.className}
        >
          Feel the heart beats
        </Typography>
        <Typography textAlign={"center"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit <br /> sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </Box>
    </Box>
  );
};

export default MainHeader;
