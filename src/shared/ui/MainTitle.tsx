import React, { FC } from "react";
interface Props {
  text: string;
  size?: "xl" | "2xl";
}
const MainTitle: FC<Props> = ({ text, size = "2xl" }) => {
  return (
    <>
      {size === "xl" && (
        <h1 className="text-white text-[32px] leading-[40px] font-[700]">
          {text}
        </h1>
      )}
      {size === "2xl" && <h1 className="text-[48px] font-bold">{text}</h1>}
    </>
  );
};

export default MainTitle;
