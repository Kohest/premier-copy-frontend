import React, { FC, useRef } from "react";
import SeriesSliderItem from "./ui/series-slider-item";
import Slider from "react-slick";
import ActionButton from "../../shared/ui/slider-action-button";
import { Season } from "../../entities/content/types";
import { formatServerUrl } from "../../shared/utils/formatServerUrl";
import { cn } from "../../shared/utils/cnUtil";
interface Props {
  activeSeason: Season;
  isAnySubscriptionsAvailable: boolean;
  seasons: Season[];
}
const SeriesSlider: FC<Props> = ({
  activeSeason,
  seasons,
  isAnySubscriptionsAvailable,
}) => {
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
    slidesToShow: 5.5,
    centerMode: false,
    slidesToScroll: 1,
    autoplay: false,
  };
  return (
    <div className="w-full relative group/seriesSlider">
      <Slider
        className="-mr-[3.25rem]"
        {...settings}
        ref={(slider) => {
          sliderRef = slider;
        }}
      >
        {activeSeason &&
          activeSeason.episodes.map((episode) => (
            <SeriesSliderItem
              isAnySubscriptionsAvailable={isAnySubscriptionsAvailable}
              seasons={seasons}
              seasonNumber={activeSeason.number}
              episodeNumber={episode.number}
              key={episode.id}
              description={episode.description}
              duration={episode.duration}
              id={episode.id}
              image={formatServerUrl(episode.posterUrl)}
              isFree={episode.isFree}
              title={episode.title}
            />
          ))}
      </Slider>
      <ActionButton
        direction="left"
        handleClick={previous}
        className={cn(
          "transition ml-[3.5rem] !top-[20%] opacity-0 group-hover/seriesSlider:opacity-100 transition",
          activeSeason?.episodes.length < 6 && "hidden"
        )}
      />
      <ActionButton
        direction="right"
        handleClick={next}
        className={cn(
          "mr-[3.5rem] !top-[20%] opacity-0 group-hover/seriesSlider:opacity-100 transition",
          activeSeason?.episodes.length < 6 && "hidden"
        )}
      />
    </div>
  );
};

export default SeriesSlider;
