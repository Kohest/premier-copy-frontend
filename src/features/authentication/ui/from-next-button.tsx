import React, { FC } from "react";
import { UseFormTrigger } from "react-hook-form";
interface Props {
  setFormProgress: React.Dispatch<React.SetStateAction<number>>;
  trigger: UseFormTrigger<any>;
  progressStep: number;
  formProgress: number;
  fieldsToValidate: string[] | ((formProgress: number) => string[]);
}
const FormNextButton: FC<Props> = ({
  setFormProgress,
  trigger,
  progressStep,
  formProgress,
  fieldsToValidate,
}) => {
  const handleFormFurther = async () => {
    let fields: string[] = [];
    if (typeof fieldsToValidate === "function") {
      fields = fieldsToValidate(formProgress);
    } else {
      fields = fieldsToValidate;
    }
    const isValid = fields.length > 0 ? await trigger(fields) : true;
    isValid && setFormProgress((prev) => prev + progressStep);
  };

  return (
    <button
      className="inline-flex bg-[#f5cf16] text-[#141414] w-[340px] mb-[20px] h-12 gap-2 py-3 px-[20px] rounded-2xl justify-center items-center"
      onClick={handleFormFurther}
    >
      <span className="font-[500] text-[17px]">Продолжить</span>
    </button>
  );
};

export default FormNextButton;
