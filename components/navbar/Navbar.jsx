import { Box, Container, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import NavMenu from "./NavMenu";

const Navbar = () => {
  const pages = [
    { id: 1, title: "HOME", url: "/" },
    { id: 2, title: "ABOUT", url: "/about" },
    { id: 3, title: "DISCOGRAPHY", url: "/discography" },
    { id: 4, title: "TOURS", url: "/tours" },
 
    { id: 5, title: "CONTACT", url: "/contact" },
  ];
  return (
    <nav>
      <Container>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
          >
            <Typography variant="h5" fontWeight={"bold"}>
              DJoz
            </Typography>
          </Box>
          <Box display={{ xs: "none", sm: "none", md: "none", lg: "flex" }}>
            {pages.map((page) => (
              <Box
                key={page.id}
                ml={3}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
              >
                <Link href={page.url}>
                  <Typography sx={{ "&:hover": { color: "purple" } }}>
                    {page.title}
                  </Typography>
                </Link>
              </Box>
            ))}
          </Box>
          <Box display={{ xs: "block", sm: "block", md: "block", lg: "none" }}>
            <NavMenu />
          </Box>
        </Box>
      </Container>
    </nav>
  );
};

export default Navbar;
