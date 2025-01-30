import { axiosClassic } from "../../../shared/api/axiosInstance";

export const getTrailer = async (contentId: string, qualityName: string) => {
  return (
    await axiosClassic.get(`/trailer/${contentId}?qualityName=${qualityName}`)
  ).data;
};

export const getTrailerQualities = async (contentId: string) => {
  return (
    await axiosClassic.get<{ qualityName: string }[]>(
      `/trailer/qualities/${contentId}`
    )
  ).data;
};
