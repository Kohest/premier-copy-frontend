import { axiosClassic } from "../../../shared/api/axiosInstance";
import {
  removeFromStorage,
  saveTokenStorage,
} from "../../../shared/lib/cookie/getToken";
import { ILogin, ILoginResponse, IRegister, IRegisterResponse } from "../types";

export const login = async (data: ILogin) => {
  const response = await axiosClassic.post<ILoginResponse>("/auth/login", data);
  if (response.data.accessToken) saveTokenStorage(response.data.accessToken);
  return response.data;
};
export const register = async (data: IRegister) => {
  const response = await axiosClassic.post<IRegisterResponse>(
    "/auth/register",
    data
  );
  if (response.data.accessToken) saveTokenStorage(response.data.accessToken);
  return response.data;
};
export const logout = async () => {
  const response = await axiosClassic.post("/auth/logout");
  if (response.data) removeFromStorage();
};
export const getNewTokens = async () => {
  const response = await axiosClassic.post<IRegisterResponse>(
    "/auth/login/access-token"
  );
  if (response.data.accessToken) saveTokenStorage(response.data.accessToken);
  return response;
};
