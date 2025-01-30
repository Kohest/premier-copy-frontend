import React, { FC, useState } from "react";
import { formatDate } from "../../../utils/formatDate";
import SubscriptionCancelModal from "../../../../widgets/subscription-cancel-modal/subscription-cancel-modal";
interface Props {
  subscriptionType: string;
  endDate: Date;
  subscriptionPrice: number;
  userSubscriptionId: string;
}
const SubscriptionOutsideLabel: FC<Props> = ({
  endDate,
  subscriptionType,
  userSubscriptionId,
  subscriptionPrice,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      {isModalOpen && (
        <SubscriptionCancelModal
          setIsModalOpen={setIsModalOpen}
          userSubscriptionId={userSubscriptionId}
        />
      )}
      <div className="mt-2 cursor-default text-[14px] h-[90px] absolute left-0 top-full text-center right-0 overflow-hidden leading-[20px] text-[#9b9b9b]">
        <div>{subscriptionType.toUpperCase()}</div>
        <div>{`Активна до ${formatDate(
          endDate
        )}, далее ${subscriptionPrice}₽ в месяц`}</div>
        <span
          className="text-[#ececec] underline cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          Отменить подписку
        </span>
      </div>
    </>
  );
};

export default SubscriptionOutsideLabel;
