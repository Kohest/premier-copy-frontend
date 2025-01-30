import React, { FC } from "react";
import SubscriptionsGridRowInfo from "./ui/subscriptions-grid-row-info";
import { cn } from "../../shared/utils/cnUtil";
import SubscriptionTile from "../../shared/ui/subscription-tile/subscription-tile";
import { IUniqueSubscription } from "../../entities/subscription/types";
interface Props {
  className?: string;
  infoImage?: string;
  isLoggedIn: boolean;
  infoLogo: string;
  infoText: string;
  subscriptionItems: IUniqueSubscription[];
}
const SubscriptionsGridRow: FC<Props> = ({
  className,
  infoImage,
  isLoggedIn,
  infoLogo,
  subscriptionItems,
  infoText,
}) => {
  return (
    <div
      className={cn(className, "h-[21.75rem] grid")}
      style={{ gridTemplateColumns: "26.25rem minmax(0, 1fr)" }}
    >
      <SubscriptionsGridRowInfo
        logo={infoLogo}
        text={infoText}
        image={infoImage}
      />
      <div className="relative w-full">
        <div className="h-[20rem] flex w-full items-center  gap-x-2">
          {subscriptionItems.map((item) => (
            <SubscriptionTile
              isLoggedIn={isLoggedIn}
              subscriptionId={item.id}
              subscriptionDuration={item.durationDays}
              subscriptionPrice={item.price}
              subscriptionImage={item.image}
              key={item.id}
              subscriptionSalePercent={item.salePercent}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionsGridRow;
