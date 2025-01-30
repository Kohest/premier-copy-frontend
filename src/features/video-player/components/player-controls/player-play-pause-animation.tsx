import React from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import { usePlayerStore } from "../../model/store/use-player";

const PlayerPlayPauseAnimation = () => {
  const { isPause } = usePlayerStore();
  return (
    <div className="absolute h-full w-full">
      <div className="flex absolute w-full h-full items-center justify-center">
        <div className="h-20 w-20 flex justify-center items-center rounded-md bg-[rgba(23,28,34,.8)] animate-scaleIn">
          {isPause ? (
            <FaPause className="w-6 h-6" />
          ) : (
            <FaPlay className="w-6 h-6" />
          )}
        </div>
      </div>
    </div>
  );
};

export default PlayerPlayPauseAnimation;
