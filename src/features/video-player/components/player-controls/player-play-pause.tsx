import React, { FC } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import { usePlayerStore } from "../../model/store/use-player";
interface Props {
  togglePlayPause: () => void;
}
const PlayerPlayPause: FC<Props> = ({ togglePlayPause }) => {
  const { isPause } = usePlayerStore();

  return (
    <div className="flex mr-[16px] z-[3]">
      <button
        data-tooltip-id="play"
        className="w-6 h-6 flex items-center justify-center bg-transparent"
        onClick={togglePlayPause}
      >
        {isPause ? <FaPlay /> : <FaPause />}
      </button>
      <Tooltip
        id="play"
        content={isPause ? "Воспроизвести (Пробел)" : "Пауза (Пробел)"}
        place="top-end"
      />
    </div>
  );
};

export default PlayerPlayPause;
