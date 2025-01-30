import React, { FC } from "react";
import { Link } from "react-router-dom";
interface Props {
  title: string;
  href: string;
}
const ColumnItem: FC<Props> = ({ href, title }) => {
  return (
    <li className="mb-2">
      <Link to={href} className="text-[#8a8a8a] font-normal hover:text-white">
        {title}
      </Link>
    </li>
  );
};

export default ColumnItem;
