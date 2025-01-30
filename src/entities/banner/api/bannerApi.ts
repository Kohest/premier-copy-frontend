import { axiosClassic } from "../../../shared/api/axiosInstance";
import { IBannerItem } from "../types";

export const getBannerById = async (bannerId: string) => {
  return (await axiosClassic.get<IBannerItem>(`/banner/${bannerId}`)).data;
};
