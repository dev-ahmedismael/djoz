import { Typography } from "@mui/material";
import React from "react";

const SectionTitle = ({ children }) => {
  return (
    <Typography variant="h4" fontWeight={"bold"} color={"purple"} mb={5}>
      {children}
    </Typography>
  );
};

export default SectionTitle;
