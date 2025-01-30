import { useEffect } from "react";

interface Props {
  videoRef: React.RefObject<HTMLVideoElement>;
  quality: string;
  velocity: number;
  setDuration: (duration: number) => void;
}
export const useVideoMetadata = ({
  videoRef,
  quality,
  velocity,
  setDuration,
}: Props) => {
  useEffect(() => {
    const handleLoadedMetadata = () => {
      if (videoRef.current) {
        setDuration(videoRef.current.duration);
      }
    };
    const videoElement = videoRef.current;
    videoElement!.playbackRate = velocity;
    if (videoElement) {
      videoElement.addEventListener("loadedmetadata", handleLoadedMetadata);
    }
    return () => {
      if (videoElement) {
        videoElement.removeEventListener(
          "loadedmetadata",
          handleLoadedMetadata
        );
      }
    };
  }, [videoRef, quality, velocity, setDuration]);
};
