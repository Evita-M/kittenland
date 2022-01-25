import { Svg } from "glamorous";
import { colors } from "../styles/styles";

export const BasketSvg = ({ boxSize = 30 }) => {
  return (
    <Svg width={boxSize} height={boxSize} fill={colors.radicalPink}>
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
  );
};

export const HamburgerSvg = ({ boxSize = 30 }) => {
  return (
    <Svg
      width={boxSize}
      height={boxSize}
      viewBox="0 0 19 17"
      fill={colors.radicalPink}
    >
      <path d="M0 14h19v3H0v-1.5V14zm0-7h19v3H0V8.5 7zm0-7h19v3H0V1.5 0z" />
    </Svg>
  );
};
