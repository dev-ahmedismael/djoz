"use client";
import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";

const DisplayTrack = ({
  currentTrack,
  audioRef,
  setDuration,
  progressBarRef,
  handleNext,
}) => {
  useEffect(() => {
    const seconds = audioRef.current.duration;
    setDuration(seconds);
    progressBarRef.current.max = seconds;
  }, [handleNext]);

  const [volume, setVolume] = useState(60);
  const [muteVolume, setMuteVolume] = useState(false);

  useEffect(() => {
    if (audioRef) {
      audioRef.current.volume = volume / 100;
      audioRef.current.muted = muteVolume;
    }
  }, [volume, audioRef, muteVolume]);
  return (
    <Box>
      <audio src={currentTrack.src} ref={audioRef} onEnded={handleNext} />
      <Box className="audio-info" position={"relative"}>
        <Box
          className="volume"
          display={"flex"}
          position={"absolute"}
          top={20}
          left={20}
        >
          <Box onClick={() => setMuteVolume((prev) => !prev)} mr={2}>
            {muteVolume || volume < 5 ? (
              <VolumeOffIcon />
            ) : volume < 40 ? (
              <VolumeDown />
            ) : (
              <VolumeUp />
            )}
          </Box>
          <Box width={100}>
            <Stack
              spacing={2}
              direction="row"
              sx={{ mb: 1 }}
              alignItems="center"
            >
              <Slider
                aria-label="Volume"
                value={volume}
                min={0}
                max={100}
                onChange={(e) => {
                  setVolume(e.target.value);
                }}
              />
            </Stack>
          </Box>
        </Box>
        <Box className="audio-image">
          {currentTrack.thumbnail ? (
            <img
              src={currentTrack.thumbnail}
              alt="audio avatar"
              width={"100%"}
              height={500}
            />
          ) : (
            <Box className="icon-wrapper">
              <Box className="audio-icon">
                <BsMusicNoteBeamed />
              </Box>
            </Box>
          )}
        </Box>
        <Box className="text" position={"absolute"} bottom={20} left={20}>
          <Typography variant="h5" fontWeight={"bold"} className="title">
            {currentTrack.title}
          </Typography>
          <Typography>{currentTrack.author}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default DisplayTrack;
