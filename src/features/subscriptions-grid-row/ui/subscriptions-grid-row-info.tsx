import React, { FC } from "react";
import { cn } from "../../../shared/utils/cnUtil";
interface Props {
  logo: string;
  image?: string;
  text: string;
}
const SubscriptionsGridRowInfo: FC<Props> = ({ image, text, logo }) => {
  return (
    <div className="relative before:-bottom-[5.125rem] before:bg-[#0f0f10] before:-left-[18.75rem] before:absolute before:-top-[2.5rem] before:z-10">
      <div className="bg-[#060606] min-h-[20rem] p-[2.5rem] relative">
        <div className="mb-[1.5rem] h-[1.5rem]">
          <img src={logo} alt="title" className="max-h-full" />
        </div>
        <div
          className={cn(
            "mb-[3rem] text-[1rem] text-[#ececec]",
            image && "line-clamp-3"
          )}
        >
          {text}
        </div>
        {image && <img src={image} alt="logo" className="block max-h-[4rem]" />}
      </div>
    </div>
  );
};

export default SubscriptionsGridRowInfo;
