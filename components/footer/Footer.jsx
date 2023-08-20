"use client";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  OutlinedInput,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import MailIcon from "@mui/icons-material/Mail";
import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Btn from "@/templates/Btn";
import TelegramIcon from "@mui/icons-material/Telegram";

const Footer = () => {
  const theme = useTheme();
  return (
    <footer>
      <Box
        height={500}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"flex-end"}
      >
        <Box>
          <Container>
            <Grid container>
              <Grid item xs={12} sm={4}>
                <Box display={{ xs: "none", sm: "none", md: "block" }}>
                  <Box display={"flex"} mb={2}>
                    <Box
                      mr={2}
                      bgcolor={theme.palette.primary.main}
                      width={50}
                      display={"flex"}
                      flexDirection={"column"}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <PhoneEnabledIcon />
                    </Box>
                    <Box>
                      <Typography color={"silver"}>Phone</Typography>
                      <Typography>+20 128 652-3946</Typography>
                    </Box>
                  </Box>
                  <Box display={"flex"}>
                    <Box
                      mr={2}
                      bgcolor={theme.palette.primary.main}
                      width={50}
                      display={"flex"}
                      flexDirection={"column"}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <MailIcon />
                    </Box>
                    <Box>
                      <Typography color={"silver"}>Email</Typography>
                      <Typography>dev.ahmedismael@outlook.com</Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography
                  variant="h4"
                  fontWeight={"bold"}
                  textAlign={"center"}
                  mb={5}
                >
                  DJOZ
                </Typography>
                <Box display={"flex"} justifyContent={"center"}>
                  <Box>
                    <FacebookIcon fontSize="large" />
                  </Box>
                  <Box mx={2}>
                    <TwitterIcon fontSize="large" />
                  </Box>
                  <Box>
                    <YouTubeIcon fontSize="large" />
                  </Box>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                sm={4}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                }}
              >
                <Box display={{ xs: "none", sm: "none", md: "block" }}>
                  <Typography mb={3}>SUBSCRIBE TO NEWSLETER</Typography>
                  <Box display={"flex"}>
                    <Box mr={-1}>
                      <TextField
                        variant="outlined"
                        placeholder="Email"
                        focused
                      />
                    </Box>

                    <Box
                      height={56}
                      width={56}
                      display={"flex"}
                      flexDirection={"column"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      bgcolor={theme.palette.primary.main}
                      position={"relative"}
                      zIndex={10}
                    >
                      <TelegramIcon fontSize="large" />
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Typography textAlign={"center"} mt={5}>
              Copyright ©2023 All rights reserved
            </Typography>
            <Typography textAlign={"center"} mb={3}>
              Developed with <FavoriteIcon sx={{ color: "purple" }} /> by
              <Link href={"https://ahmedismael.vercel.app"} target="_blank">
                <Button>Ahmed Ismael</Button>
              </Link>
            </Typography>
          </Container>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
