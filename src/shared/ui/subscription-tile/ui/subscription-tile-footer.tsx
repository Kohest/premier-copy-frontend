import React, { FC } from "react";
import { cn } from "../../../utils/cnUtil";
interface Props {
  primary: boolean;
  subscriptionSalePercent?: number | null;
  subscriptionPrice: number;
  isActive?: boolean;
  savingPrice: number;
  priceWithSale: number;
  durationInMonths: number;
}
const SubscriptionTileFooter: FC<Props> = ({
  primary,
  savingPrice,
  subscriptionPrice,
  subscriptionSalePercent,
  priceWithSale,
  durationInMonths,
  isActive = false,
}) => {
  return (
    <div className="max-w-[299px] z-10">
      <div
        className={cn(
          "mb-2 text-[34px] font-bold",
          primary && "text-[#141414] font-bold"
        )}
      >
        {subscriptionSalePercent ? priceWithSale : subscriptionPrice}₽
        <span className="text-[26px] font-bold ">/мес</span>
      </div>
      <div
        className={cn(
          "mb-4 pl-[18px] relative text-[12px] before:absolute before:rounded-xl before:inline-block before:h-[3px] before:w-[3px] before:left-2 before:bottom-1/3",
          primary
            ? "text-[#141414] before:bg-[#141414] font-bold"
            : "text-[#bdbdbd] before:bg-[#bdbdbd]"
        )}
      >
        {subscriptionSalePercent
          ? `экономия ${savingPrice}₽`
          : "Обычная стоимость"}
      </div>
      <button
        disabled={isActive}
        className={cn(
          "w-full h-[56px] gap-2 rounded-2xl py-3 px-[20px] inline-flex items-center justify-center",
          primary
            ? "bg-[#141414] group-hover/subscriptionTile:text-[#fddd2d]"
            : "bg-[#292929] group-hover/subscriptionTile:bg-[#fddd2d] group-hover/subscriptionTile:text-[#292929]"
        )}
      >
        <span className="font-[500] text-[20px]">
          {isActive
            ? "Оформлена"
            : `${durationInMonths} мес за ${
                subscriptionSalePercent
                  ? priceWithSale * durationInMonths
                  : subscriptionPrice
              }₽`}
        </span>
      </button>
    </div>
  );
};

export default SubscriptionTileFooter;
