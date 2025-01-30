import { useSearchParams } from "react-router-dom";
import { SearchParams } from "./filter-content";
import { useSet } from "react-use";
import { Dispatch, SetStateAction, useMemo, useState } from "react";

export interface FiltersState {
  country: Set<string>;
  genre: Set<string>;
  sortBy: string;
  year: Set<string>;
  category: Set<string>;
}
export interface FilterReturnTypes extends FiltersState {
  toggleCountry: (value: string) => void;
  toggleCategory: (value: string) => void;
  toggleGenre: (value: string) => void;
  toggleYear: (value: string) => void;
  setSortBy: Dispatch<SetStateAction<string>>;
}
export const useFiltersState = (): FilterReturnTypes => {
  const [params, _] = useSearchParams();
  const searchParams: SearchParams = Object.fromEntries(params.entries());
  const [country, { toggle: toggleCountry }] = useSet(
    new Set<string>(searchParams.country ? searchParams.country.split(",") : [])
  );
  const [genre, { toggle: toggleGenre }] = useSet(
    new Set<string>(searchParams.genre ? searchParams.genre.split(",") : [])
  );
  const [year, { toggle: toggleYear }] = useSet(
    new Set<string>(searchParams.year ? searchParams.year.split(",") : [])
  );
  const [category, { toggle: toggleCategory }] = useSet(
    new Set<string>(
      searchParams.category ? searchParams.category.split(",") : []
    )
  );

  const [sortBy, setSortBy] = useState(
    searchParams.sortBy ? searchParams.sortBy : ""
  );
  return useMemo(
    () => ({
      country,
      genre,
      sortBy,
      category,
      year,
      toggleCountry,
      toggleCategory,
      toggleGenre,
      toggleYear,
      setSortBy,
    }),
    [country, genre, year, sortBy, category]
  );
};
