import { Div } from "glamorous";
import React, { useContext } from "react";
import Kittens from "../components/Kittens";
import { StorageContext } from "../context/StorageContext";
import { TitleDefault } from "../styles/styles";

const Home = () => {
  const { data } = useContext(StorageContext);

  return (
    <Div>
      <TitleDefault>Home</TitleDefault>
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
