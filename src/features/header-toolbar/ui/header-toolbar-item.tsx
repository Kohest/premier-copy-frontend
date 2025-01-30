import React, { FC } from "react";
import { Link } from "react-router-dom";
interface Props {
  title: string;
  link: string;
}
const HeaderToolbarItem: FC<Props> = ({ link, title }) => {
  return (
    <Link to={link}>
      <button className="rounded-xl h-10 px-6 bg-transparent hover:bg-[#575757] transition">
        <span className="font-[500]">{title}</span>
      </button>
    </Link>
  );
};

export default HeaderToolbarItem;
