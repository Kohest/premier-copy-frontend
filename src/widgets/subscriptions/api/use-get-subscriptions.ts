import { useCallback, useEffect, useState } from "react";
import { Api } from "../../../shared/api/api";
import { IUniqueSubscription } from "../../../entities/subscription/types";
interface ReturnProps {
  loading: boolean;
  error: string | null;
  items: IUniqueSubscription[];
  handleGetSubscriptions: () => void;
}
export const useGetSubscriptions = (subscriptionType: string): ReturnProps => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState<IUniqueSubscription[]>([]);
  const [error, setError] = useState<string | null>(null);
  const handleError = useCallback((err: unknown, message: string) => {
    setError(message);
  }, []);
  const handleGetSubscriptions = async () => {
    try {
      setLoading(true);
      const data = await Api.subscription.getUniqueSubscriptionsByType(
        subscriptionType
      );
      setItems(data);
    } catch (error) {
      handleError(error, "Failed to load subscriptions");
    } finally {
      setLoading(false);
    }
  };

  return { loading, items, error, handleGetSubscriptions };
};
