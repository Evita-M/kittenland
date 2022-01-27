import { Div } from "glamorous";
import React, { useContext } from "react";
import Kittens from "../components/Kittens";
import { StorageContext } from "../context/StorageContext";
import { Intro, TitleDefault } from "../styles/styles";

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
        <Intro>No kittens to buy</Intro>
      )}
    </Div>
  );
};

export default Home;
