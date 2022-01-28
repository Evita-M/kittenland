import { Img } from "glamorous";
import { useContext } from "react";
import { StorageContext } from "../context/StorageContext";
import { Intro, TitleDefault } from "../styles/styles";
import { ButtonDefault } from "../styles/buttons";

import {
  ContainerGrid,
  ContainerMain,
  ContainerCenter,
} from "../styles/layout";
import { SvgRemove } from "../components/SvgLib";

const Checkout = () => {
  const { getKittensInBasket, removeKittens, updateBasketStatus, clearBasket } =
    useContext(StorageContext);
  const kittens = getKittensInBasket();

  const handleOnBuy = () => {
    let kittensIdsToRemove = kittens.map((item) => item.id);
    removeKittens(kittensIdsToRemove);
  };
  const getTotalPrice = () => {
    let totalPrice = 0;
    kittens.map((item) => (totalPrice += item.price));
    return totalPrice;
  };

  return (
    <ContainerMain>
      <TitleDefault>Checkout</TitleDefault>
      <Intro>Here are kittens in your basket:</Intro>
      <ContainerCenter>
        <table>
          <thead>
            <tr>
              <th>Kitten</th>
              <th>Name</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {kittens.map((item) => (
              <tr key={item.id} className="form__item">
                <td>
                  <Img
                    src={`https://robohash.org/${item.name}.png?set=set4`}
                    alt="item.name"
                    width={30}
                    height={30}
                  />
                </td>
                <td>{item.name}</td>
                <td> {item.price} EUR</td>
                <td>
                  <ButtonDefault
                    transparent
                    onClick={() => updateBasketStatus(item.id, false)}
                  >
                    <SvgRemove boxSize={20} />
                  </ButtonDefault>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td>Total</td>
              <td>{getTotalPrice()}&nbsp; EUR</td>
              <td></td>
            </tr>
          </tfoot>
        </table>
        <ContainerGrid css={{ paddingTop: "20px" }}>
          <ButtonDefault onClick={handleOnBuy} disabled={kittens.length === 0}>
            Buy
          </ButtonDefault>
          <ButtonDefault onClick={clearBasket} disabled={kittens.length === 0}>
            Clear All
          </ButtonDefault>
        </ContainerGrid>
      </ContainerCenter>
    </ContainerMain>
  );
};

export default Checkout;
