import React, { useContext, useState } from "react";
import { StorageContext } from "../context/StorageContext";

const AddKitten = ({ toggleShowForm }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [price, setPrice] = useState("");
  const { updateStorage } = useContext(StorageContext);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const kitten = {
      id: Math.floor(Math.random() * 100000),
      name: name,
      age: age,
      price: price,
    };

    updateStorage(kitten);

    setName("");
    setAge("");
    setPrice("");

    toggleShowForm();
  };

  return (
    <>
      <form className="form" onSubmit={handleOnSubmit}>
        <p className="form__item">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
            required
          />
        </p>
        <p className="form__item">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            onChange={(e) => {
              setAge(parseInt(e.target.value));
            }}
            value={age}
            required
          />
        </p>
        <p className="form__item">
          <label htmlFor="price">Price in EUR:</label>
          <input
            type="number"
            id="price"
            name="price"
            onChange={(e) => {
              setPrice(parseInt(e.target.value));
            }}
            value={price}
            required
          />
        </p>
        <p className="btns">
          <button type="submit">Add</button>
          <button type="button" onClick={toggleShowForm}>
            Close
          </button>
        </p>
      </form>
    </>
  );
};

export default AddKitten;
