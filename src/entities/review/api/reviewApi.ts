import { axiosClassic, axiosWithAuth } from "../../../shared/api/axiosInstance";
import { CreateReviewDTO, IReview } from "../types";

export const getAllContentReviews = async (contentId: string) => {
  return (await axiosClassic.get(`/review/${contentId}`)).data;
};
export const createReview = async (data: CreateReviewDTO) => {
  return (await axiosWithAuth.post(`/review/create`, data)).data;
};
export const deleteReview = async (contentId: string) => {
  return (await axiosWithAuth.delete(`/review/delete/${contentId}`)).data;
};
export const getCurrentUserReview = async (contentId: string) => {
  return (await axiosWithAuth.get<IReview>(`review/current/${contentId}`)).data;
};
