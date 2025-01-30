import { axiosClassic } from "../../../shared/api/axiosInstance";
import { IMovieVideo } from "../types";

export const getMovieVideo = async (
  movieId: string,
  qualityName: string,
  rangeStart: number,
  rangeEnd: number
) => {
  return (
    await axiosClassic.get<ArrayBuffer>(
      `/movie/video/${movieId}?qualityName=${qualityName}`,
      {
        headers: {
          Range: `bytes=${rangeStart}-${rangeEnd}`,
        },
        responseType: "arraybuffer",
      }
    )
  ).data;
};
export const getMovieQualities = async (movieId: string) => {
  return (
    await axiosClassic.get<{ qualityName: string }[]>(
      `/movie/video/qualities/${movieId}`
    )
  ).data;
};
