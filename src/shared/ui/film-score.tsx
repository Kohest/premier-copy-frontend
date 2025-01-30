import React, { FC } from "react";
import { FaPlay } from "react-icons/fa";
interface Props {
  score: number;
}
const FilmScore: FC<Props> = ({ score }) => {
  return (
    <div className="absolute left-6 top-6 z-[5] flex text-[#ececec] bg-[rgba(48,48,48,.5)] rounded-sm px-1 flex items-center gap-1 z-10">
      <FaPlay size={10} />
      <span className="text-[12px]">{score}</span>
    </div>
  );
};

export default FilmScore;
