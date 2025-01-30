import React, { FC } from "react";
import AgeRestricted from "../../../shared/ui/age-restricted";
import FilmScore from "../../../shared/ui/film-score";
import SliderItemImage from "./slider-item-image";
interface Props {
  age: string;
  score: number | null;
  image: string;
  id: string;
}
const SliderItem: FC<Props> = ({ age, image, score, id }) => {
  return (
    <div>
      <div className="border border-[1px] border-[#222] relative mr-3 mt-5">
        <AgeRestricted age={age} />
        {score && <FilmScore score={score} />}
        <SliderItemImage image={image} id={id} />
      </div>
    </div>
  );
};

export default SliderItem;
