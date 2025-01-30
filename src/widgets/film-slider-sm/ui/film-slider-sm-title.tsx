import { ChevronRight } from "lucide-react";
import React, { FC } from "react";
import { Link } from "react-router-dom";
interface Props {
  title: string;
  link: string;
}
const FilmSliderSmTitle: FC<Props> = ({ link, title }) => {
  return (
    <div className="mb-[20px] main-container">
      <Link
        to={link}
        className="text-[#ececec] flex items-center group/slider_title relative"
      >
        <h2 className="text-[26px] font-[600] group-hover/slider_title:text-[#fddd2d] transition relative ">
          {title}
          <ChevronRight
            size={26}
            className="flex text-[#ececec] absolute group-hover/slider_title:text-[#fddd2d] transition -right-7 top-1/4"
          />
        </h2>
      </Link>
    </div>
  );
};

export default FilmSliderSmTitle;
