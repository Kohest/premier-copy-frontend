import React, { FC } from "react";
import { cn } from "../../../shared/utils/cnUtil";
interface Props {
  title: string;
  subtitle: string;
  className?: string;
}
const ShowPageDescriptionItem: FC<Props> = ({ title, subtitle, className }) => {
  return (
    <div className={cn("mb-6 w-[154px] text-[16px]", className)}>
      <h3 className="text-[#8a8a8a] mb-1">{title}</h3>
      <div>{subtitle}</div>
    </div>
  );
};

export default ShowPageDescriptionItem;
