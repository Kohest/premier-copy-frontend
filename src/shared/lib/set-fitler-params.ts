import qs from "qs";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useRef } from "react";
import { FiltersState } from "./filters-state";
export const setFilterParams = (filters: FiltersState) => {
  const isMounted = useRef(false);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    if (isMounted.current) {
      const existingParams = Object.fromEntries(searchParams.entries());
      const newParams = {
        ...existingParams,
        country: Array.from(filters.country),
        genre: Array.from(filters.genre),
        year: Array.from(filters.year),
        category: Array.from(filters.category),
        sortBy: filters.sortBy ? filters.sortBy : null,
      };
      const newQueryFilters = qs.stringify(newParams, {
        arrayFormat: "comma",
        skipNulls: true,
      });

      if (
        qs.stringify(existingParams, { arrayFormat: "comma" }) !==
        newQueryFilters
      ) {
        navigate(`?${newQueryFilters}`);
      }
    } else {
      isMounted.current = true;
    }
  }, [filters, searchParams, navigate]);
};
