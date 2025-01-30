import React, { FC, useRef, useState } from "react";
import { Tooltip } from "react-tooltip";
import { usePlayerStore } from "../../model/store/use-player";
interface Props {
  videoRef: React.RefObject<HTMLVideoElement>;
  bufferedWidth: number;
}
const PlayerDuration: FC<Props> = ({ videoRef, bufferedWidth }) => {
  const durationContainerRef = useRef<HTMLDivElement>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [durationDragging, setDurationDragging] = useState(false);
  const [popupTime, setPopupTime] = useState("00:00");
  const { duration, setDuration, setCurrentTime } = usePlayerStore();
  const calculateProgress = () => {
    if (videoRef.current) {
      const progress =
        (videoRef.current.currentTime / videoRef.current.duration) * 100;
      return progress || 0;
    }
    return 0;
  };

  const handleChangeDuration = (event: React.MouseEvent) => {
    if (videoRef.current && durationContainerRef.current) {
      const containerWidth = durationContainerRef.current.clientWidth;
      const clickX =
        event.pageX - durationContainerRef.current.getBoundingClientRect().left;
      const hoveredTime = (clickX / containerWidth) * duration;
      videoRef.current.currentTime = hoveredTime;
      setCurrentTime(hoveredTime);
    }
  };

  const handleMoveDuration = (e: React.MouseEvent) => {
    if (!videoRef.current || !durationContainerRef.current) return;
    const containerWidth = durationContainerRef.current.offsetWidth;
    const clickX =
      e.pageX - durationContainerRef.current.getBoundingClientRect().left;
    const hoveredTime = (clickX / containerWidth) * duration;
    setPopupTime(
      `${String(Math.floor(hoveredTime / 60)).padStart(2, "0")}:${String(
        Math.floor(hoveredTime % 60)
      ).padStart(2, "0")}`
    );
    setShowPopup(true);
    if (durationDragging) {
      handleChangeDuration(e);
    }
  };
  const handleDurationMouseDown = (e: React.MouseEvent) => {
    setDurationDragging(true);
    handleChangeDuration(e);
  };
  const handleDurationMouseUp = () => {
    setDurationDragging(false);
  };
  const handleDurationMouseLeave = () => {
    setShowPopup(false);
  };

  return (
    <div className="mx-3">
      <Tooltip id="duration" content={popupTime} float />
      <div
        className="relative flex items-center cursor-pointer h-3 w-full"
        ref={durationContainerRef}
        onMouseLeave={handleDurationMouseLeave}
        onClick={handleChangeDuration}
        onMouseDown={handleDurationMouseDown}
        onMouseUp={handleDurationMouseUp}
        onMouseMove={handleMoveDuration}
        data-tooltip-id="duration"
      >
        <div className="flex items-center absolute w-full cursor-pointer z-[3]">
          <div className="w-[1888px] h-2 py-[2px] cursor-pointer z-[3]">
            <div className="h-full relative z-[3]">
              <div className="bg-[rgba(246,246,246,0.3)] absolute w-full h-full bottom-0 cursor-pointer" />
              <div
                className="bg-[rgba(246,246,246,0.5)] absolute h-full bottom-0 cursor-pointer"
                style={{ width: `${bufferedWidth}%` }}
              />
              <div
                className="bg-[rgb(253,221,45)] absolute h-full bottom-0 cursor-pointer"
                style={{ width: `${calculateProgress()}%` }}
              />
            </div>
          </div>
        </div>
        <div className="h-3 absolute top-0 px-[6px] -left-[6px] w-[calc(100%+12px)] z-[3] cursor-pointer">
          <div className="h-3 relative w-full cursor-pointer z-[3]">
            <div
              className="bg-white rounded-[8px] cursor-pointer h-3 w-3 absolute z-[3]"
              style={{ left: `calc(${calculateProgress()}% - 6px)` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerDuration;
