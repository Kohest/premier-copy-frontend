import React, { FC } from "react";
import { FaGear } from "react-icons/fa6";
import { Tooltip } from "react-tooltip";
interface Props {
  isShow: boolean;
  setIsShow: (isShow: boolean) => void;
}
const PlayerSettings: FC<Props> = ({ isShow, setIsShow }) => {
  return (
    <>
      <Tooltip id="gear" content="Настройки" />
      <div
        onClick={() => setIsShow(!isShow)}
        className="mr-4 h-6 w-6 flex justify-center cursor-pointer items-center bg-transparent hover:rotate-90 cursor-pointer hover:text-gray-500 active:scale-75 hover:blur-[0.7px] active:blur-[0.7px] transition-all"
        data-tooltip-id="gear"
      >
        <FaGear />
      </div>
    </>
  );
};

export default PlayerSettings;
