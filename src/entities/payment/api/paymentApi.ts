import { axiosWithAuth } from "../../../shared/api/axiosInstance";
import { CreatePaymentResponse } from "../types";

export const createPayment = async (
  amount: number,
  uniqueSubscriptionId: string
) => {
  return (
    await axiosWithAuth.post<CreatePaymentResponse>("/payment", {
      amount,
      uniqueSubscriptionId,
    })
  ).data;
};
export const checkPayment = async (paymentId: string) => {
  return (
    await axiosWithAuth.post<CreatePaymentResponse>(`/payment/info`, {
      paymentId,
    })
  ).data;
};
