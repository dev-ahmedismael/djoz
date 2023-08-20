import React from "react";
import HomeSecSix from "../homepage/home-sec-six/HomeSecSix";
import { Box, Container, Grid, Typography } from "@mui/material";
import Btn from "@/templates/Btn";

const Tours = () => {
  const items = [
    "images/tours/tour-1.jpg",
    "images/tours/tour-2.jpg",
    "images/tours/tour-3.jpg",
  ];
  return (
    <Box pt={10}>
      <Box height={1000}>
        <HomeSecSix />
      </Box>
      {items.map((item, index) => (
        <Box key={index} mb={10}>
          <Container>
            <Grid container spacing={5}>
              {index % 2 !== 0 && (
                <Grid item xs={12} sm={6}>
                  <img src={item} alt="Tour" width={"100%"} />
                </Grid>
              )}
              <Grid item xs={12} sm={6}>
                <Typography variant="h4" fontWeight={"bold"} color={"purple"}>
                  UNTOLD FESTIVAL 2020
                </Typography>
                <Box display={"flex"} justifyContent={"space-between"} mb={5}>
                  <Box pt={2}>
                    <Typography fontSize={"small"} color={"silver"}>
                      8:00pm | Dec 15, 2019
                    </Typography>
                    <Typography fontSize={"small"} color={"silver"}>
                      Funkhaus Berlin, Berlin, Germany
                    </Typography>
                  </Box>
                  <Box>
                    <Btn>$35.00</Btn>
                  </Box>
                </Box>
                <hr />
                <Typography mb={5}>
                  Held in Europe’s electronic music capital on New Year’s Eve,
                  the seminal Funkhaus Berlin hosts an impressive roster of
                  techno artists worthy. Soundtracking the leap from 2019 into
                  2020 in what is one of the most anticipated nights of the
                  year, in one of the city’s most hyped venues, HYTE Berlin NYE
                  is the Held in Europe’s electronic music capital on New Year’s
                  Eve, the seminal Funkhaus Berlin hosts an impressive roster of
                  techno artists worthy. Soundtracking the leap from 2019 into
                  2020 in what is one of the most anticipated nights of the
                  year, in one of the city’s most hyped venues, HYTE Berlin NYE
                  is the Liberty City.
                </Typography>
                <Btn>BUY TICKETS</Btn>
              </Grid>
              {index % 2 === 0 && (
                <Grid item xs={12} sm={6}>
                  <img src={item} alt="Tour" width={"100%"} />
                </Grid>
              )}
            </Grid>
          </Container>
        </Box>
      ))}
    </Box>
  );
};

export default Tours;
