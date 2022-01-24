import React from "react";
import { NavLinkDefault } from "../styles/styles";
import BasketButton from "./BasketButton";

const Menu = () => {
  return (
    <>
      <nav className="menu">
        <ul className="menu__list">
          <li className="menu__item">
            <NavLinkDefault to="/">Home</NavLinkDefault>
          </li>
          <li className="menu__item">
            <NavLinkDefault to="/about">About</NavLinkDefault>
          </li>
          <li className="menu__item">
            <NavLinkDefault to="/cms">CMS</NavLinkDefault>
          </li>
        </ul>
        <BasketButton />
      </nav>
    </>
  );
};

export default Menu;
