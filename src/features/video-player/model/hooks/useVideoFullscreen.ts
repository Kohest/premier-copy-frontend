import { useCallback, useState } from "react";
type ReturnProps = {
  isFullscreen: boolean;
  handleFullscreen: () => void;
};
export const useVideoFullscreen = (): ReturnProps => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleFullscreen = useCallback(() => {
    const playerContainer = document.querySelector(".fixed");
    if (!document.fullscreenElement) {
      playerContainer?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  }, []);
  return {
    isFullscreen,
    handleFullscreen,
  };
};
