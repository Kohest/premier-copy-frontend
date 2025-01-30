import { axiosClassic } from "../../../shared/api/axiosInstance";
import { ContentType, Country, GenreParams, IContentItem } from "../types";
interface GetContentParams {
  count?: number;
  offset?: number;
  search?: string;
  genre?: GenreParams;
  country?: Country;
  year?: number;
  type?: ContentType;
}
export const getContent = async (params: GetContentParams) => {
  const filteredParams = Object.fromEntries(
    Object.entries(params).filter(([_, value]) => value !== undefined)
  );
  return (
    await axiosClassic.get<IContentItem[]>("/content/all", {
      params: { ...filteredParams },
    })
  ).data;
};
export const getContentById = async (id: string) => {
  return (await axiosClassic.get(`/content/${id}`)).data;
};
