import { Maximize, Minimize } from "lucide-react";
import React, { FC } from "react";
import { Tooltip } from "react-tooltip";
interface Props {
  handleFullscreen: () => void;
  isFullscreen: boolean;
}
const PlayerFullscreen: FC<Props> = ({ handleFullscreen, isFullscreen }) => {
  return (
    <>
      <button
        onClick={handleFullscreen}
        className="flex items-center h-6 w-6 justify-center bg-transparent"
        data-tooltip-id="fullscreen"
      >
        {isFullscreen ? <Minimize /> : <Maximize />}
      </button>
      <Tooltip
        id="fullscreen"
        content={
          isFullscreen
            ? "Выйти из полноэкранного режима (F)"
            : "Во весь экран (F)"
        }
        place="top-start"
      />
    </>
  );
};

export default PlayerFullscreen;
