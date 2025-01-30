import { Genre } from "../content/types";

export interface ICollection {
  id: string;
  name: string;
  description: string;
  posterUrl: string;
  createdAt: Date;
  updatedAt: Date;
}
interface MovieItem {
  id: string;
  contentId: string;
  isFree: boolean;
}
interface SeriesItem {
  id: string;
  contentId: string;
}
export interface ICollectionWithContent extends ICollection {
  contents: CollectionContentItem[];
}
export interface CollectionContentItem {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  description: string;
  releaseYear: string;
  ageRating: string;
  country: string;
  duration: string | null;
  Movie: MovieItem[];
  Series: SeriesItem[];
  posterUrl: string;
  genres: Genre[];
  averageRating: { _avg: { rating: number | null }; _count: { _all: number } };
}
