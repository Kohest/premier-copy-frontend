import { useEffect } from "react";
import { useProfileStore } from "../../entities/user/store/use-profile";
import { IUpdateUserDTO, IUserData } from "../../entities/user/types";
import { ILogin, IRegister } from "../../entities/auth/types";
type ReturnProps = {
  loading: boolean;
  error: boolean;
  userData: IUserData | null;
  fetchUserData: () => Promise<void>;
  logout: () => Promise<void>;
  login: (data: ILogin) => Promise<void>;
  register: (data: IRegister) => Promise<void>;
  updateUserData: (data: IUpdateUserDTO) => Promise<void>;
};
export const useProfile = (): ReturnProps => {
  const profileState = useProfileStore((state) => state);

  useEffect(() => {
    if (!profileState.userData) {
      profileState.fetchUserData();
    }
  }, []);

  return profileState;
};
