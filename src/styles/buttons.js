import glamorous from "glamorous";
import { resetBtnStyles } from "./utilities";
import { colors, mediaQueries } from "./variables";
import propStyles from "prop-styles";
import { Link, NavLink } from "react-router-dom";

const buttonDefault = {
  display: "inline-block",
  letterSpacing: "1",
  textAlign: "center",
  fontWeight: 600,
  border: `2px solid ${colors.radicalPink}`,
  color: colors.white,
  fontSize: 15,
  borderRadius: global.radius,
  padding: "7px 15px",
  minWidth: 100,
  transition: "background 0.3s, color 0.3s",
  background: colors.radicalPink,
  ":hover": {
    background: colors.white,
    color: colors.radicalPink,
  },
  ":disabled": {
    background: colors.gray,
    borderColor: colors.gray,
    cursor: "not-allowed",
    ":hover": {
      color: colors.white,
    },
  },
};

const linkDefault = {
  ...buttonDefault,
  textDecoration: "none",
};

const buttonNav = {
  ...resetBtnStyles,
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  top: "50%",
  transform: "translateY(-50%)",
  cursor: "pointer",
  border: `2px solid ${colors.turquoiseGreen}`,
  borderRadius: "50%",
  width: 55,
  height: 55,
  transition: `border-color ${global.transitionTime}s, transform ${global.transitionTime}s`,
  ":hover": {
    borderColor: colors.radicalPink,
    transform: "translateY(-50%) scale(1.05)",
  },
};

export const ButtonDefault = glamorous.button(
  { ...resetBtnStyles, ...buttonDefault },
  propStyles({
    success: (success) => ({
      backgroundColor: colors.green,
      borderColor: colors.green,
      ":hover": {
        background: colors.white,
        color: colors.green,
      },
    }),
    primary: (primary) => ({
      backgroundColor: colors.black,
      borderColor: colors.black,
      ":hover": {
        background: colors.white,
        color: colors.black,
      },
    }),
    transparent: (primary) => ({
      backgroundColor: "transparent",
      border: "none",
      padding: 5,
      minWidth: 0,
      [`& svg`]: { verticalAlign: "middle" },
      ":hover": {
        background: "transparent",

        [`& svg`]: {
          fill: colors.radicalPink,
          transition: "fill 0.3s",
        },
      },
    }),
  })
);

export const LinkDefault = glamorous(Link)(
  linkDefault,
  propStyles({
    success: (success) => ({
      backgroundColor: colors.green,
      borderColor: colors.green,
      ":hover": {
        background: colors.white,
        color: colors.green,
      },
    }),
  })
);

export const NavLinkDefault = glamorous(NavLink)({
  ...linkDefault,
  background: colors.turquoiseGreen,
  borderColor: colors.turquoiseGreen,
  ":hover": {
    background: colors.white,
    color: colors.turquoiseGreen,
  },
  "&.active": {
    background: colors.white,
    color: colors.turquoiseGreen,
  },
  [mediaQueries.phone]: {
    width: "100%",
  },
});

export const ButtonNav = glamorous.button(
  buttonNav,
  propStyles({
    profile: (profile) => ({
      left: 20,
      [mediaQueries.phone]: {
        left: "auto",
        right: 90,
      },
    }),
    basket: (basket) => ({
      right: 20,
    }),
  })
);

export const ButtonToggle = glamorous.button({
  ...resetBtnStyles,
  display: "none",
  [mediaQueries.phone]: {
    display: "block",
    padding: "7px 0",
  },
});
