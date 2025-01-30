import React, { FC } from "react";
import Divider from "../../shared/ui/divider";
import ProfileModalButton from "./ui/proifle-modal-button";
import {
  Bell,
  Bookmark,
  CreditCard,
  LogOut,
  Play,
  Settings,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
interface Props {
  handleLogout: () => void;
}
const ProfileModal: FC<Props> = ({ handleLogout }) => {
  const navigate = useNavigate();
  return (
    <div className="h-auto absolute top-full w-max right-0">
      <div
        className="h-auto flex rounded-xl items-start bg-[rgba(26,26,26,.74)] mt-[22px] w-[458px] backdrop-blur-2xl py-[20px] px-[16px] max-h-[calc(100vh-80px)]
  flex-col"
      >
        <div className="w-full mx-auto">
          <div className="bg-none my-0 mx-auto rounded-xl w-full max-w-[552px]">
            <ProfileModalButton
              text="Настройки профиля"
              onClick={() => navigate("/profile/settings")}
              Icon={<Settings />}
            />
            <ProfileModalButton text="Уведомления" Icon={<Bell />} />
            <ProfileModalButton
              text="Избранное"
              Icon={<Bookmark />}
              onClick={() => navigate("/profile/favorites")}
            />
            <ProfileModalButton text="Способы оплаты" Icon={<CreditCard />} />
            <ProfileModalButton
              text="Мои подписки"
              onClick={() => navigate("/subscriptions")}
              Icon={<Play />}
            />
          </div>
          <Divider />
          <ProfileModalButton
            text="Выйти из аккаунта"
            onClick={handleLogout}
            Icon={<LogOut />}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
