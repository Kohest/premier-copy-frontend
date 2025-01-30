import React, { FC, useEffect, useState } from "react";
import SendReviewModal from "./ui/send-review-modal";
import SendReviewButton from "./ui/send-review-button";
import { useReview } from "./hooks/use-review";
import Loader from "../../shared/ui/loader";
import toast from "react-hot-toast";
interface Props {
  contentId: string;
}

const SendReview: FC<Props> = ({ contentId }) => {
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const {
    error,
    handleDeleteReview,
    handleLoadReview,
    handleSendReview,
    loading,
    userReview,
  } = useReview(contentId);
  useEffect(() => {
    handleLoadReview();
  }, [contentId]);
  useEffect(() => {
    error && toast.error("Что-то пошло не так", { position: "bottom-right" });
  }, [error]);
  return (
    <>
      {isReviewModalOpen ? (
        <SendReviewModal
          handleSendReview={handleSendReview}
          setIsReviewModalOpen={setIsReviewModalOpen}
        />
      ) : (
        <SendReviewButton
          handleDeleteReview={handleDeleteReview}
          userReview={userReview}
          setIsReviewModalOpen={setIsReviewModalOpen}
        />
      )}
      {loading && <Loader />}
    </>
  );
};

export default SendReview;
