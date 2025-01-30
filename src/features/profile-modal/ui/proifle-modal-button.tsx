import React, { FC } from "react";
interface Props {
  text: string;
  Icon: JSX.Element;
  onClick?: VoidFunction;
}
const ProfileModalButton: FC<Props> = ({ Icon, text, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="w-full flex mx-auto max-w-[552px] py-3 px-4 transition hover:bg-[#333333cb] min-w-fit cursor-pointer rounded-xl"
    >
      <div className="text-[#f9f9f9] h-6 w-6 mr-3 flex items-center justify-center">
        {Icon}
      </div>
      <span className="text-[#ececec] mr-auto text-[16px] font-[500]">
        {text}
      </span>
    </div>
  );
};

export default ProfileModalButton;
