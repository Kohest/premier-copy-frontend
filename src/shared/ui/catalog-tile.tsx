import React, { FC } from "react";
import { Link } from "react-router-dom";
interface Props {
  title: string;
  image: string;
  link: string;
}
const CatalogTile: FC<Props> = ({ image, title, link }) => {
  return (
    <div className="w-[calc(25%-.75rem)]">
      <Link
        to={link}
        className="h-[11.8vw] py-4 px-6 max-h-[229px] block relative overflow-hidden"
      >
        <div className="relative z-[2] flex justify-between">
          <span className="text-[26px] font-bold">{title}</span>
        </div>
        <picture>
          <img
            src={image}
            alt="image"
            className="hover:scale-110 transition duration-500 absolute block bottom-0 h-full right-0 w-full object-cover"
            style={{
              objectPosition: "right bottom",
            }}
          />
        </picture>
      </Link>
    </div>
  );
};

export default CatalogTile;
