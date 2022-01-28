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
import { ContainerModal } from "../styles/layout";

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
            <NavLinkDefault onClick={() => setToggleMenu(!toggleMenu)} to="/">
              Home
            </NavLinkDefault>
          </MenuItemDefault>
          <MenuItemDefault className="menu__item">
            <NavLinkDefault
              onClick={() => setToggleMenu(!toggleMenu)}
              to="/about"
            >
              About
            </NavLinkDefault>
          </MenuItemDefault>
          <MenuItemDefault className="menu__item">
            <NavLinkDefault
              onClick={() => setToggleMenu(!toggleMenu)}
              to="/admin"
            >
              Admin
            </NavLinkDefault>
          </MenuItemDefault>
        </MenuListDefault>
      </MenuMobile>
    </NavbarDefault>
  );
};

export default Menu;
