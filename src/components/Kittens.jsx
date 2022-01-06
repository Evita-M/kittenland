import React from "react";
import Kitten from "./Kitten";

const Kittens = ({ data, isAdmin }) => {
  return (
    <section className="kittens">
      <ul className="kittens__list">
        {data.map((item) => {
          return (
            <li key={item.id} className="kittens__item">
              <Kitten item={item} isAdmin={isAdmin} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Kittens;
