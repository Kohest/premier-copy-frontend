import { useEffect } from "react";
import { useFavoriteStore } from "../../entities/favorite/store/use-favorite";
import { IFavoriteItem } from "../../entities/favorite/types";
type ReturnProps = {
  favoriteItems: IFavoriteItem[];
  loading: boolean;
  error: boolean;
  fetchFavoriteItems: () => Promise<void>;
  addFavoriteItem: (contentId: string) => Promise<void>;
  deleteFavoriteItem: (contentId: string) => Promise<void>;
};
export const useFavorite = (): ReturnProps => {
  const favoriteState = useFavoriteStore((state) => state);

  useEffect(() => {
    favoriteState.fetchFavoriteItems();
  }, []);

  return favoriteState;
};
