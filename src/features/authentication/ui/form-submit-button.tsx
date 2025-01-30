import React, { FC } from "react";
interface Props {
  text?: string;
  onClick?: VoidFunction;
}
const FormSubmitButton: FC<Props> = ({ text = "Завершить", onClick }) => {
  return (
    <button
      onClick={onClick}
      className="inline-flex bg-[#f5cf16] text-[#141414] w-[340px] mb-[20px] h-12 gap-2 py-3 px-[20px] rounded-2xl justify-center items-center"
    >
      <span className="font-[500] text-[17px]">{text}</span>
    </button>
  );
};

export default FormSubmitButton;
