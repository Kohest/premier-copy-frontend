import React, { FC } from "react";
import { cn } from "../../../shared/utils/cnUtil";
interface Props {
  className?: string;
  image: string;
  type: "small" | "large";
  title: string;
  subtitle?: string;
}
const SubscriptionAdvantageItem: FC<Props> = ({
  image,
  type,
  className,
  subtitle,
  title,
}) => {
  return (
    <figure
      className={cn(
        "flex-[0_1_calc(50%-16px/2)] p-8 h-[400px] bg-[#1d1d1d] rounded-xl min-w-[460px] w-[460px] relative",
        type === "small" && "h-[274px]",
        className
      )}
    >
      <img
        className={cn(
          "w-full h-[360px] absolute right-0 bottom-0 object-cover",
          type === "small" && "h-[273px] w-[273px]"
        )}
        style={{
          objectPosition: "center top",
        }}
        src={image}
        alt="show"
      />
      <figcaption className="max-w-[400px] flex flex-col">
        <h1 className="text-[26px] font-bold leading-[32px]">{title}</h1>
        <span className="text-[#bdbdbd] mt-2 leading-[24px]">{subtitle}</span>
      </figcaption>
    </figure>
  );
};

export default SubscriptionAdvantageItem;
