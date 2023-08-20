import { Button } from "@mui/material";
import React from "react";

const Btn = ({ children }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      sx={{ height: 60, borderRadius: 0, px: 3 }}
    >
      {children}
    </Button>
  );
};

export default Btn;
