import React from "react";
import SectionTitle from "../shared/ui/section-title";

import SearchItems from "../features/search-items/search-items";

const SearchPage = () => {
  return (
    <div className="main-container w-full">
      <SectionTitle text="Результаты поиска" />
      <SearchItems />
    </div>
  );
};

export default SearchPage;
