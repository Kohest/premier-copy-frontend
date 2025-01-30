import React, { FC } from "react";
import { Link } from "react-router-dom";
interface Props {
  link: string;
  image: string;
}
const SocialMediaItem: FC<Props> = ({ image, link }) => {
  return (
    <li className="h-10 bg-[#292929] cursor-pointer flex rounded-xl hover:bg-[#575757]">
      <Link
        to={link}
        className="h-full w-full flex justify-center items-center"
      >
        <img src={image} alt="image" className="h-[23px] w-[90px]" />
      </Link>
    </li>
  );
};

export default SocialMediaItem;
