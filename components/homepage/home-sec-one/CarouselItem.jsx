import { Box, Typography } from "@mui/material";
import React from "react";

const CarouselItem = ({ img }) => {
  return (
    <Box position={"relative"}>
      <Box>
        <img src={img} alt="Carousel item" width={"100%"} height={300} />
        <Box
          position={"absolute"}
          top={280}
          width={"100%"}
          display={"flex"}
          justifyContent={"center"}
        >
          <Typography
            bgcolor={"purple"}
            color={"white"}
            width={"fit-content"}
            textAlign={"center"}
            px={3}
            py={1}
          >
            Aug 01, 2023
          </Typography>
        </Box>
      </Box>
      <Typography
        variant="h5"
        fontWeight={"bold"}
        color={"purple"}
        textAlign={"center"}
        mt={3}
        mb={1}
      >
        DAVID GUETTA MIAMI ULTRA
      </Typography>
      <Typography color={"silver"} textAlign={"center"}>
        Algonquin, Liberty City
      </Typography>
    </Box>
  );
};

export default CarouselItem;
