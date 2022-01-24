import React, { useContext } from "react";
import { StorageContext } from "../context/StorageContext";
import {
  ButtonDefault,
  ArticleKitten,
  colors,
  globalVars,
} from "../styles/styles";
import { Div, Img, H3, P } from "glamorous";

const Kitten = ({ item, isAdmin }) => {
  const { removeKitten, updateBasketStatus } = useContext(StorageContext);

  return (
    <ArticleKitten>
      <Div display="flex" alignItems="flex-end" justifyContent="center">
        <Img
          src={`https://robohash.org/${item.name}.png?set=set4`}
          alt="item.name"
          width={200}
          height={200}
          marginTop={-60}
        />
      </Div>
      <Div
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        background={colors.white}
        minHeight={250}
        padding="20px 10px 10px"
        borderRadius={`0 ${globalVars.radiusLg}px ${globalVars.radius}px ${globalVars.radius}px`}
      >
        <Div>
          <H3
            color={colors.greenSheen}
            textTransform="uppercase"
            letterSpacing={0.5}
            fontSize={25}
          >
            {item.name}
          </H3>
          <P marginBottom={10}> {item.age} year(s)</P>
          <P fontStyle="italic" fontSize="14px" lineHeight={1.2}>
            {item.desc}
          </P>
        </Div>

        <Div>
          <P fontWeight={600} fontSize="20px" marginBottom={10}>
            {item.price} EUR
          </P>

          <p>
            {isAdmin ? (
              <ButtonDefault
                css={{ width: "100%" }}
                onClick={() => removeKitten(item.id)}
              >
                Delete
              </ButtonDefault>
            ) : (
              <ButtonDefault
                css={{ width: "100%" }}
                onClick={() => updateBasketStatus(item.id, true)}
              >
                Buy
              </ButtonDefault>
            )}
          </p>
        </Div>
      </Div>
    </ArticleKitten>
  );
};

export default Kitten;
