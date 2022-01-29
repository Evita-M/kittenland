import React, { useState } from "react";
import { HamburgerSvg } from "./SvgLib";
import BasketButton from "./Basket";
import ProfileButton from "./Profile";
import {
  MenuDefault,
  MenuItemDefault,
  MenuListDefault,
  MenuMobile,
  NavbarDefault,
} from "../styles/styles";

import { ButtonToggle, NavLinkDefault } from "../styles/buttons";
import useClickOutside from "../hooks/useClickOutside";
import { Div } from "glamorous";
import MobileMenu from "./MobileMenu";

const Menu = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  let domElement = useClickOutside(() => setToggleMenu(false));

  return (
    <NavbarDefault>
      <ProfileButton />
      <MenuDefault>
        <MenuListDefault>
          <MenuItemDefault>
            <NavLinkDefault activeclassname="active" to="/">
              Home
            </NavLinkDefault>
          </MenuItemDefault>
          <MenuItemDefault>
            <NavLinkDefault activeclassname="active" to="/about">
              About
            </NavLinkDefault>
          </MenuItemDefault>
          <MenuItemDefault>
            <NavLinkDefault activeclassname="active" to="/admin">
              Admin
            </NavLinkDefault>
          </MenuItemDefault>
        </MenuListDefault>
      </MenuDefault>
      <BasketButton />
      <Div width={0} innerRef={domElement}>
        <ButtonToggle onClick={() => setToggleMenu(!toggleMenu)}>
          <HamburgerSvg boxSize={30} />
        </ButtonToggle>
        <MobileMenu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      </Div>
    </NavbarDefault>
  );
};

export default Menu;
