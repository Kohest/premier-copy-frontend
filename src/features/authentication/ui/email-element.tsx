import React, { Dispatch, FC, SetStateAction } from "react";
import { FormInput } from "../../../shared/ui/form-input";
import { InitialFormType } from "../../../widgets/global-modal/types";

interface Props {
  setFormType: Dispatch<SetStateAction<keyof typeof InitialFormType>>;
  formType: keyof typeof InitialFormType;
}
const EmailElement: FC<Props> = ({ setFormType, formType }) => {
  return (
    <>
      {formType === "login" ? (
        <div>
          <label className="text-[#ececec] mb-2 text-[26px] font-bold">
            Введите электронную почту
          </label>
          <p className="text-[#bdbdbd] text-[16px] text-center">
            чтобы зарегистрироваться на PREMIER
          </p>
          <p className="text-[#bdbdbd] text-[16px] text-center">
            или{" "}
            <span
              className="cursor-pointer hover:text-[#ececec] underline hover:no-underline"
              onClick={() => setFormType("register")}
            >
              зарегистрируйте аккаунт
            </span>
          </p>
        </div>
      ) : (
        <div>
          <label className="text-[#ececec] mb-2 text-[26px] font-bold">
            Введите электронную почту
          </label>
          <p className="text-[#bdbdbd] text-[16px] text-center">
            чтобы зарегистрироваться на PREMIER
          </p>
          <p className="text-[#bdbdbd] text-[16px] text-center">
            или{" "}
            <span
              className="cursor-pointer hover:text-[#ececec] underline hover:no-underline"
              onClick={() => setFormType("login")}
            >
              войдите в аккаунт
            </span>
          </p>
        </div>
      )}
      <div className="w-[340px] mt-6 mb-[60px] relative">
        <FormInput name="email" placeholder="Введите вашу электронную почту" />
      </div>
    </>
  );
};

export default EmailElement;
