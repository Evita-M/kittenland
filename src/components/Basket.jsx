import React, { useContext, useState } from "react";
import { StorageContext } from "../context/StorageContext";
import { Div, Span } from "glamorous";
import BasketContent from "./BasketContent";
import { BasketSvg } from "./SvgLib";
import { ButtonNav } from "../styles/buttons";
import { colors } from "../styles/variables";
import useClickOutside from "../hooks/useClickOutside";

const BasketButton = () => {
  const { basketCount } = useContext(StorageContext);
  const [showBasket, setShowBasket] = useState(false);

  const counterStyles = {
    position: "absolute",
    right: -10,
    top: -8,
    width: 15,
    height: 15,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    lineHeight: 1,
    background: colors.radicalPink,
    fontSize: 14,
    color: colors.white,
    fontWeight: "bold",
  };
  let domElement = useClickOutside(() => setShowBasket(false));

  return (
    <Div innerRef={domElement}>
      <ButtonNav basket onClick={() => setShowBasket(!showBasket)}>
        <BasketSvg boxSize={21} />
        <Span css={counterStyles}>{basketCount}</Span>
      </ButtonNav>

      {showBasket && <BasketContent setShowBasket={setShowBasket} />}
    </Div>
  );
};

export default BasketButton;
