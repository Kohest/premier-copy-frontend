import React, { FC } from "react";
interface Props {
  link: string;
  icon: JSX.Element;
}
const SocialMediaItemSm: FC<Props> = ({ icon, link }) => {
  return (
    <li className="mr-3 bg-[#292929] rounded-full flex justify-center items-center hover:bg-[#575757]">
      <a href="/" className="h-10 w-10 flex items-center justify-center">
        {icon}
      </a>
    </li>
  );
};

export default SocialMediaItemSm;
