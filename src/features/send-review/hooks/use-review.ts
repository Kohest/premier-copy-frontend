import { useCallback, useState } from "react";
import { IReview } from "../../../entities/review/types";
import toast from "react-hot-toast";
import { Api } from "../../../shared/api/api";
type ReturnProps = {
  loading: boolean;
  error: string | null;
  userReview: IReview | null;
  handleLoadReview: () => void;
  handleSendReview: (rating: number) => Promise<void>;
  handleDeleteReview: () => void;
};
export const useReview = (contentId: string): ReturnProps => {
  const [userReview, setUserReview] = useState<IReview | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const handleError = useCallback((err: unknown, message: string) => {
    setError(message);
  }, []);
  const handleLoadReview = useCallback(async () => {
    try {
      setLoading(true);
      const review = await Api.review.getCurrentUserReview(contentId);
      setUserReview(review);
    } catch (error: any) {
      if (error.response?.status !== 401) {
        handleError(error, "Что-то пошло не так");
      }
    } finally {
      setLoading(false);
    }
  }, [contentId, handleError]);
  const handleSendReview = useCallback(
    async (rating: number) => {
      try {
        setLoading(true);
        await Api.review.createReview({
          contentId,
          rating,
        });
        toast.success("Successfully send review", { position: "bottom-right" });
        handleLoadReview();
      } catch (error) {
        handleError(error, "Failed to load review");
      } finally {
        setLoading(false);
      }
    },
    [contentId, handleLoadReview, handleError]
  );
  const handleDeleteReview = useCallback(async () => {
    try {
      setLoading(true);
      await Api.review.deleteReview(contentId);
      toast.success("Successfully deleted review", {
        position: "bottom-right",
      });
      handleLoadReview();
    } catch (error) {
      handleError(error, "Failed to load review");
    } finally {
      setLoading(false);
    }
  }, [contentId, handleLoadReview, handleError]);
  return {
    userReview,
    loading,
    error,
    handleLoadReview,
    handleSendReview,
    handleDeleteReview,
  };
};
