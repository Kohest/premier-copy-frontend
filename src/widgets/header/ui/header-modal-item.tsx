import React, { FC } from "react";
import { Link } from "react-router-dom";
interface Props {
  href: string;
  title: string;
}
const HeaderModalItem: FC<Props> = ({ href, title }) => {
  return (
    <Link
      to={href}
      className="mb-2 bg-[#1a1a1a] text-[#ececec] pt-3 pr-2 pb-3 pl-8 hover:bg-[#333] text-[16px]"
    >
      {title}
    </Link>
  );
};

export default HeaderModalItem;
