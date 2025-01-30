import React, { useState } from "react";
import SubscriptionMenuItem from "./ui/subscription-menu-item";
import MainTitle from "../../shared/ui/MainTitle";
import { useProfileStore } from "../../entities/user/store/use-profile";
import { menuItems } from "./model/subscriptions-items";
import SubscriptionTile from "../../shared/ui/subscription-tile/subscription-tile";
import { cn } from "../../shared/utils/cnUtil";

const Subscriptions = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(0);
  const { userData } = useProfileStore();
  return (
    <>
      <section className="relative">
        <div className="w-full py-[26px] text-[#ececec]">
          <div>
            <MainTitle text="Подписки" />
            <div className="pr-[22px] w-full relative flex  mt-4">
              {userData?.subscriptions &&
                userData?.subscriptions.length > 0 && (
                  <SubscriptionMenuItem
                    title="МОИ ПОДПИСКИ"
                    onClick={() => setActiveMenuItem(-1)}
                    isActive={activeMenuItem === -1 ? true : false}
                  />
                )}
              {menuItems.map((item, index) => (
                <SubscriptionMenuItem
                  key={item.label}
                  title={item.label}
                  onClick={() => setActiveMenuItem(index)}
                  isActive={activeMenuItem === index ? true : false}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="pb-[1.625rem] pt-[1.25rem]">
        <div className="relative w-full">
          {activeMenuItem === -1 ? (
            <div
              className={cn(
                userData?.subscriptions && userData?.subscriptions.length > 4
                  ? "w-full mb-12 grid gap-x-2 gap-y-28 grid-cols-4 grid-rows-2"
                  : "h-[420px] w-full flex items-center gap-2"
              )}
            >
              {userData?.subscriptions.map((item) => (
                <SubscriptionTile
                  userSubscriptionId={item.id}
                  subscriptionId={item.uniqueSubscription.id}
                  isActive={true}
                  subscriptionDuration={item.uniqueSubscription.durationDays}
                  subscriptionPrice={item.uniqueSubscription.price}
                  subscriptionImage={item.uniqueSubscription.image}
                  key={item.id}
                  endDate={item.endDate}
                  subscriptionType={item.uniqueSubscription.type}
                  isLoggedIn={!!userData}
                />
              ))}
            </div>
          ) : (
            menuItems[activeMenuItem].component({ isLoggedIn: !!userData })
          )}
        </div>
      </section>
    </>
  );
};

export default Subscriptions;
