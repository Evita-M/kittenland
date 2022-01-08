import React, { useContext } from "react";
import { StorageContext } from "../context/StorageContext";
import { ButtonDefault, ArticleKitten, ImageDefault } from "../styles/styles";

const Kitten = ({ item, isAdmin }) => {
  const { removeKitten, updateBasketStatus } = useContext(StorageContext);

  return (
    <ArticleKitten>
      <div>
        <ImageDefault
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
          <ButtonDefault
            css={{ width: "100%" }}
            onClick={() => removeKitten(item.id)}
          >
            Delete
          </ButtonDefault>
        ) : (
          <ButtonDefault onClick={() => updateBasketStatus(item.id, true)}>
            Buy
          </ButtonDefault>
        )}
      </p>
    </ArticleKitten>
  );
};

export default Kitten;
