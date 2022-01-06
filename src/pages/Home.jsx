import React, { useContext } from "react";
import Kittens from "../components/Kittens";
import { StorageContext } from "../context/StorageContext";

const Home = () => {
  const { data } = useContext(StorageContext);

  return (
    <div>
      <h2 className="subtitle">Home</h2>
      <p className="intro">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus illo ut
        suscipit eligendi officiis, velit voluptatibus beatae non consectetur
        cum impedit at placeat blanditiis id sed laborum quos eum omnis deleniti
        reiciendis ea dolorem enim voluptas! Culpa soluta mollitia eveniet
        delectus architecto pariatur et quis debitis illo, saepe corporis animi!
      </p>
      {data ? <Kittens data={data} /> : <p>No kittens to buy</p>}
    </div>
  );
};

export default Home;
