import { Div } from "glamorous";
import React, { useContext } from "react";
import Kittens from "../components/Kittens";
import { StorageContext } from "../context/StorageContext";

const Home = () => {
  const { data } = useContext(StorageContext);

  return (
    <Div>
      <h2 className="subtitle">Home</h2>
      {data ? (
        <Kittens
          data={data.filter((item) => item.inBasket === false)}
          isAdmin={false}
        />
      ) : (
        <p>No kittens to buy</p>
      )}
    </Div>
  );
};

export default Home;
