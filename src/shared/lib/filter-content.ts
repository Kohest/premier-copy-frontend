import { CollectionContentItem } from "../../entities/collection/types";
export interface SearchParams {
  sortBy?: string;
  country?: string;
  year?: string;
  genre?: string;
  category?: string;
}
export const filterContent = (
  items: CollectionContentItem[],
  params: URLSearchParams
): CollectionContentItem[] => {
  const getParamsArray = (key: string): string[] =>
    params.get(key)?.split(",").filter(Boolean) || [];
  const countries = getParamsArray("country");
  const years = getParamsArray("year");
  const genres = getParamsArray("genre");
  const sortBy = params.get("sortBy");
  const category = params.get("category");
  const filterByCountry = (item: CollectionContentItem) =>
    countries.length > 0 ? countries.includes(item.country) : true;
  const filterByYear = (item: CollectionContentItem) =>
    years.length > 0 ? years.includes(item.releaseYear) : true;
  const filterByGenre = (item: CollectionContentItem) => {
    if (genres.length === 0) return true;
    const itemGenres = item.genres.map((g) => g.name);
    return genres.some((genre) => itemGenres.includes(genre));
  };
  const filterByCategory = (item: CollectionContentItem) => {
    if (category === "Фильмы") return item.Movie.length > 0;
    if (category === "Сериалы") return item.Series.length > 0;
    return true;
  };
  const sortItems = (filteredItems: CollectionContentItem[]) => {
    if (sortBy === "popular") {
      return filteredItems.sort(
        (a, b) => b.averageRating._count._all - a.averageRating._count._all
      );
    } else if (sortBy === "new") {
      return filteredItems.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    }
    return filteredItems;
  };
  const filteredItems = items.filter(
    (item) =>
      filterByCountry(item) &&
      filterByYear(item) &&
      filterByGenre(item) &&
      filterByCategory(item)
  );
  return sortItems(filteredItems);
};
