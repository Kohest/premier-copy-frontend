import React, { FC, useEffect, useRef, useState } from "react";
import { FaVolumeDown, FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import { usePlayerStore } from "../../model/store/use-player";
interface Props {
  videoRef: React.RefObject<HTMLVideoElement>;
  handleVolumeToggle: () => void;
}
const PlayerVolume: FC<Props> = ({ videoRef, handleVolumeToggle }) => {
  const volumeRef = useRef<HTMLDivElement>(null);
  const { volume, setVolume } = usePlayerStore();
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    updateVolume(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      updateVolume(e.clientX);
    }
  };
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };
  const updateVolume = (clientX: number) => {
    if (!volumeRef.current || !videoRef.current) return;
    const rect = volumeRef.current.getBoundingClientRect();
    const clickX = rect.right - clientX;
    const newVolume = 100 - (clickX / rect.width) * 100;
    const clampedVolume = Math.floor(Math.max(0, Math.min(100, newVolume)));
    setVolume(clampedVolume);
  };

  useEffect(() => {
    const videoElement = videoRef.current;
    videoElement!.volume = volume / 100;
  }, [volume, setVolume]);
  return (
    <div
      className="flex items-center relative z-[3] group/volume -mr-14 hover:mr-2 transition-all duration-300"
      onMouseLeave={handleMouseLeave}
    >
      <Tooltip
        id="volume"
        content={volume === 0 ? "Включить звук (M)" : `Громкость: ${volume}%`}
        place="top-end"
      />
      <button
        data-tooltip-id="volume"
        className="flex h-6 w-6 justify-center items-center bg-transparent"
        onClick={handleVolumeToggle}
      >
        {volume === 0 ? (
          <FaVolumeMute className="h-6 w-6" />
        ) : volume < 50 ? (
          <FaVolumeDown className="h-6 w-6" />
        ) : (
          <FaVolumeUp className="h-6 w-6" />
        )}
      </button>
      <div className="mr-4 w-[60px] ml-3 relative animate-slideIn transform scale-x-0 origin-left transition-transform duration-300 group-hover/volume:scale-x-100">
        <div
          className="w-full bg-[rgba(246,246,246,0.3)] mr-3 cursor-pointer h-1  z-[3]"
          ref={volumeRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          <div className="h-[20px] absolute w-full -translate-y-1/2 cursor-pointer" />
          <div
            className="bg-[rgb(253,221,45)] absolute h-1 left-0 cursor-pointer z-[3]"
            style={{ width: `${volume}%` }}
          />
          <div
            className="bg-[rgb(253,221,45)] absolute h-3 w-3 -top-1 border rounded-[8px] z-[3]"
            style={{ left: `calc(${volume}% - 6px)` }}
          />
        </div>
      </div>
    </div>
  );
};

export default PlayerVolume;
