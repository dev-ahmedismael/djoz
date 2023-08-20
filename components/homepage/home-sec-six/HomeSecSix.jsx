"use client";
import { greatVibes } from "@/app/layout";
import Btn from "@/templates/Btn";
import { Box, Typography } from "@mui/material";
import React from "react";
import Countdown from "react-countdown";

const HomeSecSix = () => {
  return (
    <section id="timer">
      <Box height={500} position={"relative"} zIndex={1}>
        <img
          src="/images/countdown-bg.jpg"
          alt="Party"
          width={"100%"}
          height={900}
        />
      </Box>
      <Box
        position={"absolute"}
        zIndex={2}
        top={0}
        left={0}
        width={"100%"}
        height={500}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography
          variant="h2"
          textAlign={"center"}
          mb={3}
          className={greatVibes.className}
        >
          Tomorrow Never Dies
        </Typography>
        <Typography variant="h4" textAlign={"center"} mb={3}>
          MUSIC FESTIVAL START IN
        </Typography>
        <Typography variant="h2" textAlign={"center"} mb={3}>
          <Countdown date={Date.now() + 60000 * 60 * 3} />
        </Typography>
        <Btn>BUY TICKETS</Btn>
      </Box>
    </section>
  );
};

export default HomeSecSix;
