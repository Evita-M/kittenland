import React, { useContext, useEffect, useState } from "react";
import { StorageContext } from "../context/StorageContext";
import { v4 as uuidv4 } from "uuid";
import {
  InputDefault,
  LabelDefault,
  TextareaDefault,
  FormDefault,
  FormItemDefault,
  Intro,
} from "../styles/styles";
import useClickOutside from "../hooks/useClickOutside";
import { ButtonDefault } from "../styles/buttons";
import { ContainerGrid, ContainerModal, ModalWrapper } from "../styles/layout";

const AddKitten = ({ toggleShowForm, kitten }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const { addKitten, updateKitten } = useContext(StorageContext);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const newKitten = {
      id: uuidv4(),
      name: name,
      age: age,
      price: price,
      desc: desc,
      inBasket: false,
    };

    if (kitten) {
      newKitten.id = kitten.id;
      updateKitten(newKitten);
    } else {
      addKitten(newKitten);
    }

    setName("");
    setAge("");
    setPrice("");
    setDesc("");

    toggleShowForm();
  };

  useEffect(() => {
    if (kitten) {
      setName(kitten.name);
      setAge(kitten.age);
      setPrice(kitten.price);
      setDesc(kitten.desc);
    }

    document.body.classList.add("overflow");
    return () => document.body.classList.remove("overflow");
  }, []);

  let domElement = useClickOutside(() => toggleShowForm());

  return (
    <ContainerModal>
      <ModalWrapper>
        <FormDefault
          innerRef={domElement}
          onSubmit={handleOnSubmit}
          css={{ marginBottom: 20 }}
        >
          <Intro css={{ marginTop: 20 }}>
            {kitten ? "Edit" : "Add"} your kitten here
          </Intro>
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
          <ContainerGrid>
            <ButtonDefault success type="submit">
              {kitten ? "Update" : "Add"}
            </ButtonDefault>
            <ButtonDefault test="40" type="button" onClick={toggleShowForm}>
              Close
            </ButtonDefault>
          </ContainerGrid>
        </FormDefault>
      </ModalWrapper>
    </ContainerModal>
  );
};

export default AddKitten;
