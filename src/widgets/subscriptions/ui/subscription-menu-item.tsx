import React, { Dispatch, FC, SetStateAction } from "react";
import { cn } from "../../../shared/utils/cnUtil";
interface Props {
  title: string;
  isActive: boolean;
  onClick: () => void;
}
const SubscriptionMenuItem: FC<Props> = ({ title, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "inline-block relative h-7 min-w-12 rounded-xl bg-transparent w-fit mr-[16px] transition  hover:text-[#ececec] text-[#b8b8b8]",
        isActive && "text-[#ececec]"
      )}
    >
      <span
        className={cn(
          "text-[18px] font-[500] cursor-pointer  before:rounded-[2px] before:h-[2px] before:w-full before:absolute before:inline-block before:-bottom-1",
          isActive && "before:bg-[#fddd2d]"
        )}
      >
        {title}
      </span>
    </button>
  );
};

export default SubscriptionMenuItem;
