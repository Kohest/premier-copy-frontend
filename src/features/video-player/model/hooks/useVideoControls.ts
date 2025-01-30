import { useCallback, useEffect } from "react";

export const useVideoControls = (
  videoRef: React.RefObject<HTMLVideoElement>,
  togglePlayPause: () => void,
  seekVideo: (offset: number) => void,
  handleVolumeToggle: () => void,
  handleFullscreen: () => void
) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      switch (e.code) {
        case "Space":
          togglePlayPause();
          break;
        case "KeyF":
          handleFullscreen();
          break;
        case "ArrowLeft":
          seekVideo(-5);
          break;
        case "ArrowRight":
          seekVideo(5);
          break;
        case "KeyM":
          handleVolumeToggle();
        default:
          break;
      }
    },
    [togglePlayPause, seekVideo, handleFullscreen, handleVolumeToggle]
  );
  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);
};
