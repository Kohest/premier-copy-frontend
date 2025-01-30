export interface CreateReviewDTO {
  contentId: string;
  rating: number;
  comment?: string;
}
export interface IReview {
  id: string;
  rating: number;
  comment: null | string;
  userId: string;
  contentId: string;
}
