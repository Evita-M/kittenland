import React from "react";
import { NavLink } from "react-router-dom";
import Basket from "./Basket";

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
        <Basket />
      </nav>
    </>
  );
};

export default Menu;
