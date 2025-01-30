import { axiosClassic } from "../../../shared/api/axiosInstance";

export const getEpisodeVideo = async (
  id: string,
  qualityName: string,
  rangeStart: number,
  rangeEnd: number
) => {
  return (
    await axiosClassic.get<ArrayBuffer>(
      `/series/video/${id}?qualityName=${qualityName}`,
      {
        headers: {
          Range: `bytes=${rangeStart}-${rangeEnd}`,
        },
        responseType: "arraybuffer",
      }
    )
  ).data;
};
export const getEpisodeQualities = async (episodeId: string) => {
  return (await axiosClassic.get(`/series/video/qualities/${episodeId}`)).data;
};
