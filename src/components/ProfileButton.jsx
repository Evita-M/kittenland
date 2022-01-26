import React, { useState } from "react";
import { ProfileBtn } from "../styles/styles";
import { ProfileSvg } from "../assets/svgComponents";
import UserMenu from "./UserMenu";

const ProfileButton = () => {
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <>
      <ProfileBtn onClick={() => setShowUserMenu(!showUserMenu)}>
        <ProfileSvg boxSize={21} />
      </ProfileBtn>

      {showUserMenu && <UserMenu setShowUserMenu={setShowUserMenu} />}
    </>
  );
};

export default ProfileButton;
