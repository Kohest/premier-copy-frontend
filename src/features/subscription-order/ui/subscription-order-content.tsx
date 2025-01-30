import React, { FC } from "react";
import FormSubmitButton from "../../authentication/ui/form-submit-button";
import { Api } from "../../../shared/api/api";
import toast from "react-hot-toast";
interface Props {
  priceText: string;
  totalPrice: number;
  subscriptionId: string;
}
const SubscriptionModelContent: FC<Props> = ({
  priceText,
  totalPrice,
  subscriptionId,
}) => {
  const handleCreatePayment = async () => {
    try {
      const response = await Api.payment.createPayment(
        totalPrice,
        subscriptionId
      );
      sessionStorage.setItem("paymentId", response.id);
      sessionStorage.setItem("subscriptionId", subscriptionId);
      window.location.href = response.confirmation.confirmation_url;
    } catch (error) {
      toast.error("something wrong", {
        position: "bottom-right",
      });
    }
  };
  return (
    <div className="px-8 flex flex-col items-center w-full mb-4">
      <div className="py-6 px-[20px] bg-[#1a1a1a] rounded-3xl w-[430px] text-center">
        <img
          src="https://fb-cdn.premier.one/files/premier/upload/eb72/860c/eb72860c91c337cb655a04133c37ed3e.svg"
          alt="premier"
          className="mx-auto max-w-32 mb-3 h-auto w-full min-h-4"
        />
        <p className="text-[#ececec] mb-5 text-[26px] font-[600]">
          Оплата подписки
        </p>
        <div className="text-[#ececec] mx-auto mb-10 text-[18px]">
          {priceText}
        </div>
        <FormSubmitButton
          text="Продолжить"
          onClick={() => handleCreatePayment()}
        />
      </div>
    </div>
  );
};

export default SubscriptionModelContent;
