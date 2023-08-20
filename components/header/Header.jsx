import React from "react";
import Navbar from "../navbar/Navbar";
import { Box, Typography } from "@mui/material";
import MainHeader from "./MainHeader";

const Header = () => {
  return (
    <header>
      <Box id="nav-wrap">
        <Navbar />
      </Box>
      <MainHeader />
    </header>
  );
};

export default Header;
