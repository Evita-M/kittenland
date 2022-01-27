import React, { useContext, useState } from "react";
import { StorageContext } from "../context/StorageContext";
import { v4 as uuidv4 } from "uuid";
import {
  ButtonDefault,
  DivGrid,
  InputDefault,
  LabelDefault,
  TextareaDefault,
  FormDefault,
  FormItemDefault,
} from "../styles/styles";

const AddKitten = ({ toggleShowForm }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const { addKitten } = useContext(StorageContext);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const kitten = {
      id: uuidv4(),
      name: name,
      age: age,
      price: price,
      desc: desc,
      inBasket: false,
    };

    addKitten(kitten);

    setName("");
    setAge("");
    setPrice("");
    setDesc("");

    toggleShowForm();
  };

  return (
    <>
      <FormDefault onSubmit={handleOnSubmit} css={{ marginBottom: 20 }}>
        <FormItemDefault>
          <LabelDefault htmlFor="name">Name:</LabelDefault>
          <InputDefault
            type="text"
            maxLength={15}
            id="name"
            name="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
            required
          />
        </FormItemDefault>
        <FormItemDefault>
          <LabelDefault htmlFor="age">Age:</LabelDefault>
          <InputDefault
            type="number"
            min={1}
            max={30}
            id="age"
            name="age"
            onChange={(e) => {
              setAge(parseInt(e.target.value));
            }}
            value={age}
            required
          />
        </FormItemDefault>
        <FormItemDefault>
          <LabelDefault htmlFor="price">Price in EUR:</LabelDefault>
          <InputDefault
            type="number"
            min={0}
            max={9999}
            id="price"
            name="price"
            onChange={(e) => {
              setPrice(parseInt(e.target.value));
            }}
            value={price}
            required
          />
        </FormItemDefault>
        <FormItemDefault>
          <LabelDefault htmlFor="desc">Description:</LabelDefault>
          <TextareaDefault
            rows={5}
            maxLength={60}
            id="desc"
            name="desc"
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            value={desc}
            required
          />
        </FormItemDefault>
        <DivGrid>
          <ButtonDefault type="submit">Add</ButtonDefault>
          <ButtonDefault type="button" onClick={toggleShowForm}>
            Close
          </ButtonDefault>
        </DivGrid>
      </FormDefault>
    </>
  );
};

export default AddKitten;
