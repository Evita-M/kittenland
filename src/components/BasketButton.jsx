import React, { useContext, useState } from "react";
import { StorageContext } from "../context/StorageContext";
import { BasketBtn, colors } from "../styles/styles";
import { Span, Svg } from "glamorous";
import BasketContent from "./BasketContent";

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

  return (
    <>
      <p>
        <BasketBtn onClick={() => setShowBasket(!showBasket)}>
          <Svg width={21} height={21} fill={colors.radicalPink}>
            <path
              class="st0"
              d="M19.9,4c-0.1-0.2-0.3-0.3-0.5-0.3H8.1C7.8,3.8,7.5,4,7.5,4.4S7.8,5,8.1,5h10.4l-2.1,6.2H6.2L5,0.6
		C5,0.2,4.7,0,4.4,0H0.6C0.3,0,0,0.3,0,0.6s0.3,0.6,0.6,0.6h3.2L5,11.9c0,0.3,0.3,0.6,0.6,0.6h11.2c0.3,0,0.5-0.2,0.6-0.4L20,4.6
		C20,4.4,20,4.2,19.9,4z"
            />
            <path
              class="st0"
              d="M6.2,15c-1.4,0-2.5,1.1-2.5,2.5S4.9,20,6.2,20s2.5-1.1,2.5-2.5S7.6,15,6.2,15z M6.2,18.8
		c-0.7,0-1.2-0.6-1.2-1.2s0.6-1.2,1.2-1.2s1.2,0.6,1.2,1.2S6.9,18.8,6.2,18.8z"
            />
            <path
              class="st0"
              d="M16.2,15c-1.4,0-2.5,1.1-2.5,2.5s1.1,2.5,2.5,2.5s2.5-1.1,2.5-2.5S17.6,15,16.2,15z M16.2,18.8
		c-0.7,0-1.2-0.6-1.2-1.2s0.6-1.2,1.2-1.2s1.2,0.6,1.2,1.2S16.9,18.8,16.2,18.8z"
            />
          </Svg>
          <Span css={counterStyles}>{basketCount}</Span>
        </BasketBtn>
      </p>

      {showBasket && <BasketContent setShowBasket={setShowBasket} />}
    </>
  );
};

export default BasketButton;
