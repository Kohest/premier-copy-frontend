import { Genre } from "../../entities/content/types";
const genreMapping: Record<string, string> = {
  multfilms: "Мультфильмы",
  detective: "Детектив",
  crime: "Криминал",
  music: "Музыка",
  mistery: "Мистика",
  fantasy: "Фэнтези",
  sport: "Спорт",
  anime: "Аниме",
  animation: "Мультфильм",
  scifi: "Научная фантастика",
  documentary: "Документальный",
  romance: "Мелодрама",
  horror: "Ужасы",
  thriller: "Триллер",
  action: "Боевик",
  drama: "Драма",
  comedy: "Комедия",
};
export const translateGenres = (genres: Genre[]): string[] => {
  return genres.map((genre) => {
    const translatedName = genreMapping[genre.name];
    return translatedName || genre.name;
  });
};
