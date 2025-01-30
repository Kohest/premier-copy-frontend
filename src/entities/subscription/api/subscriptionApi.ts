import { axiosWithAuth } from "../../../shared/api/axiosInstance";
import {
  CheckPaymentAssignSubscriptionDto,
  IFullUserSubscription,
  IUniqueSubscription,
} from "../types";

export const checkPaymentAssignSubscription = async (
  data: CheckPaymentAssignSubscriptionDto
) => {
  return (
    await axiosWithAuth.post<{
      success: boolean;
      subscriptionId?: string;
    }>(`/subscription/assign`, data)
  ).data;
};
export const getFullUserSubscriptions = async () => {
  return (
    await axiosWithAuth.get<IFullUserSubscription[]>(`/subscription/user`)
  ).data;
};
export const getUniqueSubscriptionsByType = async (type: string) => {
  return (
    await axiosWithAuth.get<IUniqueSubscription[]>(
      `/subscription/list?type=${type}`
    )
  ).data;
};
export const cancelSubscription = async (subscriptionId: string) => {
  return (await axiosWithAuth.delete(`/subscription/cancel/${subscriptionId}`))
    .data;
};
