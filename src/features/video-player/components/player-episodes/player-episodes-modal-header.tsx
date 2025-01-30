import { ChevronLeft, X } from "lucide-react";
import React, { FC } from "react";
interface Props {
  seasonNumber: string;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
  setIsOpenSeasons: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenSeasons: boolean;
}
const PlayerEpisodesModalHeader: FC<Props> = ({
  seasonNumber,
  setIsShow,
  isOpenSeasons,
  setIsOpenSeasons,
}) => {
  return (
    <div className="text-white text-[13px] font-bold h-10 pt-1 pr-2 pb-1 pl-4 flex items-center justify-between">
      {isOpenSeasons === false && setIsOpenSeasons && (
        <button
          className="pr-1 flex items-center font-bold h-[32px] -ml-2 bg-transparent w-auto"
          onClick={() => setIsOpenSeasons(true)}
        >
          <ChevronLeft />
          <span>{seasonNumber} сезон</span>
        </button>
      )}
      {isOpenSeasons === true && (
        <div className="pr-1 flex items-center font-bold h-[32px] -ml-2 bg-transparent w-auto">
          <span>Выбор сезона</span>
        </div>
      )}
      <button
        className="h-[32px] w-[32px] flex items-center justify-center bg-transparent z-10"
        onClick={() => setIsShow(false)}
      >
        <X />
      </button>
    </div>
  );
};

export default PlayerEpisodesModalHeader;
