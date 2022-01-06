import React, { useContext } from "react";
import { StorageContext } from "../context/StorageContext";

const Kitten = ({ item, isAdmin }) => {
  const { removeKitten, updateBasketStatus } = useContext(StorageContext);

  return (
    <article className="kitten">
      <div className="kitten__img">
        <img
          src={`https://robohash.org/${item.name}.png?set=set4`}
          alt="item.name"
          width={100}
          height={100}
        />
      </div>
      <h3>Name: {item.name}</h3>
      <p>Age: {item.age}</p>
      <p>Price: {item.price}</p>
      <p>
        {isAdmin ? (
          <button onClick={() => removeKitten(item.id)}>Delete</button>
        ) : (
          <button onClick={() => updateBasketStatus(item.id, true)}>Buy</button>
        )}
      </p>
    </article>
  );
};

export default Kitten;
