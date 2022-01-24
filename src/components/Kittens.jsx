import React from "react";
import Kitten from "./Kitten";
import { Ul, Li } from "glamorous";

const Kittens = ({ data, isAdmin }) => {
  const ulStyles = {
    marginTop: 50,
    listStyle: "none",
    display: "grid",
    gap: "40px 20px",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
  };

  return (
    <section>
      <Ul css={ulStyles}>
        {data.map((item) => {
          return (
            <Li key={item.id}>
              <Kitten item={item} isAdmin={isAdmin} />
            </Li>
          );
        })}
      </Ul>
    </section>
  );
};

export default Kittens;
