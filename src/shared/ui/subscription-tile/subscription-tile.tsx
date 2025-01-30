import React, { FC, useState } from "react";
import GlobalModal from "../../../widgets/global-modal/globalModal";
import { cn } from "../../utils/cnUtil";
import SubscriptionTileFooter from "./ui/subscription-tile-footer";
import SubscriptionOutsideLabel from "./ui/subscription-outside-label";
import SubscriptionTileHeader from "./ui/subscription-tile-header";
import { declensionMonths } from "../../utils/declensionMonths";
interface BaseProps {
  primary?: boolean;
  subscriptionImage: string;
  subscriptionSalePercent?: number | null;
  subscriptionDuration: number;
  isLoggedIn: boolean;
  subscriptionPrice: number;
  subscriptionId: string;
}
interface ActiveProps extends BaseProps {
  isActive: true;
  endDate: Date;
  subscriptionType: string;
  userSubscriptionId: string;
}

interface InactiveProps extends BaseProps {
  isActive?: false;
}
type Props = ActiveProps | InactiveProps;
const SubscriptionTile: FC<Props> = (props) => {
  const {
    primary = false,
    subscriptionImage,
    subscriptionSalePercent,
    subscriptionDuration,
    isLoggedIn,
    subscriptionPrice,
    subscriptionId,
    isActive,
  } = props;
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const durationInMonths = Math.floor(subscriptionDuration / 30);
  const handleClickTile = () => {
    if (isLoggedIn) {
      !isActive ? setSubscriptionModal(true) : null;
    } else {
      setIsAuthModalOpen(true);
    }
  };
  const [subscriptionModal, setSubscriptionModal] = useState(false);
  const savingPrice =
    subscriptionSalePercent &&
    Math.floor(399 / 100) * subscriptionSalePercent * durationInMonths;

  const priceWithSale =
    subscriptionSalePercent &&
    Math.floor(
      subscriptionPrice - (subscriptionPrice / 100) * subscriptionSalePercent
    );

  const totalPrice =
    subscriptionSalePercent && priceWithSale
      ? priceWithSale * durationInMonths
      : subscriptionPrice * durationInMonths;
  return (
    <>
      {isAuthModalOpen && (
        <GlobalModal
          initialFormType="login"
          setAuthModal={setIsAuthModalOpen}
        />
      )}
      {subscriptionModal && (
        <GlobalModal
          subscriptionId={subscriptionId}
          setAuthModal={setSubscriptionModal}
          initialFormType="order"
          priceText={`${declensionMonths(durationInMonths)} за ${
            (subscriptionSalePercent && priceWithSale
              ? priceWithSale
              : subscriptionPrice) * durationInMonths
          }₽`}
          totalPrice={totalPrice}
        />
      )}
      <div
        onClick={handleClickTile}
        className="basis-[33%]  transition-all hover:h-[344px] h-[320px] py-6 px-8 cursor-pointer relative text-[#ececec] flex flex-col justify-between group/subscriptionTile"
      >
        <div
          className={cn(
            "z-[1] absolute inset-0",
            primary
              ? "opacity-100 hover:opacity-0"
              : "opacity-0 hover:opacity-100"
          )}
        ></div>
        <div
          className={cn(
            "absolute inset-0 overflow-hidden",
            primary
              ? "bg-[#fddd2d] group-hover/subscriptionTile:bg-[linear-gradient(292deg,#ff2801b3_.01%,#ff280199_12.51%,#ff280180_29.16%,#ff550c66_45.98%,#fe82174d_66.52%,#fddd2d26,#fddd2d00_100.01%)]"
              : "bg-[#1d1d1d] group-hover/subscriptionTile:bg-[linear-gradient(308deg,#fddd2db3_5.05%,#fddd2d73_15.71%,#fddd2d3d_31.47%,#29292912_61.2%,#29292900_95.16%)]"
          )}
        >
          <img
            src={subscriptionImage}
            alt="-42%"
            className="transition-all z-[2] h-[240px] w-[200px] absolute top-0 right-0 group-hover/subscriptionTile:scale-110"
          />
        </div>
        <SubscriptionTileHeader
          isActive={isActive}
          durationInMonths={durationInMonths}
          primary={primary}
          subscriptionSalePercent={subscriptionSalePercent}
        />
        <SubscriptionTileFooter
          primary={primary}
          durationInMonths={durationInMonths}
          savingPrice={savingPrice!}
          priceWithSale={priceWithSale!}
          subscriptionPrice={subscriptionPrice}
          subscriptionSalePercent={subscriptionSalePercent}
          isActive={isActive}
        />
        {isActive && (
          <SubscriptionOutsideLabel
            userSubscriptionId={(props as ActiveProps).userSubscriptionId}
            endDate={(props as ActiveProps).endDate}
            subscriptionPrice={subscriptionPrice}
            subscriptionType={(props as ActiveProps).subscriptionType}
          />
        )}
      </div>
    </>
  );
};

export default SubscriptionTile;
