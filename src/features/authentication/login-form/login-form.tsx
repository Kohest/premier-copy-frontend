import React, { Dispatch, FC, SetStateAction, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formLoginSchema, TLoginDataForm } from "./model/formLoginSchema";
import toast from "react-hot-toast";
import { useProfileStore } from "../../../entities/user/store/use-profile";
import { errorCatch } from "../../../shared/utils/catchApiError";
import EmailElement from "../ui/email-element";
import PasswordElement from "../ui/password-element";
import FormNextButton from "../ui/from-next-button";
import FormSubmitButton from "../ui/form-submit-button";
import GlobalModalFooter from "../../../widgets/global-modal/ui/global-modal-footer";
import { InitialFormType } from "../../../widgets/global-modal/types";
import GlobalModalHeader from "../../../widgets/global-modal/ui/global-modal-header";
interface Props {
  setFormType: Dispatch<SetStateAction<keyof typeof InitialFormType>>;
  setAuthModal: Dispatch<SetStateAction<boolean>>;
  formType: keyof typeof InitialFormType;
}
const LoginForm: FC<Props> = ({ setFormType, setAuthModal, formType }) => {
  const [formProgress, setFormProgress] = useState(50);
  const { login } = useProfileStore();
  const PROGRESS_STEP = 50;
  const form = useForm({
    resolver: zodResolver(formLoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = async (data: TLoginDataForm) => {
    try {
      await login(data);
      form.reset();
      setAuthModal(false);
    } catch (error) {
      toast.error(errorCatch(error), {
        position: "bottom-right",
      });
      console.log(error);
    }
  };
  return (
    <>
      <GlobalModalHeader
        formProgress={formProgress}
        formType={"login"}
        setAuthModal={setAuthModal}
      />
      <div className="py-[84px] flex flex-col items-center mb-auto mt-auto ">
        <div className="px-[2rem] flex flex-col items-center w-full">
          <main className="w-full max-w-[42.5rem] relative text-[#ececec]">
            <FormProvider {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex items-center flex-col text-center"
              >
                {formProgress <= 50 && (
                  <EmailElement setFormType={setFormType} formType={formType} />
                )}
                {formProgress > 50 && <PasswordElement formType={formType} />}
                {formProgress < 99 ? (
                  <FormNextButton
                    fieldsToValidate={(formProgress) =>
                      formProgress <= 50 ? ["email"] : ["password"]
                    }
                    formProgress={formProgress}
                    progressStep={PROGRESS_STEP}
                    trigger={form.trigger}
                    setFormProgress={setFormProgress}
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

export default LoginForm;
