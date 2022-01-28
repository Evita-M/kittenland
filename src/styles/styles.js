import glamorous from "glamorous";
import { global, colors, mediaQueries, shadows } from "./variables";
import { NavLink } from "react-router-dom";

export const ArticleKitten = glamorous.article({
  boxShadow: shadows.boxShadowGray,
  marginTop: 60,
  borderRadius: ` ${global.radiusLg}px ${global.radiusLg}px ${global.radius}px ${global.radius}px`,
  background: colors.cream,
  textAlign: "center",
});

export const InputDefault = glamorous.input({
  border: "none",
  padding: "5px 10px 5px 0",
  outline: "none",
  display: "inline-block",
  width: "100%",
  borderBottom: `1px solid ${colors.radicalPink}`,
  transition: `border-color ${global.transitionTime}s`,
  ":focus": {
    borderColor: colors.turquoiseGreen,
    backgroundColor: colors.white,
  },
  ":active": {
    borderColor: colors.turquoiseGreen,
    backgroundColor: colors.white,
  },
});

export const TextareaDefault = glamorous.textarea({
  border: `1px solid ${colors.radicalPink}`,
  width: "100%",
  borderRadius: "2px",
  padding: "10px",
  resize: "none",
  letterSpacing: "0.8px",
  outline: "none",
  fontFamily: `"Mukta", sans-serif`,
  ":active": {
    borderColor: colors.turquoiseGreen,
  },
  ":focus": {
    borderColor: colors.turquoiseGreen,
  },
});

export const LabelDefault = glamorous.label({
  display: "block",
  textAlign: "left",
  fontSize: "12px",
  color: colors.black,
  fontWeight: "bold",
  letterSpacing: "0.5px",
  marginBottom: "5px",
});

export const FormDefault = glamorous.form({
  border: `1px solid ${colors.radicalPink}`,
  borderRadius: global.radiusMd,
  padding: "20px",
  margin: "0 auto",
  maxWidth: "400px",
});

export const FormItemDefault = glamorous.p({
  marginBottom: 20,
});

export const Logo = glamorous.div({
  textAlign: "center",
});

export const BasketList = glamorous.div({
  borderRadius: global.radius,
  boxShadow: shadows.boxShadowGray,
  maxWidth: 380,
  background: colors.turquoiseGreen,
  padding: 15,
  color: colors.white,
  position: "absolute",
  right: 0,
  top: 93,
  zIndex: 1,
  fontSize: 18,
  "::before": {
    content: `''`,
    position: "absolute",
    top: -15,
    right: 35,
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderWidth: "0 12px 15px 12px",
    borderColor: `transparent transparent ${colors.turquoiseGreen} transparent`,
  },
  [mediaQueries.phone]: {
    width: "100%",
  },
});

export const BasketItem = glamorous.li({
  background: colors.white,
  marginBottom: 3,
  borderRadius: global.radius,
  padding: "5px 10px",
  display: "flex",
  fontSize: 16,
  color: colors.black,
  gap: 15,
  alignItems: "center",
});

export const MenuListDefault = glamorous.ul({
  display: "flex",
  gap: 20,
  alignItems: "center",
  justifyContent: "center",
  listStyle: "none",
  [mediaQueries.phone]: {
    gap: 0,
    flexDirection: "column",
  },
});

export const MenuItemDefault = glamorous.li({
  [mediaQueries.phone]: {
    borderBottom: `2px solid ${colors.white}`,
    width: "100%",
  },
});

export const MenuDefault = glamorous.div({
  [mediaQueries.phone]: {
    display: "none",
  },
});

export const MenuMobile = glamorous.div({
  display: "none",
  position: "absolute",
  width: "100%",
  height: "100vh",
  background: colors.turquoiseGreen,
  top: "100%",
  left: 0,
  [mediaQueries.phone]: {
    display: "block",
    transform: "translateX(-120%)",
    transition: `all 0.5s`,
    zIndex: 1,
  },
});

export const NavbarDefault = glamorous.nav({
  position: "relative",
  padding: "25px 10px",
  height: 94,
  boxShadow: "0 4px 15px -15px rgba(0,0,0,0.9)",
});

export const TitleDefault = glamorous.div({
  textAlign: "center",
  marginBottom: "40px",
  fontSize: "35px",
  fontWeight: "bold",
  letterSpacing: "0.5px",
  ":first-letter": {
    color: colors.turquoiseGreen,
    fontSize: "41px",
  },
});

export const Intro = glamorous.p({
  margin: "0 auto 20px",
  fontSize: 18,
  maxWidth: "600px",
});

export const UserMenuDefault = glamorous.div({
  borderRadius: global.radius,
  boxShadow: shadows.boxShadowGray,
  maxWidth: 380,
  background: colors.turquoiseGreen,
  padding: 15,
  color: colors.white,
  position: "absolute",
  left: 0,
  top: 93,
  zIndex: 1,
  fontSize: 18,
  "::before": {
    content: `''`,
    position: "absolute",
    top: -15,
    left: 35,
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderWidth: "0 12px 15px 12px",
    borderColor: `transparent transparent ${colors.turquoiseGreen} transparent`,
  },
  [mediaQueries.phone]: {
    width: "100%",
    "::before": {
      left: "auto",
      right: 105,
    },
  },
});
