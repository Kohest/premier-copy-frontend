import React, { FC } from "react";
interface Props {
  activeEpisodeId: string;
  description: string;
  imagePoster: string;
  duration: string;
  onClick?: () => void;
  episodeNumber: string;
  episodeId: string;
  isAvailable: boolean;
  title: string;
}
const PlayerEpisodesModalItem: FC<Props> = ({
  description,
  activeEpisodeId,
  duration,
  episodeNumber,
  imagePoster,
  onClick,
  isAvailable,
  title,
  episodeId,
}) => {
  return (
    <div
      className="rounded-lg p-2 relative bg-transparent text-left flex max-h-[398px] hover:bg-[#3D4A58]"
      onClick={onClick}
    >
      <div className="min-w-[145px] text-left">
        <div className="pb-[56.25%] relative w-full">
          <div className="rounded-lg absolute overflow-hidden left-0 top-0 w-full h-full">
            <img
              className="object-cover h-full absolute left-0 top-0 w-full"
              src={imagePoster}
              alt={title}
            />
            {activeEpisodeId === episodeId && (
              <div className="absolute left-0 top-0 w-full h-full bg-black opacity-70 flex justify-center items-center">
                <span className="cursor-default text-[14px]">
                  Текущая серия
                </span>
              </div>
            )}
            {!isAvailable && (
              <div className="absolute left-0 top-0 w-full h-full bg-black opacity-70 flex justify-center items-center">
                <span className="cursor-default text-[14px]">Недоступно</span>
              </div>
            )}
            <div className="absolute font-bold bottom-1 text-white p-[2px] right-1 text-[12px] ">
              {duration}
            </div>
          </div>
        </div>
      </div>
      <div className="ml-2 p-2 text-left">
        <div className="text-[#E1E5EA] overflow-hidden text-ellipsis line-clamp-3 mb-1 max-h-[36px] leading-[18px] cursor-default">
          {episodeNumber} серия
        </div>
        <div className="text-[#A7B4C4] overflow-hidden text-ellipsis line-clamp-3 mb-1 max-h-[36px] leading-[18px] max-h-[700px] text-[13px] cursor-default">
          {description}
        </div>
      </div>
    </div>
  );
};

export default PlayerEpisodesModalItem;
