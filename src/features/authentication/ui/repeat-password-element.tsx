import React, { FC } from "react";
import { FormInput } from "../../../shared/ui/form-input";
import { InitialFormType } from "../../../widgets/global-modal/types";

interface Props {
  formType: keyof typeof InitialFormType;
}
const RepeatPasswordElement: FC<Props> = ({ formType }) => {
  return (
    <>
      <label className="text-[#ececec] mb-2 text-[26px] font-bold">
        Повторите ваш пароль
      </label>
      <p className="text-[#bdbdbd] text-[16px] text-center">
        чтобы{" "}
        {formType === "login" ? "войти в ваш аккаунт" : "зарегистрироваться"} на
        PREMIER
      </p>
      <div className="w-[340px] mt-6 mb-[60px] relative">
        <FormInput
          name="repeatPassword"
          placeholder="Повторите пароль"
          type="password"
        />
      </div>
    </>
  );
};

export default RepeatPasswordElement;
