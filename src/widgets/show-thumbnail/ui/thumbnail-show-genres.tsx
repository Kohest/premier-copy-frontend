import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Genre } from "../../../entities/content/types";
import { translateGenres } from "../../../shared/utils/translateGenres";

interface Props {
  releaseYear?: string;
  genre?: Genre;
  country?: string;
  seasonsCount?: string;
  ageRating?: string;
}
const ThumbnailShowGenres: FC<Props> = ({
  ageRating,
  country,
  genre,
  releaseYear,
  seasonsCount,
}) => {
  return (
    <div className="mb-[18px] flex justify-start">
      {releaseYear && (
        <div className="mr-[18px] text-[#8a8a8a] mb-3">
          <Link to={"/"} className="border-b border-[#8c8c8c] text-[18px]">
            {releaseYear}
          </Link>
        </div>
      )}
      {genre && (
        <div className="mr-[18px] text-[#8a8a8a] mb-3">
          <Link to={"/"} className="border-b border-[#8c8c8c] text-[18px]">
            {translateGenres([genre])[0]}
          </Link>
        </div>
      )}
      {country && (
        <div className="mr-[18px] text-[#8a8a8a] mb-3">
          <Link to={"/"} className="border-b border-[#8c8c8c] text-[18px]">
            {country}
          </Link>
        </div>
      )}
      {seasonsCount && (
        <div className="mr-[18px] text-[#8a8a8a] mb-3 text-[18px]">
          {seasonsCount} сезона
        </div>
      )}
      {ageRating && (
        <div className="mr-[18px] text-[#8a8a8a] mb-3 text-[18px]">
          {ageRating}+
        </div>
      )}
    </div>
  );
};

export default ThumbnailShowGenres;
