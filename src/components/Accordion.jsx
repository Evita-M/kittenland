import { useState } from "react";
import { ButtonAccordion } from "../styles/buttons";
import {
  AccordionContent,
  AccordionDefault,
  AccordionIcon,
} from "../styles/styles";
import { SvgArrowDown } from "./SvgLib";
import Interweave from "interweave";
import { colors } from "../styles/variables";

const Accordion = ({ title, text }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <AccordionDefault>
      <ButtonAccordion
        onClick={() => setIsActive(!isActive)}
        css={isActive ? { background: colors.radicalPink } : ""}
      >
        <p>{title}</p>
        <AccordionIcon
          css={isActive ? { transform: "translateY(-50%) rotate(180deg)" } : ""}
        >
          <SvgArrowDown />
        </AccordionIcon>
      </ButtonAccordion>
      {isActive && (
        <AccordionContent>
          <Interweave content={text} />{" "}
        </AccordionContent>
      )}
    </AccordionDefault>
  );
};

export default Accordion;
