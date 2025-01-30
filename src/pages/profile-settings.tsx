import React from "react";
import UpdateProfileForm from "../features/update-profile-form/update-profile-form";

const ProfileSettings = () => {
  return (
    <div className="w-[calc(100%-354px)]">
      <section className="flex justify-start">
        <UpdateProfileForm />
      </section>
    </div>
  );
};

export default ProfileSettings;
