import React, { useState } from "react";
import { HamburgerSvg } from "../assets/svgComponents";

import {
  ButtonToggle,
  MenuDefault,
  MenuItemDefault,
  MenuListDefault,
  MenuMobile,
  NavbarDefault,
  NavLinkDefault,
} from "../styles/styles";
import BasketButton from "./BasketButton";
import ProfileButton from "./ProfileButton";

const Menu = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <NavbarDefault>
      <ButtonToggle onClick={() => setToggleMenu(!toggleMenu)}>
        <HamburgerSvg boxSize={30} />
      </ButtonToggle>
      <ProfileButton />
      <MenuDefault className="menu">
        <MenuListDefault className="menu__list">
          <MenuItemDefault className="menu__item">
            <NavLinkDefault to="/">Home</NavLinkDefault>
          </MenuItemDefault>
          <MenuItemDefault className="menu__item">
            <NavLinkDefault to="/about">About</NavLinkDefault>
          </MenuItemDefault>
          <MenuItemDefault className="menu__item">
            <NavLinkDefault to="/admin">Admin</NavLinkDefault>
          </MenuItemDefault>
        </MenuListDefault>
      </MenuDefault>
      <BasketButton />
      <MenuMobile
        className="submenu"
        css={{ transform: toggleMenu && "translateX(0%) !important" }}
      >
        <MenuListDefault className="menu__list">
          <MenuItemDefault className="menu__item">
            <NavLinkDefault to="/">Home</NavLinkDefault>
          </MenuItemDefault>
          <MenuItemDefault className="menu__item">
            <NavLinkDefault to="/about">About</NavLinkDefault>
          </MenuItemDefault>
          <MenuItemDefault className="menu__item">
            <NavLinkDefault to="/admin">Admin</NavLinkDefault>
          </MenuItemDefault>
        </MenuListDefault>
      </MenuMobile>
      {/* {toggleMenu && (
        <MenuDefault>
          <MenuListDefault className="menu__list">
            <MenuItemDefault className="menu__item">
              <NavLinkDefault to="/">Home</NavLinkDefault>
            </MenuItemDefault>
            <MenuItemDefault className="menu__item">
              <NavLinkDefault to="/about">About</NavLinkDefault>
            </MenuItemDefault>
            <MenuItemDefault className="menu__item">
              <NavLinkDefault to="/cms">CMS</NavLinkDefault>
            </MenuItemDefault>
          </MenuListDefault>
        </MenuDefault>
      )} */}
    </NavbarDefault>
  );
};

export default Menu;
