import React, { FC } from "react";
import AvatarSliderButton from "./avatar-slider-button";
interface Props {
  iconPath1: string;
  iconPath2?: string | null;
  onAvatarChange: React.Dispatch<React.SetStateAction<string>>;
}
const AvatarSliderItem: FC<Props> = ({
  iconPath1,
  iconPath2,
  onAvatarChange,
}) => {
  return (
    <div className="h-full w-[72px] mr-2 p-[2px]">
      <div className="flex h-full flex-col justify-start">
        <AvatarSliderButton
          iconPath={iconPath1}
          onAvatarChange={onAvatarChange}
        />
        {iconPath2 && (
          <AvatarSliderButton
            className="mt-2"
            iconPath={iconPath2}
            onAvatarChange={onAvatarChange}
          />
        )}
      </div>
    </div>
  );
};

export default AvatarSliderItem;
