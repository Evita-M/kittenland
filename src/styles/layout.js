import glamorous from "glamorous";
import { colors, mediaQueries } from "./variables";

const ContainerApp = glamorous.div({
  maxWidth: "1200px",
  background: colors.white,
  padding: "15px 15px 30px",
  margin: "0 auto",
  minHeight: "100vh",
  boxShadow: `0 0 10px 5px rgba(${colors.gray}, 0.5)`,
  [mediaQueries.phone]: {},
});

const ContainerMain = glamorous.div({
  padding: "30px 0 0",
  textAlign: "center",
});

const ContainerCenter = glamorous.div({
  maxWidth: "450px",
  padding: "20px 40px",
  margin: "0 auto",
});

const ContainerGrid = glamorous.div({
  "@supports (display: grid)": {
    display: "grid",
    gridGap: 15,
    gridTemplateColumns: "repeat(2, 1fr)",
    maxWidth: "450px",
    margin: "0 auto",
  },
});

const ContainerModal = glamorous.div({
  position: "absolute",
  height: "100vh",
  padding: "0 15px",
  inset: 0,
  backgroundColor: "rgba(0,0,0,0.7)",
});

export {
  ContainerApp,
  ContainerMain,
  ContainerGrid,
  ContainerCenter,
  ContainerModal,
};
