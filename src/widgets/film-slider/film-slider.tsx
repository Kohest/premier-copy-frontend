import React, { FC, useRef } from "react";
import Slider from "react-slick";
import SliderItem from "./ui/slider-item";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ActionButton from "../../shared/ui/slider-action-button";
import { IContentItem } from "../../entities/content/types";
import { formatServerUrl } from "../../shared/utils/formatServerUrl";
interface Props {
  sliderItems: IContentItem[];
}
const FilmSlider: FC<Props> = ({ sliderItems }) => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2.32,
    centerMode: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <div className="relative w-full">
      <Slider
        {...settings}
        ref={(slider) => {
          sliderRef = slider;
        }}
      >
        {sliderItems.map((item) => (
          <SliderItem
            score={item.averageRating._avg.rating}
            key={item.title}
            age={item.ageRating}
            id={item.id}
            image={formatServerUrl(item.posterUrl)}
          />
        ))}
      </Slider>
      <ActionButton
        direction="left"
        handleClick={previous}
        className="ml-[3.5rem]"
      />
      <ActionButton
        direction="right"
        handleClick={next}
        className="mr-[3.5rem]"
      />
    </div>
  );
};

export default FilmSlider;
