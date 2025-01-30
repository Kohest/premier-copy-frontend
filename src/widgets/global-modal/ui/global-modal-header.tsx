import React, { Dispatch, FC, SetStateAction } from "react";
import AuthProgress from "../../../features/authentication/ui/auth-progress";
import { X } from "lucide-react";
import { InitialFormType } from "../types";
interface Props {
  formProgress: number;
  formType: keyof typeof InitialFormType;
  setAuthModal: Dispatch<SetStateAction<boolean>>;
}
const GlobalModalHeader: FC<Props> = ({
  formProgress,
  formType,
  setAuthModal,
}) => {
  return (
    <div className="h-[108px] px-10 flex items-end justify-center relative">
      <div className="absolute left-1/2 -translate-x-1/2 top-[54px] w-full">
        <div className="mb-6 flex justify-center items-center">
          <img
            src="https://premier.one/_nuxt/premier-logo.bkJfLUwa.svg"
            className="max-w-[152px] h-auto w-full block"
            alt="logo"
          />
        </div>
        <h3 className="text-center text-[20px] font-bold ">
          {formType === "login"
            ? "Вход в аккаунт PREMIER"
            : formType === "register"
            ? "Регистрация аккаунта на PREMIER"
            : "Оформление подписки"}
        </h3>
        <AuthProgress formProgress={formProgress} />
      </div>
      <div className="w-full flex justify-end">
        <button
          className="px-3 -translate-y-[9px] rounded-xl gap-2 h-10 text-end"
          onClick={() => setAuthModal(false)}
        >
          <X className="h-4 w-4 flex justify-center items-center" />
        </button>
      </div>
    </div>
  );
};

export default GlobalModalHeader;
