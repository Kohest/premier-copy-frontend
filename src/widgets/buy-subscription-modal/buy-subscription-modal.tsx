import React, { FC, useEffect } from "react";
import { X } from "lucide-react";
import { cn } from "../../shared/utils/cnUtil";
import ReactDOM from "react-dom";
import MainTitle from "../../shared/ui/MainTitle";
import Button from "../../shared/ui/button";
import SectionTitle from "../../shared/ui/section-title";
import { useNavigate } from "react-router-dom";
interface Props {
  setIsModalOpen: (arg: boolean) => void;
}
const BuySubscriptionModal: FC<Props> = ({ setIsModalOpen }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    setIsModalOpen(false);
    navigate("/subscriptions");
  };
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);
  return ReactDOM.createPortal(
    <div
      className={cn(
        "bg-[rgba(6,6,6,.8)] flex fixed h-full inset-0 z-[100] animate-fadeIn"
      )}
      style={{ backdropFilter: "blur(.9375rem)" }}
    >
      <aside className="flex flex-col w-full min-w-[20rem] w-full overflow-auto px-[78px]">
        <div className="h-[108px] flex items-end justify-center ">
          <div className="w-full flex justify-end">
            <button
              className="px-3 -translate-y-[9px] rounded-xl gap-2 h-10 text-end"
              onClick={() => setIsModalOpen(false)}
            >
              <X className="h-4 w-4 flex justify-center items-center" />
            </button>
          </div>
        </div>
        <div className=" aspect-video max-h-[calc(100vh-152px)] min-h-[613px] flex overflow-hidden flex-col justify-center items-center w-full relative">
          <div className="absolute h-full left-0 overflow-hidden top-0 w-full rounded-[40px] text-center text-[#ececec] before:h-full before:left-0 before:absolute before:w-full before:bg-[linear-gradient(180deg,#000000b3,#0000_55.37%,#000000b1)]">
            <video
              className="w-full h-full object-cover object-center origin-center"
              poster="https://premier.one/_nuxt/1720.B5eB7Yzv.jpg"
              autoPlay
              preload="none"
              disablePictureInPicture
              playsInline
              loop
            >
              <source src="https://premier.one/_nuxt/promo-1720-970.DiglofLl.mp4" />
            </video>
          </div>
          <div className="py-[9.75rem] px-[1rem] flex flex-col relative justify-around h-full items-center text-center">
            <MainTitle size="2xl" text="Лучшие российские сериалы впереди!" />
            <SectionTitle
              className="text-[20px] font-[400] -mt-28"
              text="Начните смотреть любимые фильмы и сериалы прямо сейчас от 83₽ в месяц"
            />
            <div className="w-full">
              <Button
                onClick={handleNavigate}
                text="Подключить сейчас"
                type="primary"
                className="px-[5rem]"
              />
            </div>
          </div>
        </div>
      </aside>
    </div>,
    document.body
  );
};

export default BuySubscriptionModal;
