import { Button, Img } from "glamorous";
import { useContext } from "react";
import { StorageContext } from "../context/StorageContext";

const Checkout = () => {
  const { getKittensInBasket, removeKittens } = useContext(StorageContext);
  const kittens = getKittensInBasket();

  const handleOnBuy = () => {
    let kittensIdsToRemove = kittens.map((item) => item.id);
    removeKittens(kittensIdsToRemove);
  };

  return (
    <div>
      <h2 className="subtitle">Checkout</h2>
      <h3>Kittens in your basket</h3>
      <ul>
        {kittens.map((item) => (
          <li>
            <Img
              src={`https://robohash.org/${item.name}.png?set=set4`}
              alt="item.name"
              width={30}
              height={30}
            />
            <h4>{item.name}</h4>
            <p> {item.price} EUR</p>
          </li>
        ))}
      </ul>
      <Button onClick={handleOnBuy}>Buy</Button>
    </div>
  );
};

export default Checkout;
