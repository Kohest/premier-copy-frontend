import React, { Dispatch, FC, SetStateAction, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { useProfileStore } from "../../../entities/user/store/use-profile";
import {
  formRegisterSchema,
  TRegisterDataForm,
} from "./model/formRegisterSchema";
import { errorCatch } from "../../../shared/utils/catchApiError";
import GlobalModalHeader from "../../../widgets/global-modal/ui/global-modal-header";
import EmailElement from "../ui/email-element";
import NameElement from "../ui/name-element";
import PasswordElement from "../ui/password-element";
import FormNextButton from "../ui/from-next-button";
import FormSubmitButton from "../ui/form-submit-button";
import GlobalModalFooter from "../../../widgets/global-modal/ui/global-modal-footer";
import RepeatPasswordElement from "../ui/repeat-password-element";
import { InitialFormType } from "../../../widgets/global-modal/types";
interface Props {
  setFormType: Dispatch<SetStateAction<keyof typeof InitialFormType>>;
  setAuthModal: Dispatch<SetStateAction<boolean>>;
  formType: keyof typeof InitialFormType;
}
const RegisterForm: FC<Props> = ({ setFormType, setAuthModal, formType }) => {
  const PROGRESS_STEP = 25;
  const [formProgress, setFormProgress] = useState(25);
  const { register } = useProfileStore();
  const form = useForm({
    resolver: zodResolver(formRegisterSchema),
    defaultValues: {
      email: "",
      name: "",
      password: "",
      repeatPassword: "",
    },
  });
  const onSubmit = async (data: TRegisterDataForm) => {
    try {
      await register(data);
      form.reset();
      setAuthModal(false);
    } catch (error) {
      toast.error(errorCatch(error), {
        position: "bottom-right",
      });
    }
  };
  return (
    <>
      <GlobalModalHeader
        formProgress={formProgress}
        formType={"register"}
        setAuthModal={setAuthModal}
      />
      <div className="py-[84px] flex flex-col items-center mb-auto mt-auto ">
        <div className="px-[2rem] flex flex-col items-center w-full">
          <main className="w-full max-w-[42.5rem] relative text-[#ececec]">
            <FormProvider {...form}>
              <form
                className="flex items-center flex-col text-center"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                {formProgress <= 25 && (
                  <EmailElement setFormType={setFormType} formType={formType} />
                )}
                {formProgress === 50 && <NameElement formType={formType} />}
                {formProgress === 75 && <PasswordElement formType={formType} />}
                {formProgress === 100 && (
                  <RepeatPasswordElement formType={formType} />
                )}
                {formProgress < 99 ? (
                  <FormNextButton
                    formProgress={formProgress}
                    trigger={form.trigger}
                    setFormProgress={setFormProgress}
                    progressStep={PROGRESS_STEP}
                    fieldsToValidate={(formProgress) => {
                      if (formProgress <= 25) {
                        return ["email"];
                      } else if (formProgress === 50) {
                        return ["name"];
                      } else if (formProgress === 75) {
                        return ["password"];
                      } else if (formProgress === 100) {
                        return ["repeatPassword"];
                      }
                      return [];
                    }}
                  />
                ) : (
                  <FormSubmitButton />
                )}
                <GlobalModalFooter />
              </form>
            </FormProvider>
          </main>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
