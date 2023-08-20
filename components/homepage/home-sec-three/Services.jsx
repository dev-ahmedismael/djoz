"use client";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import React from "react";

const Services = () => {
  const theme = useTheme();
  const services = [
    {
      id: 1,
      icon: "/images/services/service-1.png",
      title: "Wedding",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    },
    {
      id: 2,
      icon: "/images/services/service-2.png",
      title: "Clubs and bar",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    },
    {
      id: 3,
      icon: "/images/services/service-3.png",
      title: "Corporate events",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    },
    {
      id: 4,
      icon: "/images/services/service-4.png",
      title: "DJ lessons",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    },
  ];
  return (
    <Grid container>
      {services.map((service) => (
        <Grid key={service.id} item xs={6}>
          <Box
            height={350}
            p={5}
            bgcolor={
              service.id === 1 || service.id === 4
                ? theme.palette.primary.main
                : theme.palette.secondary.main
            }
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box>
              <img src={service.icon} alt={service.title} />
              <Typography variant="h5" fontWeight={"bold"} my={1}>
                {service.title}
              </Typography>
              <Typography>{service.description}</Typography>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default Services;
