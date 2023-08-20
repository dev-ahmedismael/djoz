import Btn from "@/templates/Btn";
import Section from "@/templates/Section";
import SectionTitle from "@/templates/SectionTitle";
import { Box, Button, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const HomeSecTwo = () => {
  return (
    <Section>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={6}>
          <img src="/images/about/about.png" alt="About" width={"100%"} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            height={"100%"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
          >
            <SectionTitle>DJ ALEXANDRA RUD</SectionTitle>
            <Typography color={"silver"} mb={5}>
              DJ Rainflow knows how to move your mind, body and soul by
              delivering tracks that stand out from the norm. As if this
              impressive succession of high impact, floor-filling bombs wasn’t
              enough to sustain.
            </Typography>
            <Box>
              <Link href={"/contact"}>
                <Btn>Contact Me</Btn>
              </Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Section>
  );
};

export default HomeSecTwo;
