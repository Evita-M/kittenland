import React from "react";
import Kitten from "./Kitten";
import { Ul, Li } from "glamorous";
import { colors, globalVars } from "../styles/styles";

const Kittens = ({ data, isAdmin }) => {
  const ulStyles = {
    listStyle: "none",
    display: "grid",
    gap: 15,
    gridTemplateColumns: "repeat(5,1fr)",
  };

  const liStyles = {
    // background: colors.cream,
    // border: `2px solid ${colors.greenSheen}`,
    // borderRadius: globalVars.radius,
    // padding: 10,
  };

  return (
    <section>
      <Ul css={ulStyles}>
        {data.map((item) => {
          return (
            <Li key={item.id} css={liStyles}>
              <Kitten item={item} isAdmin={isAdmin} />
            </Li>
          );
        })}
      </Ul>
    </section>
  );
};

export default Kittens;
