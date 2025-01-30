import React, { FC } from "react";
import { NavLink } from "react-router-dom";
interface Props {
  label: string;
  link: string;
  onClick?: () => void;
}
const ProfileMenuItem: FC<Props> = ({ label, link, onClick }) => {
  return (
    <li className="py-3" onClick={onClick}>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-transparent relative  before:opacity-100 before:bg-[#fddd2d] before:rounded-xl before:h-12 before:absolute before:top-1/2 before:-translate-y-1/2 before:w-1 before:-left-[36px]"
            : "bg-transparent text-[#8a8a8a] hover:text-[#ececec] transition"
        }
        to={link}
      >
        {label}
      </NavLink>
    </li>
  );
};

export default ProfileMenuItem;
