import React, { useEffect, useRef, useState } from "react";
import "react-tooltip/dist/react-tooltip.css";
import { usePlayerStore } from "../model/store/use-player";
import PlayerPlayPauseAnimation from "../components/player-controls/player-play-pause-animation";
import { useVideoControls } from "../model/hooks/useVideoControls";
import VideoPlayerControls from "../components/player-controls/video-player-controls";
import VideoPlayerHeader from "../components/video-player-header";
import Loader from "../../../shared/ui/loader";
import { useVideoFullscreen } from "../model/hooks/useVideoFullscreen";
import { useVideoVolume } from "../model/hooks/useVideoVolume";
import { useVideoMetadata } from "../model/hooks/useVideoMetadata";
import { useVideoProgress } from "../model/hooks/useVIdeoProgress";
import { useVideoPlayerSetTime } from "../model/hooks/useVideoSetTime";
const VideoPlayer = () => {
  const {
    title,
    activeVideoId,
    quality,
    showType,
    duration,
    subtitle,
    currentTime,
    velocity,
    setVolume,
    setIsPause,
    setCurrentTime,
    setDuration,
  } = usePlayerStore();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playAnimation, setPlayAnimation] = useState(false);
  const [bufferedWidth, setBufferedWidth] = useState(0);
  const [loading, setLoading] = useState(false);
  const { handleFullscreen, isFullscreen } = useVideoFullscreen();
  const { handleVolumeToggle } = useVideoVolume({ videoRef, setVolume });
  useVideoMetadata({ quality, setDuration, velocity, videoRef });
  useVideoProgress({
    videoRef,
    setBufferedWidth,
    setLoading,
  });
  useVideoPlayerSetTime({ setCurrentTime, videoRef });
  const seekVideo = (offset: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime += offset;
    }
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPause(false);
        toggleAnimation();
      } else {
        videoRef.current.pause();
        setIsPause(true);
        toggleAnimation();
      }
    }
  };
  const toggleAnimation = () => {
    setPlayAnimation(true);
    setTimeout(() => {
      setPlayAnimation(false);
    }, 400);
  };

  useVideoControls(
    videoRef,
    togglePlayPause,
    seekVideo,
    handleFullscreen,
    handleVolumeToggle
  );

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.load();
      videoRef.current.play();
      setIsPause(false);
    }
  }, [quality]);
  return (
    <div className="fixed h-full overflow-hidden inset-0 z-[100]">
      <div className="flex justify-center h-full w-full relative">
        <div className="flex items-start absolute top-0 w-full bg-transparent">
          <VideoPlayerHeader
            title={title}
            subtitle={subtitle}
            videoRef={videoRef}
          />
        </div>
        <div className="h-full w-full bg-black">
          {loading && (
            <div className="absolute inset-0 flex justify-center items-center z-10 bg-black bg-opacity-50">
              <Loader height="40" width="40" />
            </div>
          )}
          <video
            onClick={() => togglePlayPause()}
            ref={videoRef}
            autoPlay={true}
            playsInline={true}
            className="!w-full !h-full relative"
          >
            <source
              src={`http://localhost:3000/api/${showType}/video/${activeVideoId}?qualityName=${quality}`}
              type="video/mp4"
            />
          </video>
        </div>
        <VideoPlayerControls
          bufferedWidth={bufferedWidth}
          showType={showType}
          handleVolumeToggle={handleVolumeToggle}
          currentTime={currentTime}
          duration={duration}
          isFullscreen={isFullscreen}
          handleFullscreen={handleFullscreen}
          togglePlayPause={togglePlayPause}
          videoRef={videoRef}
        />
        {playAnimation && <PlayerPlayPauseAnimation />}
      </div>
    </div>
  );
};

export default VideoPlayer;
