import glamorous from "glamorous";
import { colors } from "./variables";

const ContainerApp = glamorous.div({
  maxWidth: "1200px",
  background: colors.white,
  padding: "15px 15px 30px",
  margin: "0 auto",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  boxShadow: `0 0 10px 5px rgba(169,169,169, 0.5)`,
});

const ContainerMain = glamorous.div({
  padding: "30px 0 0",
  textAlign: "center",
  flex: "1 1 auto",
  height: "100%",
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
  position: "fixed",
  height: "100%",
  inset: 0,
  backgroundColor: "rgba(0,0,0,0.8)",
  zIndex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const ModalWrapper = glamorous.div({
  maxWidth: "420px",
  position: "relative",
  flex: 1,
  maxHeight: "100%",
  margin: "0 15px",
  padding: "15px 0",
  overflow: "auto",
});

export {
  ContainerApp,
  ContainerMain,
  ContainerGrid,
  ContainerCenter,
  ContainerModal,
  ModalWrapper,
};
