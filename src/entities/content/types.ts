export interface IContentItem {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  description: string;
  releaseYear: string;
  ageRating: string;
  country: string;
  duration: string | null;
  posterUrl: string;
  Movie: MovieItem;
  genres: Genre[];
  Series: SeriesItem;
  averageRating: IAvgRating;
}
interface IAvgRating {
  _avg: { rating: number };
  _count: { _all: number };
}
interface MovieItem {
  id: string;
  contentId: string;
  isFree: boolean;
}
export interface Genre {
  id: string;
  name: string;
}
interface SeriesItem {
  id: string;
  contentId: string;
  seasons: Season[];
}
export interface Season {
  id: string;
  number: string;
  seriesId: string;
  episodes: Episode[];
}
export interface Episode {
  id: string;
  title: string;
  number: string;
  isFree: boolean;
  posterUrl: string;
  description: string;
  duration: string;
  seasonId: string;
}
export type GenreParams =
  | "comedy"
  | "drama"
  | "action"
  | "thriller"
  | "horror"
  | "romance"
  | "documentary"
  | "scifi"
  | "animation"
  | "anime"
  | "sport"
  | "fantasy"
  | "mystery"
  | "music"
  | "crime"
  | "detective"
  | "multfilms";

export type Country =
  | "Россия"
  | "Канада"
  | "США"
  | "Франция"
  | "Великобритания"
  | "Германия"
  | "Италия"
  | "Испания"
  | "Южная Корея"
  | "Китай"
  | "Япония"
  | "СССР"
  | "Австралия"
  | "Беларусь"
  | "Казахстан"
  | "Финляндия"
  | "Тайланд"
  | "Чехия"
  | "Польша"
  | "Швеция"
  | "Турция"
  | "Швейцария";
export type ContentType = "movie" | "series";
