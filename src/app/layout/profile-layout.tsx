import React from "react";
import ProfileMenu from "../../widgets/profile-menu/profile-menu";
import { Outlet } from "react-router-dom";

const ProfileLayout = () => {
  return (
    <div className="mt-8">
      <div className="w-full main-container">
        <div className="flex">
          <ProfileMenu />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ProfileLayout;
