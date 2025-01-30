import { useEffect } from "react";
interface Props {
  videoRef: React.RefObject<HTMLVideoElement>;
  setBufferedWidth: React.Dispatch<React.SetStateAction<number>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
export const useVideoProgress = ({
  videoRef,
  setBufferedWidth,
  setLoading,
}: Props) => {
  useEffect(() => {
    const updateBufferedWidth = () => {
      if (!videoRef.current) return;
      const video = videoRef.current;
      const buffered = video.buffered;
      const duration = video.duration;
      if (buffered.length > 0 && duration > 0) {
        const bufferedEnd = buffered.end(buffered.length - 1);
        const bufferedPercentage = (bufferedEnd / duration) * 100;
        setBufferedWidth(bufferedPercentage);
      }
    };
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener("progress", updateBufferedWidth);
      videoElement.addEventListener("waiting", () => setLoading(true));
      videoElement.addEventListener("playing", () => setLoading(false));
    }
    return () => {
      if (videoElement) {
        videoElement.removeEventListener("progress", updateBufferedWidth);
        videoElement.removeEventListener("waiting", () => setLoading(true));
        videoElement.removeEventListener("playing", () => setLoading(false));
      }
    };
  }, []);
};
