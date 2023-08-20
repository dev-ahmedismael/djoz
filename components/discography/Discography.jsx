import Section from "@/templates/Section";
import SectionTitle from "@/templates/SectionTitle";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const Discography = () => {
  const items = [
    "/images/discography/disco-1.jpg",
    "/images/discography/disco-2.jpg",
    "/images/discography/disco-3.jpg",
    "/images/discography/disco-4.jpg",
    "/images/discography/disco-5.jpg",
    "/images/discography/disco-6.jpg",
  ];
  return (
    <Section>
      <Box display={"flex"} justifyContent={"center"} mb={5}>
        <SectionTitle>Discography</SectionTitle>
      </Box>
      <Grid container spacing={4}>
        {items.map((item, index) => (
          <Grid item key={index} xs={12} sm={4}>
            <Box bgcolor={"#111111"} py={3} boxShadow={3} borderRadius={1}>
              <Container>
                <img src={item} alt="Music Album" width={"100%"} height={300} />
                <Typography
                  textAlign={"center"}
                  color={"purple"}
                  fontWeight={"bold"}
                  variant="h6"
                  my={2}
                >
                  $ 52.00
                </Typography>
                <Typography textAlign={"center"} color={"silver"}>
                  EDM PARTY ELECTRO HOUSE
                </Typography>
              </Container>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
};

export default Discography;
