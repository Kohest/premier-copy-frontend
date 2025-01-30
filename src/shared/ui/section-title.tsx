import React, { FC } from "react";
import { cn } from "../utils/cnUtil";
interface Props {
  className?: string;
  text: string;
}
const SectionTitle: FC<Props> = ({ text, className }) => {
  return (
    <h2 className={cn("mb-6 leading-[32px] text-[26px] font-bold", className)}>
      {text}
    </h2>
  );
};

export default SectionTitle;
