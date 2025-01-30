import React, { Dispatch, FC, SetStateAction } from "react";
import { cn } from "../../shared/utils/cnUtil";
import { X } from "lucide-react";
import MainTitle from "../../shared/ui/MainTitle";
import Button from "../../shared/ui/button";
import toast from "react-hot-toast";
import { Api } from "../../shared/api/api";
import { useProfileStore } from "../../entities/user/store/use-profile";
import ReactDOM from "react-dom";
interface Props {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  userSubscriptionId: string;
}
const SubscriptionCancelModal: FC<Props> = ({
  setIsModalOpen,
  userSubscriptionId,
}) => {
  const { fetchUserData } = useProfileStore();
  const handleCloseModal = () => {
    setIsModalOpen(false);
    toast.success("Спасибо что остались с нами", { position: "bottom-right" });
  };
  const handleCancelSubscription = async () => {
    try {
      await Api.subscription.cancelSubscription(userSubscriptionId);
      setIsModalOpen(false);
      toast.success("Вы отменили подписку", { position: "bottom-right" });
      fetchUserData();
    } catch (error) {
      toast.error("something wrong", { position: "bottom-right" });
    }
  };
  return ReactDOM.createPortal(
    <div
      className={cn(
        "bg-[rgba(6,6,6,.8)] flex fixed h-full inset-0 z-[100] animate-fadeIn"
      )}
      style={{ backdropFilter: "blur(.9375rem)" }}
    >
      <aside className="flex flex-col w-full min-w-[20rem] w-full overflow-auto">
        <div className="h-[108px] px-10 flex items-end justify-center relative">
          <div className="w-full flex justify-end">
            <button
              className="px-3 -translate-y-[9px] rounded-xl gap-2 h-10 text-end"
              onClick={() => setIsModalOpen(false)}
            >
              <X className="h-4 w-4 flex justify-center items-center" />
            </button>
          </div>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 top-1/3 w-full text-center">
          <MainTitle text="Новинки выходят каждый день" />
          <p className="pt-4 text-[#bdbdbd] text-[20px]">
            Оставайтесь в подписке, чтобы ничего не пропустить!
          </p>
          <div className="mx-auto max-w-[360px] mt-10">
            <Button
              onClick={handleCloseModal}
              text="Остаться в подписке"
              type="primary"
              className="h-[3.5rem] w-full text-[20px] mb-2"
            />
            <Button
              onClick={handleCancelSubscription}
              text="Отменить подписку"
              className="h-[3.5rem] w-full text-[20px]"
            />
          </div>
        </div>
      </aside>
    </div>,
    document.body
  );
};

export default SubscriptionCancelModal;
