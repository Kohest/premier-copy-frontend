import React, { FC } from "react";
import { Season } from "../../../entities/content/types";
import { cn } from "../../../shared/utils/cnUtil";
interface Props {
  seasons: Season[];
  activeSeason: Season | null;
  setActiveSeason: (season: Season) => void;
}
const SeriesSeasons: FC<Props> = ({
  seasons,
  setActiveSeason,
  activeSeason,
}) => {
  const sortReverse = seasons.slice().reverse();

  return (
    <div className="w-full mb-[2rem]">
      <div className="w-full relative">
        <div className="flex w-full">
          <p className="pr-4 text-[26px] font-[500]">Сезон</p>
          {sortReverse.map((item) => (
            <button
              className={cn(
                "bg-[#292929] flex justify-center items-center h-12 w-12 py-3 px-[18px] mr-3",
                activeSeason === item && "bg-[#f5cf16] text-[#141414]"
              )}
              key={item.number}
              onClick={() => setActiveSeason(item)}
            >
              <span className="font-[500] text-[17px]">{item.number}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeriesSeasons;
