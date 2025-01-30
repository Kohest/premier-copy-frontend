import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import React, { FC } from "react";
import { cn } from "../utils/cnUtil";
interface Props {
  size?: "sm" | "lg";
  direction: "left" | "right";
  handleClick: () => void;
  className?: string;
}
const ActionButton: FC<Props> = ({
  direction,
  handleClick,
  className,
  size = "lg",
}) => {
  return (
    <>
      {direction === "left" ? (
        <button
          type="button"
          onClick={handleClick}
          className={cn(
            "z-[5] absolute left-0 top-1/2 h-12 w-12 border border-[1px] bg-[#1d1d1e] border-[hsla(0,0%,100%,.12)] rounded-xl flex justify-center items-center",
            className,
            size === "sm" &&
              "w-12 h-12 border-none bg-transparent opacity-50 hover:opacity-100 transition"
          )}
        >
          {size === "sm" ? <ChevronLeft size={42} /> : <ArrowLeftIcon />}
        </button>
      ) : (
        <button
          type="button"
          onClick={handleClick}
          className={cn(
            "z-[5] absolute right-0 top-1/2 h-12 w-12 border border-[1px] bg-[#1d1d1e] border-[hsla(0,0%,100%,.12)] rounded-xl flex justify-center items-center",
            className,
            size === "sm" &&
              "w-12 h-12 border-none bg-transparent opacity-50 hover:opacity-100 transition"
          )}
        >
          {size === "sm" ? <ChevronRight size={42} /> : <ArrowRightIcon />}
        </button>
      )}
    </>
  );
};

export default ActionButton;
