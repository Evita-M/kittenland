import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <nav className="menu">
        <ul className="menu__list">
          <li className="menu__item">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="menu__item">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="menu__item">
            <NavLink to="/cms">CMS</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Menu;
