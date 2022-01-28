import React, { useState } from "react";
import { ProfileSvg } from "./SvgLib";
import UserMenu from "./UserMenu";
import { ButtonNav } from "../styles/buttons";

const Profile = () => {
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <>
      <ButtonNav profile onClick={() => setShowUserMenu(!showUserMenu)}>
        <ProfileSvg boxSize={21} />
      </ButtonNav>

      {showUserMenu && <UserMenu setShowUserMenu={setShowUserMenu} />}
    </>
  );
};

export default Profile;
