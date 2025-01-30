import React, { FC } from "react";
import { cn } from "../../../shared/utils/cnUtil";
import { useFormContext } from "react-hook-form";
interface Props {
  iconPath: string;
  className?: string;
  onAvatarChange: React.Dispatch<React.SetStateAction<string>>;
}
const AvatarSliderButton: FC<Props> = ({
  iconPath,
  className,
  onAvatarChange,
}) => {
  const { setValue, getValues } = useFormContext();
  const isActive = getValues("avatar") === iconPath;
  const handleClick = () => {
    setValue("avatar", iconPath);
    onAvatarChange(iconPath);
  };
  return (
    <button
      type="button"
      onClick={handleClick}
      className={cn(
        "h-[72px] w-[72px] hover:border rounded-full hover:border-[#fddd2d] flex justify-center items-center p-1",
        className,
        isActive && "border border-[#fddd2d] cursor-default pointer-events-none"
      )}
    >
      <img src={iconPath} alt="icon" className="rounded-full h-full w-full" />
    </button>
  );
};

export default AvatarSliderButton;
