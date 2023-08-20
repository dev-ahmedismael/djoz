"use client";
import Section from "@/templates/Section";
import SectionTitle from "@/templates/SectionTitle";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const HomeSecFive = () => {
  const feed = [
    {
      id: 1,
      title: "David Guetta Miami Ultra Music Festival 2019",
      img: "/images/youtube/youtube-1.jpg",
    },
    {
      id: 2,
      title: "Martin Garrix (Full live-set) | SLAM!Koningsdag",
      img: "/images/youtube/youtube-2.jpg",
    },
    {
      id: 3,
      title: "Dimitri Vegas, Steve Aoki & Like Mike’s “3 Are Legend”",
      img: "/images/youtube/youtube-3.jpg",
    },
  ];
  return (
    <Section>
      <SectionTitle>YOUTUBE FEED</SectionTitle>
      <Grid container spacing={5}>
        {feed.map((e) => (
          <Grid key={e.id} item xs={12} sm={4}>
            <Box>
              <img src={e.img} alt={e.title} width={"100%"} />
              <Typography variant="h5" textAlign={"center"} fontWeight={"bold"}>
                {e.title}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
};

export default HomeSecFive;
