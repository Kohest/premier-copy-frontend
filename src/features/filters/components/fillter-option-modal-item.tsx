import React, { FC } from "react";
import { cn } from "../../../shared/utils/cnUtil";
interface Props {
  option: string;
  checked: boolean;
  onChange: () => void;
}
const FilterOptionModalItem: FC<Props> = ({ option, checked, onChange }) => {
  return (
    <div className="min-w-[8.75rem] w-full py-3 px-4 leading-[24px] text-[#bdbdbd] gap-3 flex items-center cursor-pointer hover:text-[#ececec]">
      <div className="w-full relative">
        <input
          id={option}
          type="checkbox"
          value={option}
          onChange={onChange}
          className="absolute -z-[1] opacity-0"
        />
        <label
          htmlFor={option}
          className={cn(
            "text-[#ececec] inline-flex items-center cursor-pointer"
          )}
        >
          <span
            className={cn(
              "flex-shrink-0 inline-flex relative w-6 items-center mr-3  before:bg-transparent before:border before:border-[hsla(0,0%,100%,.12)]  before:absolute before:w-6 before:h-6 before:rounded-lg hover:before:bg-[#333] hover:before:border-[#ececec] after:content-['✓'] after:text-[#ececec] after:absolute  after:opacity-0 hover:after:opacity-100 after:top-1/2 after:left-1/2  after:-translate-x-1/2 after:-translate-y-1/2",
              checked && "after:opacity-100"
            )}
          />
          <span>{option}</span>
        </label>
      </div>
    </div>
  );
};

export default FilterOptionModalItem;
