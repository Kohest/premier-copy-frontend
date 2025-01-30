import React, { FC } from "react";
import { cn } from "../../../utils/cnUtil";
import SubscriptionActive from "./subscription-active";
import { declensionMonths } from "../../../utils/declensionMonths";
interface Props {
  primary: boolean;
  subscriptionSalePercent?: number | null;
  durationInMonths: number;
  isActive?: boolean;
}
const SubscriptionTileHeader: FC<Props> = ({
  durationInMonths,
  primary,
  isActive = false,
  subscriptionSalePercent,
}) => {
  return (
    <div className="max-w-[299px]">
      <span
        className={cn(
          "flex relative mb-1",
          primary ? "text-[#141414] font-bold" : "text-[#ececec]"
        )}
      >
        <span className="text-[26px] font-bold">{`${declensionMonths(
          durationInMonths
        )}`}</span>
        {subscriptionSalePercent && (
          <span
            className="px-2 h-6 absolute flex justify-center items-center bg-[#fddd2d] text-[#141414]
w-max left-28 bottom-[60%] rounded-md font-bold text-[14px]"
            style={{
              boxShadow:
                "0rem .25rem 1rem rgba(0,0,0,.2),0rem 1rem 1.5rem rgba(0,0,0,.2),0rem 1.25rem 3.75rem rgba(0,0,0,.48)",
            }}
          >
            -{subscriptionSalePercent}%
          </span>
        )}
      </span>
      {isActive && <SubscriptionActive />}
    </div>
  );
};

export default SubscriptionTileHeader;
