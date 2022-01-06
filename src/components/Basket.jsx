import React, { useContext } from "react";
import { StorageContext } from "../context/StorageContext";

const Basket = () => {
  const { basketCount } = useContext(StorageContext);
  return (
    <>
      <p className="basket">
        <button>🧺 {basketCount}</button>
      </p>
    </>
  );
};

export default Basket;
