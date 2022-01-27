import { Button, Img, Svg } from "glamorous";
import { useContext } from "react";
import { StorageContext } from "../context/StorageContext";
import {
  ButtonDefault,
  CheckoutTable,
  colors,
  DivGrid,
  Intro,
  MainContent,
  TitleDefault,
} from "../styles/styles";

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

  const removeBtnStyles = {
    outline: "none",
    border: "none",
    cursor: "pointer",
    background: "none",
    fontWeight: "bold",
    transition: `fill 0.1s`,
    ":hover": {
      fill: colors.radicalPink,
    },
  };
  return (
    <MainContent>
      <TitleDefault>Checkout</TitleDefault>
      <Intro>Here are kittens in your basket:</Intro>
      <CheckoutTable>
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
              <tr ul className="form__item">
                <td>
                  {" "}
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
                  {" "}
                  <Button
                    css={removeBtnStyles}
                    onClick={() => updateBasketStatus(item.id, false)}
                  >
                    <Svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      css={removeBtnStyles}
                    >
                      <path d="M14.66 18.77v-7.36a.61.61 0 0 0-.61-.61.61.61 0 0 0-.62.6v7.37c0 .34.28.62.62.62a.61.61 0 0 0 .6-.62zm-4.1 0v-7.36a.61.61 0 0 0-.6-.61.61.61 0 0 0-.62.6v7.37c0 .34.28.62.61.62a.61.61 0 0 0 .62-.62zm7.58-10.63c.22 0 .4.18.4.4V20c0 .9-.73 1.64-1.63 1.64H7.09c-.9 0-1.64-.74-1.64-1.64V8.55c0-.23.19-.41.41-.41h12.28zm-8.6-3.07c0 .11.1.2.21.2h4.5a.2.2 0 0 0 .2-.2V4.05a.4.4 0 0 0-.4-.41h-4.1a.4.4 0 0 0-.4.4v1.03zm10.64.2a.82.82 0 0 1 .82.82.82.82 0 0 1-.82.82H3.82A.82.82 0 0 1 3 6.09a.82.82 0 0 1 .82-.82H7.7a.2.2 0 0 0 .2-.2V4.05C7.9 2.92 8.83 2 9.96 2h4.1c1.13 0 2.04.92 2.04 2.05v1.02c0 .11.1.2.2.2h3.9z" />
                    </Svg>
                  </Button>
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
        <DivGrid css={{ paddingTop: "20px" }}>
          <ButtonDefault onClick={handleOnBuy} disabled={kittens.length === 0}>
            Buy
          </ButtonDefault>
          <ButtonDefault onClick={clearBasket} disabled={kittens.length === 0}>
            Clear All
          </ButtonDefault>
        </DivGrid>
      </CheckoutTable>
    </MainContent>
  );
};

export default Checkout;
