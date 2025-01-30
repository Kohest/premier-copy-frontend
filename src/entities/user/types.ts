import { IFullUserSubscription } from "../subscription/types";

export interface IUserData {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  avatar?: string;
  subscriptions: IFullUserSubscription[];
}
export interface IUpdateUserDTO {
  email?: string;
  name?: string;
  password?: string;
  avatar?: string;
}
