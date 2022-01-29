import React, { useState } from "react";
import { ProfileSvg } from "./SvgLib";
import UserMenu from "./UserMenu";
import { ButtonNav } from "../styles/buttons";
import { Div } from "glamorous";
import useClickOutside from "../hooks/useClickOutside";

const Profile = () => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  let domElement = useClickOutside(() => setShowUserMenu(false));
  return (
    <Div innerRef={domElement}>
      <ButtonNav profile onClick={() => setShowUserMenu(!showUserMenu)}>
        <ProfileSvg boxSize={21} />
      </ButtonNav>

      {showUserMenu && <UserMenu setShowUserMenu={setShowUserMenu} />}
    </Div>
  );
};

export default Profile;
