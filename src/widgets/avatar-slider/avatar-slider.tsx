import React, { FC, useRef } from "react";
import Slider from "react-slick";
import AvatarSliderItem from "./ui/avatar-slider-item";
import ActionButton from "../../shared/ui/slider-action-button";
import { AVATARS_DATA } from "../../shared/constants/avatars-data";
interface Props {
  onAvatarChange: React.Dispatch<React.SetStateAction<string>>;
}
const AvatarSlider: FC<Props> = ({ onAvatarChange }) => {
  let sliderRef = useRef(null);

  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
  };
  return (
    <div className="h-[156px] w-full relative flex items-center justify-center">
      <Slider
        className="w-full h-full"
        {...settings}
        ref={(slider) => {
          sliderRef = slider;
        }}
      >
        {AVATARS_DATA.map((avatar, index) => {
          const Icon2 = AVATARS_DATA[index + 1]
            ? AVATARS_DATA[index + 1].avatarPath
            : null;
          if (index % 2 === 0) {
            return (
              <AvatarSliderItem
                onAvatarChange={onAvatarChange}
                key={avatar.id}
                iconPath1={avatar.avatarPath}
                iconPath2={Icon2}
              />
            );
          }
          return null;
        })}
      </Slider>
      <ActionButton
        size="sm"
        direction="left"
        handleClick={previous}
        className="top-1/2 -left-[15px] -translate-x-1/2 -translate-y-1/2"
      />
      <ActionButton
        size="sm"
        direction="right"
        handleClick={next}
        className="top-1/2 -right-[15px] translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
};

export default AvatarSlider;
