import { create } from "zustand";
import { IContentItem } from "../types";
import { Api } from "../../../shared/api/api";

interface InitialState {
  contentItem: IContentItem | null;
  error: boolean;
  loading: boolean;
  fetchContentItem: (id: string) => Promise<void>;
}
export const useContentStore = create<InitialState>((set, get) => ({
  contentItem: null,
  error: false,
  loading: true,
  fetchContentItem: async (contentId: string) => {
    try {
      set({ loading: true, error: false });
      const data = await Api.content.getContentById(contentId);
      set({ contentItem: data });
    } catch (error) {
      console.log(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
}));
