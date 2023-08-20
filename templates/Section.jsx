import { Box, Container } from "@mui/material";
import React from "react";

const Section = ({ children }) => {
  return (
    <section>
      <Container>
        <Box py={10}>{children}</Box>
      </Container>
    </section>
  );
};

export default Section;
