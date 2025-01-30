import { useCallback } from "react";
interface Props {
  videoRef: React.RefObject<HTMLVideoElement>;
  setVolume: (volume: number) => void;
}
interface ReturnProps {
  handleVolumeToggle: () => void;
}
export const useVideoVolume = ({ videoRef, setVolume }: Props): ReturnProps => {
  const handleVolumeToggle = useCallback(() => {
    if (videoRef.current) {
      const newVolume = videoRef.current.volume === 0 ? 100 : 0;
      videoRef.current.volume = newVolume / 100;
      setVolume(newVolume);
    }
  }, [videoRef, setVolume]);
  return { handleVolumeToggle };
};
