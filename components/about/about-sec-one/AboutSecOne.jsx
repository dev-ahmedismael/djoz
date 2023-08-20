import {
  Box,
  Container,
  Grid,
  LinearProgress,
  Typography,
} from "@mui/material";
import React from "react";

const AboutSecOne = () => {
  return (
    <section>
      <Box py={5}>
        <Container>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <Box bgcolor={"purple"} p={10}>
                <Typography variant="h4" fontWeight={"bold"} mb={5}>
                  DJ ALEXANDRA RUD
                </Typography>
                <Typography mb={3}>
                  DJ Rainflow knows how to move your mind, body and soul by
                  delivering tracks that stand out from the norm.s
                </Typography>
                <Box mb={3}>
                  <Box display={"flex"} justifyContent={"space-between"} mb={2}>
                    <Typography>Perform</Typography>
                    <Typography>80%</Typography>
                  </Box>
                  <LinearProgress variant="determinate" value={80} />
                </Box>
                <Box mb={3}>
                  <Box display={"flex"} justifyContent={"space-between"} mb={2}>
                    <Typography>Use Midi</Typography>
                    <Typography>70%</Typography>
                  </Box>
                  <LinearProgress variant="determinate" value={70} />
                </Box>
                <Box mb={3}>
                  <Box display={"flex"} justifyContent={"space-between"} mb={2}>
                    <Typography>Remix and mash up</Typography>
                    <Typography>98%</Typography>
                  </Box>
                  <LinearProgress variant="determinate" value={98} />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <img
                src="/images/skill-video.jpg"
                alt="DJ"
                width={"100%"}
                height={"100%"}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </section>
  );
};

export default AboutSecOne;
