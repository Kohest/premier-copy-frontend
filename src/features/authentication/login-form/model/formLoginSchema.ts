import { z } from "zod";

export const formLoginSchema = z.object({
  email: z.string().email({ message: "Некорректный email" }),
  password: z.string().min(6, { message: "Минимум 6 символов" }),
});
export type TLoginDataForm = z.infer<typeof formLoginSchema>;
