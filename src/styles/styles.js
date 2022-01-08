import { css } from "glamor";
import glamorous from "glamorous";

export const colors = {
  celadonBlue: "hsla(198, 63%, 38%, 1)",
  greenSheen: "hsla(170, 40%, 60%, 1)",
  turquoiseGreen: "hsla(139, 36%, 78%, 1)",
  cream: "hsla(71, 100%, 87%, 1)",
  radicalPink: "hsla(344, 100%, 54%, 1)",
  white: "#ffffff",
  gray: "#a9a9a9",
};

export const globalVars = {
  radius: 3,
};

export const ButtonDefault = glamorous.button({
  display: "inline-block",
  letterSpacing: "1",
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
    marginBottom: 20,
  },
});

export const ArticleKitten = glamorous.article({
  border: `2px solid ${colors.greenSheen}`,
  borderRadius: globalVars.radius,
  padding: 10,
});

export const ImageDefault = glamorous.img({
  background: colors.white,
  padding: 15,
  borderRadius: globalVars.radius,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
