import { Box, Stack, Slider, Typography } from "@mui/material";
import React from "react";

const ProgressBar = ({ progressBarRef, audioRef, timeProgress, duration }) => {
  const handleProgressChange = () => {
    audioRef.current.currentTime = progressBarRef.current.value;
  };

  const formatTime = (time) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(time % 60);
      const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${formatMinutes}:${formatSeconds}`;
    }
    return "00:00";
  };
  return (
    <Box
      className="progress"
      display={"flex"}
      justifyContent={"space-between"}
      width={"100%"}
    >
      <Box className="time current">
        <Typography>{formatTime(timeProgress)}</Typography>
      </Box>
      <Box px={2} width={"100%"}>
        <input
          type="range"
          ref={progressBarRef}
          defaultValue="0"
          onChange={handleProgressChange}
        />
      </Box>

      <Box className="time">
        <Typography>{formatTime(duration)}</Typography>
      </Box>
    </Box>
  );
};

export default ProgressBar;
