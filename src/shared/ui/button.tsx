import React, { FC } from "react";
import { cn } from "../utils/cnUtil";
interface Props {
  text: string;
  onClick?: VoidFunction;
  className?: string;
  disabled?: boolean;
  type?: "primary" | "secondary";
}
const Button: FC<Props> = ({
  onClick,
  text,
  className,
  disabled = false,
  type = "secondary",
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "rounded-2xl  text-[17px] gap-2 h-[3rem] py-3 px-[20px] bg-[#292929] inline-flex cursor-pointer inline-flex justify-center items-center",
        className,
        type === "primary" && "bg-[#fddd2d]"
      )}
    >
      <span
        className={cn(
          "text-[#ececec] font-[600] leading-[24px]",
          type === "primary" && "text-[#141414]"
        )}
      >
        {text}
      </span>
    </button>
  );
};

export default Button;
