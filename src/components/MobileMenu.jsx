import { NavLinkDefault } from "../styles/buttons";
import { MenuItemDefault, MenuListDefault, MenuMobile } from "../styles/styles";

const MobileMenu = ({ toggleMenu, setToggleMenu }) => {
  return (
    <MenuMobile
      className="submenu"
      css={{ transform: toggleMenu && "translateX(0%) !important" }}
    >
      <MenuListDefault className="menu__list">
        <MenuItemDefault className="menu__item">
          <NavLinkDefault onClick={() => setToggleMenu(false)} to="/">
            Home
          </NavLinkDefault>
        </MenuItemDefault>
        <MenuItemDefault className="menu__item">
          <NavLinkDefault onClick={() => setToggleMenu(false)} to="/about">
            About
          </NavLinkDefault>
        </MenuItemDefault>
        <MenuItemDefault className="menu__item">
          <NavLinkDefault onClick={() => setToggleMenu(false)} to="/admin">
            Admin
          </NavLinkDefault>
        </MenuItemDefault>
      </MenuListDefault>
    </MenuMobile>
  );
};

export default MobileMenu;
