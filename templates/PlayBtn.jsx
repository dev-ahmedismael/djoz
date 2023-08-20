"use client";
import { Box } from "@mui/material";
import React from "react";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "fit-content",
  boxShadow: 24,
  borderRadius: 0,
};

const PlayBtn = ({ video }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box>
      <Box
        className={"play-video-icon"}
        sx={{ cursor: "pointer" }}
        onClick={handleOpen}
      >
        <Box
          bgcolor={"purple"}
          width={60}
          height={60}
          borderRadius={"100%"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          border={"10px solid rgba(255, 255, 255, 0.6)"}
        >
          <img src="/images/play.png" alt="Play icon" />
        </Box>
      </Box>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>{video}</Box>
      </Modal>
    </Box>
  );
};

export default PlayBtn;
