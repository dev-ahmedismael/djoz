import PlayBtn from "@/templates/PlayBtn";
import { Box, Grid } from "@mui/material";
import React from "react";
import Services from "./Services";

const HomeSecThree = () => {
  return (
    <section>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Box position={"relative"} height={"100%"}>
            <img
              src="/images/tours/tour-1.jpg"
              alt="dj"
              width={"100%"}
              height={"100%"}
            />
            <PlayBtn
              video={
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/JGwWNGJdvx8"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              }
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Services />
        </Grid>
      </Grid>
    </section>
  );
};

export default HomeSecThree;
