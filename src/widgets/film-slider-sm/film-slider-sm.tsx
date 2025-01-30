import React, { FC, useRef } from "react";
import FilmSliderSmTitle from "./ui/film-slider-sm-title";
import Slider from "react-slick";
import FilmSliderSmItem from "./ui/film-slider-sm-item";
import ActionButton from "../../shared/ui/slider-action-button";
import { IContentItem } from "../../entities/content/types";
import { formatServerUrl } from "../../shared/utils/formatServerUrl";
interface Props {
  titleLink: string;
  title: string;
  sliderItems: IContentItem[];
}
const FilmSliderSm: FC<Props> = ({ sliderItems, title, titleLink }) => {
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
    slidesToShow: 5,
    centerMode: true,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
  };

  return (
    <div className="w-full">
      <FilmSliderSmTitle link={titleLink} title={title} />
      <div className="relative group/mainFilmSm">
        <Slider
          {...settings}
          ref={(slider) => {
            sliderRef = slider;
          }}
        >
          {sliderItems.map((item) => (
            <FilmSliderSmItem
              id={item.id}
              age={item.ageRating}
              genre={item.genres[0]?.name || ""}
              image={formatServerUrl(item.posterUrl)}
              score={item.averageRating._avg.rating}
              title={item.title}
              key={item.title}
            />
          ))}
        </Slider>
        <ActionButton
          direction="left"
          handleClick={previous}
          className="ml-[3.5rem] -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover/mainFilmSm:opacity-100 transition"
        />
        <ActionButton
          direction="right"
          handleClick={next}
          className="mr-[3.5rem] -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover/mainFilmSm:opacity-100 transition"
        />
      </div>
    </div>
  );
};

export default FilmSliderSm;
