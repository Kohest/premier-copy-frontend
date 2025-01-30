import { IFullUserSubscription } from "../subscription/types";

export interface ILogin {
  email: string;
  password: string;
}
export interface IRegister {
  email: string;
  name: string;
  password: string;
}
export interface IUserResponse {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  email: string;
  name: string;
  subscriptions: IFullUserSubscription[];
}
export interface IRegisterResponse {
  user: IUserResponse;
  accessToken: string;
}
export interface ILoginResponse {
  user: IUserResponse;
  accessToken: string;
}
