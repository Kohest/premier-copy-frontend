import React, { FC } from "react";
import { Link } from "react-router-dom";
import { cn } from "../../../shared/utils/cnUtil";
interface Props {
  href: string;
  image: string | React.ReactNode;
  title: string;
  className?: string;
}
const NavItem: FC<Props> = ({ href, image, title, className }) => {
  return (
    <li
      className={cn(
        className,
        "min-w-[4.5rem] max-w-[140px] mr-1 group/navigation"
      )}
    >
      <Link to={href}>
        <div className="h-6 w-6 mx-auto mb-[5px]">
          {typeof image === "string" ? (
            <img
              className="transition opacity-60 h-full object-contain w-full group-hover/navigation:opacity-100"
              src={image}
              alt={title}
            />
          ) : (
            image
          )}
        </div>
        <p className="transition text-[#bdbdbd] text-xs text-center group-hover/navigation:text-white">
          {title}
        </p>
      </Link>
    </li>
  );
};

export default NavItem;
