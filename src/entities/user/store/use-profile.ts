import { create } from "zustand";
import { Api } from "../../../shared/api/api";
import { IUpdateUserDTO, IUserData } from "../types";
import { ILogin, IRegister } from "../../auth/types";

interface InitialState {
  loading: boolean;
  error: boolean;
  userData: IUserData | null;
  fetchUserData: () => Promise<void>;
  logout: () => Promise<void>;
  register: (data: IRegister) => Promise<void>;
  login: (data: ILogin) => Promise<void>;
  updateUserData: (data: IUpdateUserDTO) => Promise<void>;
}
export const useProfileStore = create<InitialState>((set, get) => ({
  userData: null,
  error: false,
  loading: true,
  fetchUserData: async () => {
    try {
      set({ loading: true, error: false });
      const data = await Api.user.getUser();
      set({ userData: data });
    } catch (error: any) {
      console.log(error);
      if (error.response?.status !== 401) {
        set({ error: true });
      }
    } finally {
      set({ loading: false });
    }
  },
  login: async (data: ILogin) => {
    try {
      set({ loading: true, error: false });
      const loginResponse = await Api.auth.login(data);
      set({ userData: loginResponse.user });
    } catch (error) {
      console.log(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
  register: async (data: IRegister) => {
    try {
      set({ loading: true, error: false });
      const registerResponse = await Api.auth.register(data);
      set({ userData: registerResponse.user });
    } catch (error) {
      console.log(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
  logout: async () => {
    try {
      set({ loading: true, error: false });
      await Api.auth.logout();
      set({ userData: null });
    } catch (error) {
      console.log(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
  updateUserData: async (data: IUpdateUserDTO) => {
    try {
      set({ loading: true, error: false });
      const response = await Api.user.updateUser(data);
      set({ userData: response });
    } catch (error) {
      console.log(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
}));
