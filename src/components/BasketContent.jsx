import { Img, P, Span } from "glamorous";
import { useContext } from "react";
import { StorageContext } from "../context/StorageContext";

import { BasketItem, BasketList } from "../styles/styles";

import { ButtonDefault, LinkDefault } from "../styles/buttons";

import { colors } from "../styles/variables";

import { ContainerGrid } from "../styles/layout";
import { SvgRemove } from "./SvgLib";

const BasketContent = ({ setShowBasket }) => {
  const { getKittensInBasket, updateBasketStatus, clearBasket } =
    useContext(StorageContext);
  const data = getKittensInBasket();

  const getTotalPrice = () => {
    let totalPrice = 0;
    data.map((item) => (totalPrice += item.price));
    return totalPrice;
  };

  return (
    <BasketList>
      {data.length > 0 ? (
        <>
          <P marginBottom={20} textTransform="uppercase" textAlign="center">
            Kittens in your Basket
          </P>
          <ul>
            {data.map((item) => (
              <BasketItem key={item.id}>
                <Span
                  width={30}
                  height={30}
                  display="flex"
                  alignItems="center"
                  flex="0 0 auto"
                >
                  <Img
                    src={`https://robohash.org/${item.name}.png?set=set4`}
                    alt="item.name"
                    width={30}
                    height={30}
                  />
                </Span>
                <Span flex="1 0 auto">{item.name}</Span>
                <Span color={colors.radicalPink}>
                  <strong>{item.price} €</strong>
                </Span>
                <ButtonDefault
                  transparent
                  onClick={() => updateBasketStatus(item.id, false)}
                >
                  <SvgRemove boxSize={20} />
                </ButtonDefault>
              </BasketItem>
            ))}
          </ul>
          <P marginTop={20} marginBottom={20} textAlign="right">
            <strong>Total: {getTotalPrice()} €</strong>
          </P>
          <ContainerGrid>
            <LinkDefault
              success
              to="/checkout"
              onClick={() => setShowBasket(false)}
            >
              Checkout
            </LinkDefault>
            <ButtonDefault
              onClick={() => {
                clearBasket();
                setShowBasket(false);
              }}
            >
              Clear All
            </ButtonDefault>
          </ContainerGrid>
        </>
      ) : (
        <p>Bucket is empty.</p>
      )}
    </BasketList>
  );
};

export default BasketContent;
