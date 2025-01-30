import { create } from "zustand";
import { IFavoriteItem } from "../types";
import { Api } from "../../../shared/api/api";
interface InitialState {
  favoriteItems: IFavoriteItem[];
  error: boolean;
  loading: boolean;
  fetchFavoriteItems: () => Promise<void>;
  addFavoriteItem: (contentId: string) => Promise<void>;
  deleteFavoriteItem: (contentId: string) => Promise<void>;
}
export const useFavoriteStore = create<InitialState>((set, get) => ({
  favoriteItems: [],
  error: false,
  loading: true,
  fetchFavoriteItems: async () => {
    try {
      set({ loading: true, error: false });
      const data = await Api.favorite.getFavorite();
      set({ favoriteItems: data });
    } catch (error: any) {
      console.log(error);
      if (error.response?.status !== 401) {
        set({ error: true });
      }
    } finally {
      set({ loading: false });
    }
  },
  addFavoriteItem: async (contentId: string) => {
    try {
      set({ loading: true, error: false });
      const data = await Api.favorite.addFavorite(contentId);
      set((state) => ({
        favoriteItems: [...state.favoriteItems, data.content],
      }));
    } catch (error) {
      console.log(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
  deleteFavoriteItem: async (contentId: string) => {
    try {
      set({ loading: true, error: false });
      const data = await Api.favorite.deleteFavorite(contentId);
      set((state) => ({
        favoriteItems: state.favoriteItems.filter(
          (item) => item.id !== data.contentId
        ),
      }));
    } catch (error) {
      console.log(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
}));
