import React, { FC } from "react";
import ContentInteractionButton from "../../../shared/ui/cotnent-interaction-button/content-interaction-button";
import {
  RiNumber1,
  RiNumber2,
  RiNumber3,
  RiNumber4,
  RiNumber5,
} from "react-icons/ri";
import { Star } from "lucide-react";
import { IReview } from "../../../entities/review/types";

interface Props {
  setIsReviewModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  userReview: IReview | null;
  handleDeleteReview: () => void;
}
const SendReviewButton: FC<Props> = ({
  setIsReviewModalOpen,
  userReview,
  handleDeleteReview,
}) => {
  const getIconByRating = (rating?: number) => {
    const ratingIcons = {
      1: <RiNumber1 />,
      2: <RiNumber2 />,
      3: <RiNumber3 />,
      4: <RiNumber4 />,
      5: <RiNumber5 />,
    };

    return rating !== undefined ? (
      ratingIcons[rating as 1 | 2 | 3 | 4 | 5] || <Star />
    ) : (
      <Star />
    );
  };
  const tooltipText = userReview ? "Удалить отзыв" : "Поставить оценку";
  const icon = getIconByRating(userReview?.rating);

  return (
    <ContentInteractionButton
      Icon={icon}
      tooltipText={tooltipText}
      onClick={() =>
        userReview ? handleDeleteReview() : setIsReviewModalOpen(true)
      }
    />
  );
};

export default SendReviewButton;
