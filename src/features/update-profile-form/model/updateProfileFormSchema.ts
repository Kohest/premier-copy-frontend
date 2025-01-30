import { z } from "zod";

export const updateProfileFormSchema = z
  .object({
    avatar: z.string().optional(),
    name: z.string().optional(),
    password: z.string().optional(),
    repeatPassword: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.password && !data.repeatPassword) {
      ctx.addIssue({
        code: "custom",
        message: "Подтверждение пароля обязательно, если пароль заполнен",
        path: ["repeatPassword"],
      });
    }
    if (
      data.password &&
      data.repeatPassword &&
      data.password !== data.repeatPassword
    ) {
      ctx.addIssue({
        code: "custom",
        message: "Пароли должны совпадать",
        path: ["repeatPassword"],
      });
    }
  });
