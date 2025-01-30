import React, { FC } from "react";
import { FaPlay } from "react-icons/fa";
interface Props {
  averageRating: number;
}
const ThumbnailShowScore: FC<Props> = ({ averageRating }) => {
  return (
    <div
      className="mb-[18px] inline-grid gap-2 min-h-6 "
      style={{ gridAutoFlow: "column" }}
    >
      <div className="bg-[#222] h-6 px-2 gap-1 flex items-center rounded-md">
        <FaPlay size={12} />
        <span className="#ececec font-[500] text-[12px]">{averageRating}</span>
      </div>
    </div>
  );
};

export default ThumbnailShowScore;
