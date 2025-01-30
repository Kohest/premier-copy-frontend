import React, { FC } from "react";
import { Link } from "react-router-dom";
interface Props {
  link: string;
  image: string;
}
const CollectionTile: FC<Props> = ({ image, link }) => {
  return (
    <Link to={link} className="block h-fit w-full relative">
      <div className="pt-[56.25%] cursor-pointer relative">
        <figure className="h-full block absolute top-0 left-0 w-full">
          <picture className="contents">
            <img
              src={image}
              alt="tile"
              className="block w-full h-full object-cover absolute hover:scale-105 transition duration-500"
            />
          </picture>
        </figure>
      </div>
    </Link>
  );
};

export default CollectionTile;
