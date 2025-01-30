import { Ellipsis } from "lucide-react";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import AgeRestricted from "../../../shared/ui/age-restricted";
import FilmScore from "../../../shared/ui/film-score";
import { FaPlay } from "react-icons/fa";
import { cn } from "../../../shared/utils/cnUtil";
interface Props {
  age: string;
  score: number | null;
  image: string;
  id: string;
  title: string;
  genre?: string;
  type?: "vertical" | "horizontal";
}
const FilmSliderSmItem: FC<Props> = ({
  age,
  genre,
  image,
  id,
  score,
  title,
  type = "horizontal",
}) => {
  return (
    <div
      className={cn(
        "w-[calc(100%-.8rem)] mr-[16px] group/filmSm h-fit",
        type === "vertical" && "w-[196px] -mb-[36px] mr-0 h-fit"
      )}
    >
      <Link className="max-w-full relative block h-full" to={`/show/${id}`}>
        <div
          className={cn(
            "mb-3 pt-[59.25%] cursor-pointer h-full relative",
            type === "vertical" &&
              "pt-[139.8%] hover:shadow-[0rem_.5rem_2rem_#000] transition"
          )}
        >
          <AgeRestricted age={age} className="right-6 left-100 top-6 z-[5]" />
          {score && <FilmScore score={score} />}
          <figure className="block h-full absolute left-0 overflow-hidden top-0 w-full group-hover/filmSm:scale-105 transition duration-500">
            <div className="relative w-full h-full">
              <img
                src={image}
                alt="image"
                className="object-cover w-full h-full"
              />
              <div className="z-10 opacity-0 transition group-hover/filmSm:opacity-100 h-[60px] w-[60px] flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(48,48,48,.8)]">
                <FaPlay />
              </div>
            </div>
          </figure>
        </div>
        <div className="opacity-0 flex transition items-center group-hover/filmSm:opacity-100">
          <div className="z-[10] flex w-full overflow-hidden whitespace-nowrap">
            <span className="block">{title}</span>
            {genre && (
              <div className="text-[#8a8a8a] before:content-['/'] inline-block mx-1">
                {genre}
              </div>
            )}
          </div>
          {type === "horizontal" && (
            <div className="relative z-[10]">
              <button className="rounded-xl w-10 h-10 bg-[#292929] inline-flex items-center justify-center">
                <Ellipsis />
              </button>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default FilmSliderSmItem;
