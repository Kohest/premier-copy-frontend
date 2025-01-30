import React, { FC } from "react";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import { cn } from "../utils/cnUtil";
interface Props {
  age: string;
  className?: string;
}
const AgeRestricted: FC<Props> = ({ age, className }) => {
  return (
    <div className={cn("bottom-6 left-6 absolute z-10", className)}>
      <div className="px-1 bg-[rgba(48,48,48,.5)] h-[20px] text-[#ececec] rounded-sm font-bold text-[12px]">
        {age}+
      </div>
    </div>
  );
};

export default AgeRestricted;
