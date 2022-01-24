import glamorous from "glamorous";
import { NavLink } from "react-router-dom";

export const colors = {
  celadonBlue: "hsla(198, 63%, 38%, 1)",
  greenSheen: "hsla(170, 40%, 60%, 1)",
  turquoiseGreen: "hsla(139, 50%, 70%, 1)",
  cream: "hsla(71, 100%, 87%, 1)",
  radicalPink: "hsla(344, 100%, 54%, 1)",
  white: "#ffffff",
  gray: "rgb(169, 169, 169)",
  black: "#000000",
};

export const shadows = {
  boxShadowGray: "0 0 4px 1px rgba(169, 169, 169, 0.4)",
};

export const globalVars = {
  radius: 3,
  radiusMd: 10,
  radiusLg: 25,
  transitionTime: 0.3,
};

export const fontFamily = {
  fontFamily: `"Mukta", sans-serif`,
};

export const NavLinkDefault = glamorous(NavLink)({
  display: "inline-block",
  letterSpacing: "1",
  fontFamily: fontFamily.fontFamily,
  textAlign: "center",
  textDecoration: "none",
  fontWeight: 600,
  color: colors.white,
  fontSize: 15,
  borderRadius: globalVars.radius,
  border: `2px solid ${colors.greenSheen}`,
  padding: "7px 10px",
  minWidth: 100,
  transition: "background 0.3s, color 0.3s",
  background: colors.greenSheen,
  ":hover": {
    background: colors.white,
    color: colors.greenSheen,
  },
  ":disabled": {
    background: colors.gray,
    borderColor: colors.gray,
    cursor: "not-allowed",
    ":hover": {
      color: colors.white,
    },
  },
});

export const LinkDefault = glamorous(NavLink)({
  display: "inline-block",
  letterSpacing: "1",
  fontFamily: fontFamily.fontFamily,
  textAlign: "center",
  textDecoration: "none",
  fontWeight: 600,
  border: `2px solid ${colors.turquoiseGreen}`,
  color: colors.white,
  fontSize: 15,
  borderRadius: globalVars.radius,
  padding: "7px 15px",
  minWidth: 100,
  transition: "background 0.3s, color 0.3s",
  background: colors.turquoiseGreen,
  ":hover": {
    background: colors.white,
    color: colors.turquoiseGreen,
  },
  ":disabled": {
    background: colors.gray,
    borderColor: colors.gray,
    cursor: "not-allowed",
    ":hover": {
      color: colors.white,
    },
  },
});

export const ButtonDefault = glamorous.button({
  display: "inline-block",
  fontFamily: fontFamily.fontFamily,
  letterSpacing: "1",
  textAlign: "center",
  fontWeight: 600,
  outline: "none",
  border: `2px solid ${colors.radicalPink}`,
  color: colors.white,
  cursor: "pointer",
  fontSize: 15,
  borderRadius: globalVars.radius,
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
});

export const DivGrid = glamorous.div({
  "@supports (display: grid)": {
    display: "grid",
    gridGap: 15,
    gridTemplateColumns: "repeat(2, 1fr)",
  },
});

export const ArticleKitten = glamorous.article({
  boxShadow: shadows.boxShadowGray,
  marginTop: 60,
  borderRadius: ` ${globalVars.radiusLg}px ${globalVars.radiusLg}px ${globalVars.radius}px ${globalVars.radius}px`,
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
  transition: `border-color ${globalVars.transitionTime}s`,
  ":focus": {
    borderColor: colors.greenSheen,
    backgroundColor: colors.white,
  },
  ":active": {
    borderColor: colors.greenSheen,
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
    borderColor: colors.greenSheen,
  },
  ":focus": {
    borderColor: colors.greenSheen,
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
  margin: "30px 0",
  border: `1px solid ${colors.radicalPink}`,
  borderRadius: globalVars.radiusMd,
  padding: "20px",
});

export const FormItemDefault = glamorous.p({
  marginBottom: 20,
});

export const BasketBtn = glamorous.p({
  position: "absolute",
  right: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  top: -12,
  cursor: "pointer",
  border: `2px solid ${colors.greenSheen}`,
  borderRadius: "50%",
  width: 55,
  height: 55,
  transition: `border-color ${globalVars.transitionTime}s, transform ${globalVars.transitionTime}s`,
  ":hover": {
    borderColor: colors.radicalPink,
    transform: "scale(1.03)",
  },
});

export const Logo = glamorous.div({
  textAlign: "center",
});

export const BasketList = glamorous.div({
  borderRadius: globalVars.radius,
  boxShadow: shadows.boxShadowGray,
  maxWidth: 360,
  background: colors.greenSheen,
  padding: 15,
  color: colors.white,
  position: "absolute",
  right: 0,
  top: 67,
  zIndex: 1,
  fontSize: 18,
  "::before": {
    content: `''`,
    position: "absolute",
    top: -15,
    right: 15,
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderWidth: "0 12px 15px 12px",
    borderColor: `transparent transparent ${colors.greenSheen} transparent`,
  },
});

export const BasketItem = glamorous.li({
  background: colors.white,
  marginBottom: 1,
  borderRadius: globalVars.radius,
  padding: "10px 20px",
  display: "flex",
  fontWeight: "bold",
  gap: 15,
  alignItems: "center",
});
