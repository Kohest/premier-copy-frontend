import { axiosClassic } from "../../../shared/api/axiosInstance";
import { ICollection, ICollectionWithContent } from "../types";
interface GetCollectionParams {
  take?: number;
  offset?: number;
}

export const getAll = async (params: GetCollectionParams) => {
  const filledParams = Object.fromEntries(
    Object.entries(params).filter(([_, value]) => value !== undefined)
  );
  return (
    await axiosClassic.get<ICollection[]>("/collection/all", {
      params: { ...filledParams },
    })
  ).data;
};
export const getCollectionContent = async (collectionId: string) => {
  return (
    await axiosClassic.get<ICollectionWithContent>(
      `/collection/${collectionId}`
    )
  ).data;
};
