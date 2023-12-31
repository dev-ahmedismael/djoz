import { Box } from "@mui/material";
import React, { useState, useRef } from "react";
import DisplayTrack from "./DisplayTrack";
import Controls from "./Controls";
import ProgressBar from "./ProgressBar";
import { tracks } from "./Tracks";

const AudioPlayer = () => {
  const [trackIndex, setTrackIndex] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);
  const audioRef = useRef();
  const progressBarRef = useRef();

  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const [isPlaying, setIsPlaying] = useState(false);

  const handleNext = () => {
    if (trackIndex >= tracks.length - 1) {
      setTrackIndex(0);
      setCurrentTrack(tracks[0]);
    } else {
      setTrackIndex((prev) => prev + 1);
      setCurrentTrack(tracks[trackIndex + 1]);
      setIsPlaying(false);
    }
  };

  return (
    <Box>
      <DisplayTrack
        currentTrack={currentTrack}
        audioRef={audioRef}
        setDuration={setDuration}
        progressBarRef={progressBarRef}
        handleNext={handleNext}
      />
      <ProgressBar
        progressBarRef={progressBarRef}
        audioRef={audioRef}
        timeProgress={timeProgress}
        duration={duration}
      />
      <Controls
        audioRef={audioRef}
        progressBarRef={progressBarRef}
        duration={duration}
        setTimeProgress={setTimeProgress}
        tracks={tracks}
        trackIndex={trackIndex}
        setTrackIndex={setTrackIndex}
        setCurrentTrack={setCurrentTrack}
        handleNext={handleNext}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
    </Box>
  );
};

export default AudioPlayer;
