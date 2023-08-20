"use client";
import { Box, Button, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import Link from "next/link";

const NavMenu = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const handleNavMenu = () => {
    setIsMenuActive(!isMenuActive);
  };
  const pages = [
    { id: 1, title: "HOME", url: "/" },
    { id: 2, title: "ABOUT", url: "/about" },
    { id: 3, title: "DISCOGRAPHY", url: "/discography" },
    { id: 4, title: "TOURS", url: "/tours" },

    { id: 5, title: "CONTACT", url: "/contact" },
  ];
  return (
    <Box>
      <Button onClick={handleNavMenu}>
        <MenuIcon fontSize="large" sx={{ color: "white" }} />
      </Button>
      {isMenuActive && (
        <Box className="nav-menu">
          {pages.map((page) => (
            <Link key={page.id} href={page.url}>
              <Typography sx={{ "&:hover": { color: "purple" } }}>
                {page.title}
              </Typography>
            </Link>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default NavMenu;
