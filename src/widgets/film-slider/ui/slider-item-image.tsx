import React, { FC } from "react";
import { Link } from "react-router-dom";
interface Props {
  id: string;
  image: string;
}
const SliderItemImage: FC<Props> = ({ image, id }) => {
  return (
    <Link to={`show/${id}`} className="min-h-[318px] pt-[56.25%] w-full block">
      <img
        src={image}
        alt="image"
        className="h-full w-full absolute top-0 object-cover left-0"
      />
    </Link>
  );
};

export default SliderItemImage;
