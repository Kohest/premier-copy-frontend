import React, {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { cn } from "../../shared/utils/cnUtil";
import RegisterForm from "../../features/authentication/register-form/register-form";
import LoginForm from "../../features/authentication/login-form/login-form";
import SubscriptionOrder from "../../features/subscription-order/subscription-order";
import ReactDOM from "react-dom";
interface BaseProps {
  setAuthModal: Dispatch<SetStateAction<boolean>>;
}
interface OrderProps extends BaseProps {
  initialFormType: "order";
  totalPrice: number;
  priceText: string;
  subscriptionId: string;
}
interface NonOrderProps extends BaseProps {
  initialFormType?: "login" | "register";
}
type Props = OrderProps | NonOrderProps;
const GlobalModal: FC<Props> = ({
  setAuthModal,
  initialFormType = "login",
  ...props
}) => {
  const [formType, setFormType] =
    useState<typeof initialFormType>(initialFormType);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);
  const priceText = formType === "order" && (props as OrderProps).priceText;
  const totalPrice = formType === "order" && (props as OrderProps).totalPrice;
  return ReactDOM.createPortal(
    <div
      className={cn(
        "bg-[rgba(6,6,6,.8)] flex fixed h-full inset-0 z-[100] animate-fadeIn"
      )}
      style={{ backdropFilter: "blur(.9375rem)" }}
    >
      <aside className="flex flex-col w-full min-w-[20rem] w-full overflow-auto">
        {formType === "login" ? (
          <LoginForm
            setFormType={setFormType}
            setAuthModal={setAuthModal}
            formType={formType}
          />
        ) : formType === "register" ? (
          <RegisterForm
            setFormType={setFormType}
            setAuthModal={setAuthModal}
            formType={formType}
          />
        ) : (
          formType === "order" &&
          priceText &&
          totalPrice && (
            <SubscriptionOrder
              subscriptionId={(props as OrderProps).subscriptionId}
              setAuthModal={setAuthModal}
              priceText={priceText}
              totalPrice={totalPrice}
            />
          )
        )}
      </aside>
    </div>,
    document.body
  );
};

export default GlobalModal;
