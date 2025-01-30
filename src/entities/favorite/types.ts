export interface IFavoriteItem {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  description: string;
  releaseYear: number;
  ageRating: number;
  country: string;
  duration: string | null;
  posterUrl: string;
  averageRating: {
    _avg: {
      rating: number | null;
    };
    _count: {
      _all: number;
    };
  };
}
export interface IFavoriteAddItem {
  id: string;
  userId: string;
  contentId: string;
  content: IFavoriteItem;
}
export interface IFavoriteDeleteItem {
  id: string;
  userId: string;
  contentId: string;
}
