import { ArrowLeft } from "lucide-react";
import React, { FC } from "react";
import { usePlayerModalStore } from "../../../shared/store/use-player-modal";
interface Props {
  title: string;
  subtitle?: string;
  videoRef: React.RefObject<HTMLVideoElement>;
}
const VideoPlayerHeader: FC<Props> = ({ title, subtitle, videoRef }) => {
  const skipToTime = (time: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = time;
    }
  };
  const { toggleModal } = usePlayerModalStore();
  return (
    <div className="flex items-center justify-start pt-3 pl-3 flex-1 flex-row z-20">
      <div
        className="mr-[8px] cursor-pointer"
        onClick={() => toggleModal(false)}
      >
        <ArrowLeft className="w-6 h-6" />
      </div>
      <div className="text-white text-center w-full mr-[8px]">
        <p
          className="text-[28px] font-[500] leading-[33px] text-center"
          onClick={() => skipToTime(200)}
        >
          {title}
        </p>
        <p className="text-[20px] leading-[24px] pt-[13px] text-center">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default VideoPlayerHeader;
