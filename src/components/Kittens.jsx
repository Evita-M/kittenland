import React from "react";

const Kittens = ({ data }) => {
  return (
    <div>
      <ul>
        {data.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Kittens;
