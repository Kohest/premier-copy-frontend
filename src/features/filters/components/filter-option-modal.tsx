import React, { FC } from "react";
import FilterOptionModalItem from "./fillter-option-modal-item";
import { cn } from "../../../shared/utils/cnUtil";
import { FilterReturnTypes } from "../../../shared/lib/filters-state";
interface Props {
  className?: string;
  modalOptions: string[];
  filters: FilterReturnTypes;
  activeFilter: {
    type: string;
    query: string;
    options: string[];
  };
}
const FilterOptionModal: FC<Props> = ({
  className,
  modalOptions,
  filters,
  activeFilter,
}) => {
  const handleFilterChange = (query: string, value: string) => {
    if (query === "genre") filters.toggleGenre(value);
    else if (query === "country") filters.toggleCountry(value);
    else if (query === "year") filters.toggleYear(value);
    else if (query === "category") filters.toggleCategory(value);
  };

  const isChecked = (query: string, value: string): boolean => {
    if (query === "genre") return filters.genre.has(value);
    if (query === "category") return filters.category.has(value);
    if (query === "country") return filters.country.has(value);
    if (query === "year") return filters.year.has(value);
    return false;
  };
  const gridTemplate =
    modalOptions.length === 1
      ? "repeat(1, 1fr)"
      : modalOptions.length <= 2
      ? "repeat(2, 1fr)"
      : modalOptions.length <= 3
      ? "repeat(3, 1fr)"
      : "repeat(4, 1fr)";

  return (
    <div
      className={cn(
        "w-max z-[5] absolute left-4 top-full pt-2 animate-fadeIn",
        className
      )}
    >
      <div className="bg-[#1a1a1a] max-w-full h-full min-w-full w-max drop-shadow-2xl font-[500] rounded-xl">
        <div
          className="grid grid-flow-col overflow-auto"
          style={{
            gridTemplateRows: gridTemplate,
          }}
        >
          {modalOptions.map((item) => (
            <FilterOptionModalItem
              option={item}
              key={item}
              onChange={() => handleFilterChange(activeFilter.query, item)}
              checked={isChecked(activeFilter.query, item)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterOptionModal;
