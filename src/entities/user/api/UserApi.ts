import { axiosWithAuth } from "../../../shared/api/axiosInstance";
import { IUpdateUserDTO } from "../types";

export const getUser = async () => {
  return (await axiosWithAuth.get("/user")).data;
};
export const updateUser = async (data: IUpdateUserDTO) => {
  return (await axiosWithAuth.put("/user", data)).data;
};
