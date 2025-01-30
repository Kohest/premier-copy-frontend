import React, { useState } from "react";
import { useDebounce } from "react-use";
import FilmSliderSmItem from "../../widgets/film-slider-sm/ui/film-slider-sm-item";
import { formatServerUrl } from "../../shared/utils/formatServerUrl";
import Button from "../../shared/ui/button";
import { useSearch } from "./hooks/useSearch";
import Loader from "../../shared/ui/loader";
import toast from "react-hot-toast";

const SearchItems = () => {
  const { error, handleLoadSearchData, items, loading, searchQuery, hasMore } =
    useSearch();
  const [offsetLength, setOffsetLength] = useState(0);
  const handleShowMore = async () => {
    const newOffset = offsetLength + 8;
    setOffsetLength(newOffset);
    handleLoadSearchData(newOffset);
  };
  useDebounce(
    () => {
      setOffsetLength(0);
      handleLoadSearchData(0, true);
    },
    300,
    [searchQuery]
  );
  error?.length &&
    toast.error("Что-то пошло не так", { position: "bottom-right" });
  return (
    <div>
      {loading && <Loader />}
      {items.length > 0 && (
        <div className="pt-[1.5rem] pb-[3.75rem]">
          <div className="grid grid-cols-4 gap-y-[52px] gap-x-[16px]">
            {items.map((item) => (
              <FilmSliderSmItem
                key={item.id}
                age={item.ageRating}
                id={item.id}
                image={formatServerUrl(item.posterUrl)}
                score={item.averageRating._avg.rating}
                title={item.title}
                type="horizontal"
              />
            ))}
          </div>
          {hasMore && (
            <div className="mt-[2.75rem] flex justify-center items-center">
              <Button text="Показать еще" onClick={handleShowMore} />
            </div>
          )}
        </div>
      )}
      {!loading && items.length === 0 && (
        <div>По вашему запросу ничего не нашлось : (</div>
      )}
    </div>
  );
};

export default SearchItems;
