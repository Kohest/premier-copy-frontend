import { Search } from "lucide-react";
import React from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("search");
  const location = useLocation();
  const handleSetSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams({ search: event.target.value });
  };
  const handleSearchClick = () => {
    if (location.pathname !== "/find") {
      navigate("/find");
    }
  };
  return (
    <aside className="min-w-[166px] mr-6  ml-[1rem] h-full w-full relative">
      <div className="h-10 relative flex w-full justify-center items-center group/search">
        <input
          value={searchQuery || ""}
          onChange={(e) => handleSetSearch(e)}
          onClick={handleSearchClick}
          placeholder="Фильм, актер, жанр"
          className=" bg-[rgba(41,41,41,.65)] transition w-full h-full rounded-2xl pl-12 pr-1 group-hover/search:bg-[rgba(83,83,83,0.85)]"
          type="text"
        />
        <div className="absolute left-[15px] text-[1.5rem] text-[#9b9b9b] group-hover/search:text-white transition cursor-pointer">
          <Search />
        </div>
      </div>
    </aside>
  );
};

export default SearchBar;
