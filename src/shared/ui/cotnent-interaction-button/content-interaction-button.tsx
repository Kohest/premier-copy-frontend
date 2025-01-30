import React, { FC } from "react";
import { cn } from "../../utils/cnUtil";
import { Tooltip } from "react-tooltip";
interface Props {
  Icon: JSX.Element;
  onClick?: VoidFunction;
  text?: string;
  type?: "primary" | "secondary";
  tooltipText?: string;
  className?: string;
}
const ContentInteractionButton: FC<Props> = ({
  Icon,
  onClick,
  tooltipText,
  text,
  className,
  type = "secondary",
}) => {
  return (
    <div className={cn("mr-2 w-auto", className)}>
      {tooltipText && <Tooltip id={tooltipText} content={tooltipText} />}
      <button
        data-tooltip-id={tooltipText}
        className={cn(
          "w-full rounded-xl h-12 py-3 bg-[#292929] text-[#8a8a8a] flex justify-center items-center",
          type === "primary" && "bg-[#fddd2d] text-[#141414]",
          text && "pl-[5px] pr-[15px]"
        )}
        onClick={onClick}
      >
        <div className="w-12 h-12 text-[#ececec] flex justify-center items-center active:scale-75 transition-all">
          {Icon}
        </div>
        {text && (
          <span
            className={cn(
              "font-[500] text-[#ececec] font-[500]",
              type === "primary" && "text-[#141414]"
            )}
          >
            {text}
          </span>
        )}
      </button>
    </div>
  );
};

export default ContentInteractionButton;
