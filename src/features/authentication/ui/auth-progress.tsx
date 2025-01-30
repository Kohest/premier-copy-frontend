import React, { FC } from "react";
interface Props {
  formProgress: number;
}
const AuthProgress: FC<Props> = ({ formProgress }) => {
  return (
    <div className="max-w-[522px] mx-auto mt-6">
      <div className="bg-[rgba(48,48,48,.5)] h-1 rounded-xl overflow-hidden">
        <div
          className="bg-[#fddd2d] h-full rounded-xl transition-all duration-500 ease-in-out"
          style={{ width: `${formProgress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default AuthProgress;
