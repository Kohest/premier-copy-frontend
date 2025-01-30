import React from "react";
import ProfileMenuItem from "./profile-menu-item";
import { useProfileStore } from "../../entities/user/store/use-profile";

const ProfileMenu = () => {
  const { logout } = useProfileStore();
  const menuItems = [
    { id: 1, label: "Настройки профиля", link: "/profile/settings" },
    { id: 2, label: "Уведомления", link: "/profile/notifications" },
    { id: 3, label: "Избранное", link: "/profile/favorites" },
    { id: 5, label: "Способы оплаты", link: "/profile/payment" },
    { id: 6, label: "Мои подписки", link: "/subscriptions" },
  ];
  return (
    <div
      className="mr-[52px] flex sticky top-[100px] bg-[#1d1d1d] flex-col h-[600px] rounded-xl
py-6 px-[36px] w-[302px]"
    >
      <ul className="flex flex-col">
        {menuItems.map((item) => (
          <ProfileMenuItem key={item.id} label={item.label} link={item.link} />
        ))}
        <ProfileMenuItem label="Выйти из аккаунта" link="/" onClick={logout} />
      </ul>
    </div>
  );
};

export default ProfileMenu;
