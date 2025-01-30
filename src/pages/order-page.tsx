import React, { useEffect, useState } from "react";
import SectionTitle from "../shared/ui/section-title";
import toast from "react-hot-toast";
import { Api } from "../shared/api/api";
import successIcon from "../assets/icons/approved.webp";
import cancelledIcon from "../assets/icons/cancelled.png";
import { useNavigate } from "react-router-dom";
import TextWithTitleSkeleton from "../shared/ui/skeletons/text-with-title-skeleton";
const OrderPage = () => {
  const [status, setStatus] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const paymentId = sessionStorage.getItem("paymentId");
    const subscriptionId = sessionStorage.getItem("subscriptionId");
    if (!paymentId || !subscriptionId) {
      navigate("/");
    } else {
      checkPayment(paymentId, subscriptionId);
    }
  }, []);

  const checkPayment = async (paymentId: string, subscriptionId: string) => {
    try {
      setLoading(true);
      const data = await Api.subscription.checkPaymentAssignSubscription({
        paymentId,
        uniqueSubscriptionId: subscriptionId,
      });
      if (data.success || !data.success) {
        sessionStorage.removeItem("paymentId");
        sessionStorage.removeItem("subscriptionId");
        setStatus(data.success);
      }
    } catch (error) {
      toast.error("something went wrong", { position: "bottom-right" });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="main-container w-full">
      <SectionTitle text="Результат оплаты заказа" />
      <div className="w-full flex mt-20 flex-col justify-center items-center gap-2">
        {loading ? (
          <TextWithTitleSkeleton />
        ) : (
          <>
            <div className="flex w-full items-center justify-center gap-2">
              <h1>
                {status === true
                  ? "Оплата прошла успешно"
                  : "Оплата была отменена"}
              </h1>
              <img
                src={status === true ? successIcon : cancelledIcon}
                className="w-16 h-16"
                alt="status"
              />
            </div>
            <p className="text-[18px] text-[#ececec]">
              {status === true
                ? "Ваш заказ был успешно оплачен"
                : "Ваш заказ был отменен"}
            </p>
            <p className="text-[18px] text-[#ececec]">
              {status === true
                ? "Информация появится на странице вашего аккаунта в разделе Подписки"
                : "Попробуйте оплатить заказ ещё раз"}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default OrderPage;
