import React, { FC } from "react";
import { cn } from "../utils/cnUtil";
interface Props {
  className?: string;
  children: React.ReactNode;
}
const Container: FC<Props> = ({ children, className }) => {
  return <div className={cn(className, "px-[3.25rem] w-full")}>{children}</div>;
};

export default Container;
