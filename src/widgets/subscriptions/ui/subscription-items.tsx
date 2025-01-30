import React, { FC, useEffect } from "react";
import SubscriptionsGridRow from "../../../features/subscriptions-grid-row/subscriptions-grid-row";
import { useGetSubscriptions } from "../api/use-get-subscriptions";
import toast from "react-hot-toast";
import SubscriptionTileSkeleton from "../../../shared/ui/skeletons/subscription-tile-skeleton";
interface Props {
  infoLogo: string;
  infoText: string;
  isLoggedIn: boolean;
  subscriptionType:
    | "premier"
    | "sport"
    | "premierxstart"
    | "start"
    | "premierxrutube";
  infoImage?: string;
}
const SubscriptionItems: FC<Props> = ({
  infoLogo,
  infoText,
  infoImage,
  isLoggedIn,
  subscriptionType,
}) => {
  const { error, handleGetSubscriptions, items, loading } =
    useGetSubscriptions(subscriptionType);
  useEffect(() => {
    handleGetSubscriptions();
  }, [subscriptionType]);
  error?.length &&
    toast.error("something went wrong", { position: "bottom-right" });
  return (
    <div className="mb-[2.5rem] pt-[1.25rem] pb-[1.625rem] w-full pr-[3.25rem]">
      {loading ? (
        <div className="flex h-[21.75rem]">
          {Array.from({ length: 4 }).map((item, index) => (
            <SubscriptionTileSkeleton key={index} />
          ))}
        </div>
      ) : (
        <SubscriptionsGridRow
          isLoggedIn={isLoggedIn}
          subscriptionItems={items}
          infoLogo={infoLogo}
          infoText={infoText}
          infoImage={infoImage}
        />
      )}
    </div>
  );
};

export default SubscriptionItems;
