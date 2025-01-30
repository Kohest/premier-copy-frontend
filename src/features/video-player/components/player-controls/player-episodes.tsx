import { List } from "lucide-react";
import React, { FC } from "react";
import { Tooltip } from "react-tooltip";
interface Props {
  isShow: boolean;
  setIsShow: (isShow: boolean) => void;
}
const PlayerEpisodes: FC<Props> = ({ isShow, setIsShow }) => {
  return (
    <>
      <Tooltip id="episodes" content="Серии и сезоны" />
      <div
        onClick={() => setIsShow(!isShow)}
        className="mr-4 h-6 w-6 flex justify-center cursor-pointer items-center bg-transparent cursor-pointer hover:text-gray-500 active:scale-75 hover:blur-[0.7px] active:blur-[0.7px] transition-all"
        data-tooltip-id="episodes"
      >
        <List />
      </div>
    </>
  );
};

export default PlayerEpisodes;
