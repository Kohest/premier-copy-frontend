import { ChevronDown } from "lucide-react";
import React, { FC, useState } from "react";
import FilterOptionModal from "./filter-option-modal";
import { cn } from "../../../shared/utils/cnUtil";
import { FilterReturnTypes } from "../../../shared/lib/filters-state";
interface Props {
  yearsOptions: string[];
  filters: FilterReturnTypes;
}
const FilterOptions: FC<Props> = ({ yearsOptions, filters }) => {
  const menuFilters = [
    {
      type: "Категория",
      query: "category",
      options: ["Фильмы", "Сериалы"],
    },
    {
      type: "Жанр",
      query: "genre",
      options: [
        "Комедия",
        "Аниме",
        "Спорт",
        "Фэнтези",
        "Мистика",
        "Музыка",
        "Криминал",
        "Детектив",
        "Мультфильмы",
        "Драма",
        "Экшн",
        "Триллер",
        "Хоррор",
        "Романтика",
        "Документальные",
        "Сай-Фай",
        "Анимация",
      ],
    },
    {
      type: "Страна",
      query: "country",
      options: [
        "Россия",
        "Канада",
        "США",
        "Франция",
        "Великобритания",
        "Германия",
        "Италия",
        "Испания",
        "Южная Корея",
        "Китай",
        "Япония",
        "СССР",
        "Австралия",
        "Беларусь",
        "Казахстан",
        "Финляндия",
        "Тайланд",
        "Чехия",
        "Польша",
        "Швеция",
        "Турция",
        "Швейцария",
      ],
    },
    { type: "Год", query: "year", options: yearsOptions },
  ];

  const [activeFilterQuery, setActiveFilterQuery] = useState<string | null>(
    null
  );

  const toggleModal = (filterQuery: string) => {
    setActiveFilterQuery((prev) => (prev === filterQuery ? null : filterQuery));
  };

  return (
    <div className="-ml-[20px] -mr-[20px] mt-4 w-[calc(100%+2.5rem)] animate-slideDown">
      <div className="h-12 relative">
        <div className="px-[20px] h-[640px] w-full absolute">
          <div className="flex w-full">
            {menuFilters.map((item) => (
              <div
                key={item.type}
                className="cursor-pointer transition-all border border-[hsla(0,0%,100%,.16)] hover:bg-[#333] min-w-[242px] w-[242px] mr-3 max-w-full bg-[#292929] text-[#ececec] flex items-center justify-between rounded-2xl px-4 h-12 font-[500]"
                onClick={() => toggleModal(item.query)}
              >
                <div>{item.type}</div>
                <ChevronDown />
              </div>
            ))}
          </div>
        </div>
        {menuFilters.map(
          (filter) =>
            activeFilterQuery === filter.query && (
              <div
                key={filter.type}
                className="absolute top-full left-0 w-full z-20"
              >
                <FilterOptionModal
                  filters={filters}
                  activeFilter={filter}
                  modalOptions={filter.options}
                  className={cn(
                    filter.type === "Жанр" && "left-[15%]",
                    filter.type === "Страна" && "left-[30%]",
                    filter.type === "Год" && "left-[45%]"
                  )}
                />
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default FilterOptions;
