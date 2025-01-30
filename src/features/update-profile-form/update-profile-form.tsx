import React, { useState } from "react";
import { useProfile } from "../../shared/hooks/use-profile";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { FormInput } from "../../shared/ui/form-input";
import { errorCatch } from "../../shared/utils/catchApiError";
import { updateProfileFormSchema } from "./model/updateProfileFormSchema";
import GuestAvatar from "../../shared/ui/guest-avatar";
import AvatarSlider from "../../widgets/avatar-slider/avatar-slider";
import { IUpdateUserDTO } from "../../entities/user/types";
import { filterEmptyFormData } from "../../shared/utils/filterEmptyFormData";
import SectionTitle from "../../shared/ui/section-title";

const UpdateProfileForm = () => {
  const { userData, error, loading, updateUserData } = useProfile();
  const [currentAvatar, setCurrentAvatar] = useState(userData?.avatar || "");
  const form = useForm({
    resolver: zodResolver(updateProfileFormSchema),
    defaultValues: {
      avatar: userData?.avatar,
      name: userData?.name,
      password: "",
      repeatPassword: "",
    },
  });
  const onSubmit = async (data: IUpdateUserDTO) => {
    try {
      const filteredData = filterEmptyFormData(data);
      await updateUserData(filteredData);
      toast.success("Successfully updated profile", {
        position: "bottom-right",
      });
    } catch (error) {
      toast.error(errorCatch(error), {
        position: "bottom-right",
      });
    }
  };
  error && toast.error("Что-то пошло не так", { position: "bottom-right" });
  return (
    <FormProvider {...form}>
      <form
        className="block max-w-[600px] w-full"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="mb-[44px] max-w-[600px] text-[#ececec]">
          <SectionTitle text="Настройки профиля" className="mb-2" />
          <div className="text-[#bdbdbd] mb-4 text-[16px]">Взрослый</div>
          <SectionTitle text="Сменить имя" />
          <div className="max-w-[600px] mb-10">
            <FormInput name="name" placeholder="Ваше имя" />
          </div>
          <SectionTitle text="Сменить пароль" />
          <div className="max-w-[600px] mb-10">
            <FormInput
              name="password"
              placeholder="Новый пароль"
              className="mb-4"
              type="password"
            />
            <FormInput
              name="repeatPassword"
              placeholder="Повторите новый пароль"
              type="password"
            />
          </div>
        </div>
        <SectionTitle text="Сменить аватар" />
        <div
          className="grid max-w-[600px] gap-10"
          style={{ gridTemplateColumns: "1fr 24.5rem" }}
        >
          <button
            type="button"
            className="flex items-center justify-center h-[152px] w-[152px] max-w-[152px] cursor-default bg-[#292929] rounded-full"
          >
            {userData?.avatar?.length ? (
              <img className="w-full h-full rounded-full" src={currentAvatar} />
            ) : (
              <GuestAvatar />
            )}
          </button>
          <AvatarSlider onAvatarChange={setCurrentAvatar} />
        </div>
        <div className="mt-10">
          <button
            disabled={loading}
            type="submit"
            className="bg-[#fddd2d] text-[#141414] rounded-xl gap-2 h-12 w-full py-3 px-[20px] flex items-center justify-center"
          >
            <span className="text-[17px] font-[500]">Сохранить</span>
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default UpdateProfileForm;
