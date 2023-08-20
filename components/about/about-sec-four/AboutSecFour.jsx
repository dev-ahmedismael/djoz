import Section from "@/templates/Section";
import SectionTitle from "@/templates/SectionTitle";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const AboutSecFour = () => {
  const items = [
    {
      id: 1,
      title: "Wedding",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      img: "/images/services/as-1.jpg",
      icon: "",
    },
    {
      id: 2,
      title: "Clubs and bar",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      img: "/images/services/as-2.jpg",
      icon: "",
    },
    {
      id: 3,
      title: "Corporate events",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      img: "/images/services/as-3.jpg",
      icon: "",
    },
  ];
  return (
    <Section>
      <Box display={"flex"} justifyContent={"center"} mb={5}>
        <SectionTitle>Where Do I Play</SectionTitle>
      </Box>
      <Grid container spacing={4}>
        {items.map((item) => (
          <Grid key={item.id} item xs={12} sm={4}>
            <Box>
              <img src={item.img} alt="Service" width={"100%"} height={280} />
              <Typography
                textAlign={"center"}
                variant="h4"
                color={"purple"}
                fontWeight={"bold"}
              >
                {item.title}
              </Typography>
              <Typography textAlign={"center"} color={"silver"}>
                {item.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
};

export default AboutSecFour;
