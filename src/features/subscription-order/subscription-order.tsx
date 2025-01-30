import React, { Dispatch, FC, SetStateAction } from "react";

import SubscriptionModelContent from "./ui/subscription-order-content";
import GlobalModalHeader from "../../widgets/global-modal/ui/global-modal-header";
import GlobalModalFooter from "../../widgets/global-modal/ui/global-modal-footer";

interface Props {
  setAuthModal: Dispatch<SetStateAction<boolean>>;
  priceText: string;
  totalPrice: number;
  subscriptionId: string;
}
const SubscriptionOrder: FC<Props> = ({
  setAuthModal,
  priceText,
  totalPrice,
  subscriptionId,
}) => {
  return (
    <>
      <GlobalModalHeader
        formProgress={25}
        formType={"order"}
        setAuthModal={setAuthModal}
      />
      <div className="py-[84px] flex flex-col items-center mb-auto mt-auto">
        <SubscriptionModelContent
          subscriptionId={subscriptionId}
          priceText={priceText}
          totalPrice={totalPrice}
        />
        <GlobalModalFooter />
      </div>
    </>
  );
};

export default SubscriptionOrder;
