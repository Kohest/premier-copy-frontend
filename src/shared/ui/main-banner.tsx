import React, { FC } from "react";
import { Link } from "react-router-dom";
interface Props {
  showId: string;
  title: string;
  subtitle: string;
  image: string;
}
const MainBanner: FC<Props> = ({ showId, subtitle, title, image }) => {
  return (
    <div className="w-full py-[26px]">
      <div className="h-[378px] flex relative">
        <div className="absolute inset-0 absolute">
          <img src={image} alt={title} className="h-full object-cover w-full" />
        </div>
        <div className="z-[10] max-w-[1068px] pl-[48px] flex justify-center items-center pt-[27px] pb-[27px] pl-10">
          <div className="max-w-[680px]">
            <h4 className="text-left text-[40px] font-bold">{title}</h4>
            <p className="mt-2 text-left text-[24px] ">{subtitle}</p>
            <div className="mt-[32px]">
              <Link
                to={`/show/${showId}`}
                className="flex justify-center items-center w-[274px] gap-2 h-12 py-[12px] px-[20px] inline-flex rounded-2xl bg-[#fddd2d] text-[#141414]"
              >
                <span className="font-[500] text-xl">Смотреть</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
