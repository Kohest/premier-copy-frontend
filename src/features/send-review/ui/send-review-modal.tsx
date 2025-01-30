import React, { FC, useState } from "react";
import ContentInteractionButton from "../../../shared/ui/cotnent-interaction-button/content-interaction-button";
import {
  RiNumber1,
  RiNumber2,
  RiNumber3,
  RiNumber4,
  RiNumber5,
} from "react-icons/ri";
import { useProfileStore } from "../../../entities/user/store/use-profile";
import GlobalModal from "../../../widgets/global-modal/globalModal";
interface Props {
  handleSendReview: (rating: number) => void;
  setIsReviewModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const SendReviewModal: FC<Props> = ({
  handleSendReview,
  setIsReviewModalOpen,
}) => {
  const [isAuthModal, setIsAuthModal] = useState(false);
  const { userData } = useProfileStore();
  const reviewOptions = [
    { Icon: <RiNumber1 />, tooltipText: "Провал", rating: 1 },
    { Icon: <RiNumber2 />, tooltipText: "Удовлетворительно", rating: 2 },
    { Icon: <RiNumber3 />, tooltipText: "Хорошо", rating: 3 },
    { Icon: <RiNumber4 />, tooltipText: "Отлично", rating: 4 },
    { Icon: <RiNumber5 />, tooltipText: "Превосходно", rating: 5 },
  ];
  const sendReview = (rating: number) => {
    if (userData) {
      handleSendReview(rating);
      setIsReviewModalOpen(false);
    } else {
      setIsAuthModal(true);
    }
  };
  return (
    <>
      {isAuthModal && (
        <GlobalModal initialFormType="login" setAuthModal={setIsAuthModal} />
      )}
      <div
        className="flex items-center justify-center bg-[#292929] rounded-xl"
        onMouseLeave={() => {
          isAuthModal === false && setIsReviewModalOpen(false);
        }}
      >
        {reviewOptions.map(({ Icon, tooltipText, rating }, index) => (
          <ContentInteractionButton
            key={rating}
            Icon={Icon}
            tooltipText={tooltipText}
            onClick={() => sendReview(rating)}
            className={index === reviewOptions.length - 1 ? "mr-0" : ""}
          />
        ))}
      </div>
    </>
  );
};

export default SendReviewModal;
