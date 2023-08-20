"use client";
import Btn from "@/templates/Btn";
import Section from "@/templates/Section";
import SectionTitle from "@/templates/SectionTitle";
import AudioPlayer from "@/templates/audioplayer/AudioPlayer";
import { Box, Grid, Typography } from "@mui/material";
import React, { useRef } from "react";

const HomeSecFour = () => {
  const playlist = [
    { id: 1, title: "DAVID GUETTA MIAMI ULTRA", track: "/music/1.mp3" },
    { id: 2, title: "DAVID GUETTA MIAMI ULTRA", track: "/music/2.mp3" },
    { id: 3, title: "DAVID GUETTA MIAMI ULTRA", track: "/music/3.mp3" },
    { id: 4, title: "DAVID GUETTA MIAMI ULTRA", track: "/music/4.mp3" },
    { id: 5, title: "DAVID GUETTA MIAMI ULTRA", track: "/music/5.mp3" },
    { id: 6, title: "DAVID GUETTA MIAMI ULTRA", track: "/music/6.mp3" },
  ];

  const x = useRef();
  return (
    <Section>
      <Box display={"flex"} justifyContent={"space-between"} mb={5}>
        <SectionTitle>LATEST TRACKS</SectionTitle>
        <Btn>VIEW ALL TRACKS</Btn>
      </Box>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={6}>
          <AudioPlayer />
        </Grid>
        <Grid item xs={12} sm={6}>
          <img
            src="/images/track-right.jpg"
            alt="Celebration"
            width={"100%"}
            height={"100%"}
          />
        </Grid>
      </Grid>
    </Section>
  );
};

export default HomeSecFour;
