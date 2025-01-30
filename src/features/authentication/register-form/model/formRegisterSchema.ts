import { z } from "zod";

export const formRegisterSchema = z.object({
  email: z.string().email({ message: "Некорректный email" }),
  name: z
    .string()
    .min(4, { message: "Минимум 4 символа" })
    .max(20, { message: "Максимум 20 символов" }),
  password: z.string().min(6, { message: "Минимум 6 символов" }),
  repeatPassword: z
    .string()
    .min(6, { message: "Минимум 6 символов" })
    .refine((data: any) => data.password === data.repeatPassword, {
      message: "Пароли не совпадают",
      path: ["repeatPassword"],
    }),
});
export type TRegisterDataForm = z.infer<typeof formRegisterSchema>;
