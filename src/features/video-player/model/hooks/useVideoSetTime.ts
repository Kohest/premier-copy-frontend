import { useEffect } from "react";

interface Props {
  videoRef: React.RefObject<HTMLVideoElement>;
  setCurrentTime: (time: number) => void;
}
export const useVideoPlayerSetTime = ({ setCurrentTime, videoRef }: Props) => {
  useEffect(() => {
    const updateCurrentTime = () => {
      if (videoRef.current) {
        setCurrentTime(videoRef.current.currentTime);
      }
    };
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener("timeupdate", updateCurrentTime);
    }
    return () => {
      if (videoElement) {
        videoElement.removeEventListener("timeupdate", updateCurrentTime);
      }
    };
  }, [setCurrentTime]);
};
