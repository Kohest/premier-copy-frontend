import { FC, useEffect } from "react";
import SubscriptionTile from "../../../shared/ui/subscription-tile/subscription-tile";
import { useGetSubscriptions } from "../api/use-get-subscriptions";
import SubscriptionTileSkeleton from "../../../shared/ui/skeletons/subscription-tile-skeleton";
import toast from "react-hot-toast";
interface Props {
  isLoggedIn: boolean;
}
const SubscriptionsPremier: FC<Props> = ({ isLoggedIn }) => {
  const { error, handleGetSubscriptions, items, loading } =
    useGetSubscriptions("premier");
  useEffect(() => {
    handleGetSubscriptions();
  }, []);
  error?.length && toast.error("Ошибка загрузки", { position: "bottom-right" });
  return (
    <>
      {loading ? (
        <div className="flex h-[420px]">
          {Array.from({ length: 3 }).map((item, index) => (
            <SubscriptionTileSkeleton key={index} />
          ))}
        </div>
      ) : (
        <div className="h-[420px] w-full flex items-center justify-between">
          {items.map((item) => (
            <SubscriptionTile
              isLoggedIn={isLoggedIn}
              subscriptionId={item.id}
              subscriptionDuration={item.durationDays}
              subscriptionPrice={item.price}
              subscriptionImage={item.image}
              key={item.id}
              subscriptionSalePercent={item.salePercent}
              primary={items[1].id === item.id}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default SubscriptionsPremier;
