"use client";
import React from "react";
import { useState, useEffect, useCallback, useRef } from "react";

import Btn from "../Btn";
import { Box } from "@mui/material";

// icons
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import FastForwardIcon from "@mui/icons-material/FastForward";
import FastRewindIcon from "@mui/icons-material/FastRewind";

const Controls = ({
  audioRef,
  progressBarRef,
  duration,
  setTimeProgress,
  tracks,
  trackIndex,
  setTrackIndex,
  setCurrentTrack,
  handleNext,
  isPlaying,
  setIsPlaying,
}) => {
  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const playAnimationRef = useRef();

  const repeat = useCallback(() => {
    const currentTime = audioRef.current.currentTime;
    setTimeProgress(currentTime);
    progressBarRef.current.value = currentTime;
    progressBarRef.current.style.setProperty(
      "--range-progress",
      `${(progressBarRef.current.value / duration) * 100}%`
    );

    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [audioRef, duration, progressBarRef, setTimeProgress]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [isPlaying, audioRef, repeat]);

  const skipForward = () => {
    audioRef.current.currentTime += 15;
  };

  const skipBackward = () => {
    audioRef.current.currentTime -= 15;
  };

  const handlePrevious = () => {
    if (trackIndex === 0) {
      let lastTrackIndex = tracks.length - 1;
      setTrackIndex(lastTrackIndex);
      setCurrentTrack(tracks[lastTrackIndex]);
    } else {
      setTrackIndex((prev) => prev - 1);
      setCurrentTrack(tracks[trackIndex - 1]);
    }
  };

  return (
    <Box className="controls-wrapper">
      <Box className="controls" display={"flex"} justifyContent={"center"}>
        <Box onClick={handlePrevious} ml={1}>
          <Btn>
            <SkipPreviousIcon />
          </Btn>
        </Box>
        <Box onClick={skipBackward}>
          <Btn>
            <FastRewindIcon />
          </Btn>
        </Box>
        <Box onClick={togglePlayPause}>
          <Btn>{isPlaying ? <PauseIcon /> : <PlayArrowIcon />}</Btn>
        </Box>
        <Box onClick={skipForward}>
          <Btn>
            <FastForwardIcon />
          </Btn>
        </Box>
        <Box onClick={handleNext}>
          <Btn>
            <SkipNextIcon />
          </Btn>
        </Box>
      </Box>
    </Box>
  );
};

export default Controls;
