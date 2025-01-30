import { axiosWithAuth } from "../../../shared/api/axiosInstance";
import { IFavoriteAddItem, IFavoriteDeleteItem, IFavoriteItem } from "../types";

export const getFavorite = async () => {
  return (await axiosWithAuth.get<IFavoriteItem[]>("/favorite")).data;
};
export const addFavorite = async (contentId: string) => {
  return (
    await axiosWithAuth.post<IFavoriteAddItem>(`/favorite/add/${contentId}`)
  ).data;
};
export const deleteFavorite = async (contentId: string) => {
  return (
    await axiosWithAuth.delete<IFavoriteDeleteItem>(
      `/favorite/remove/${contentId}`
    )
  ).data;
};
