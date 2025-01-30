import React, { FC, useState } from "react";
import FilterOptions from "./components/filter-options";
import { cn } from "../../shared/utils/cnUtil";
import { ChartBarIncreasing, ChevronDown, ChevronUp } from "lucide-react";
import { useFiltersState } from "../../shared/lib/filters-state";
import { setFilterParams } from "../../shared/lib/set-fitler-params";
interface Props {
  yearsFilterOptions: string[];
}
const Filters: FC<Props> = ({ yearsFilterOptions }) => {
  const [showFilters, setShowFilters] = useState(false);
  const filters = useFiltersState();
  setFilterParams(filters);

  return (
    <section
      className={cn(
        "rounded-2xl px-[20px] pt-[10px] pb-[10px] bg-[#1a1a1a] text-[#ececec] transition-all duration-300",
        showFilters && "pb-[30px]"
      )}
    >
      <div className="flex w-full ">
        <div className="flex items-center">
          <div
            className="flex items-center w-full cursor-pointer"
            onClick={() =>
              filters.setSortBy(
                filters.sortBy === "popular" ? "new" : "popular"
              )
            }
          >
            <div className="w-6 h-6 ml-2">
              <ChartBarIncreasing />
            </div>
            <div className="pl-3 font-[500] ">
              {filters.sortBy === "popular" ? "По популярности" : "По новизне"}
            </div>
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="ml-2 inline-flex gap-2 rounded-xl py-3 px-[20px] h-12 bg-transparent items-center justify-center"
          >
            <div className="w-6 h-6">
              {showFilters ? <ChevronUp /> : <ChevronDown />}
            </div>
            <span className="text-[17px] font-[500] leading-[24px] whitespace-nowrap grow-0">
              {showFilters ? "Скрыть фильтры" : "Показать фильтры"}
            </span>
          </button>
        </div>
      </div>
      {showFilters && (
        <FilterOptions filters={filters} yearsOptions={yearsFilterOptions} />
      )}
    </section>
  );
};

export default Filters;
