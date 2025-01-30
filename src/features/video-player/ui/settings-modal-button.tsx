import React, { FC } from "react";
import { cn } from "../../../shared/utils/cnUtil";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
interface Props {
  className?: string;
  Icon?: JSX.Element;
  text: string;
  onClick?: () => void;
  isForward?: boolean;
  isDisabled?: boolean;
  isBack?: boolean;
  forwardText?: string;
}
const SettingsModalButton: FC<Props> = ({
  text,
  Icon,
  className,
  onClick,
  isForward,
  isDisabled,
  isBack,
  forwardText,
}) => {
  return (
    <button
      disabled={isDisabled}
      className={cn(
        "flex items-center text-[#E1E5EA] cursor-pointer py-[11px] px-4 w-full leading-[18px] h-12 bg-transparent disabled:cursor-default",
        className
      )}
      onClick={onClick}
    >
      {isBack && (
        <span className="w-6 h-6 -mr-6">
          <ChevronLeft />
        </span>
      )}
      <div className="h-6 w-6 mr-2 text-[#E1E5EA]">{Icon}</div>
      <span className="flex-1 text-left">{text}</span>
      {isDisabled && (
        <span className="w-6 h-6">
          <Check size={20} />
        </span>
      )}
      <span className="flex items-center justify-center">
        {isForward && (
          <>
            <span className="flex items-center gap-[3px] mr-2">
              {forwardText}
            </span>

            <span className="w-6 h-6">
              <ChevronRight />
            </span>
          </>
        )}
      </span>
    </button>
  );
};

export default SettingsModalButton;
