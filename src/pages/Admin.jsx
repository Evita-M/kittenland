import React, { useState, useContext } from "react";
import AddKitten from "../components/AddKitten";
import Kittens from "../components/Kittens";
import { AuthContext } from "../context/AuthContext";
import { StorageContext } from "../context/StorageContext";
import { Div } from "glamorous";
import { Intro, TitleDefault } from "../styles/styles";
import { ContainerGrid } from "../styles/layout";
import { ButtonDefault } from "../styles/buttons";

const Admin = () => {
  const { user } = useContext(AuthContext);
  const { clearStorage, data } = useContext(StorageContext);
  const [showForm, setShowForm] = useState(false);

  const toggleShowForm = () => {
    setShowForm(!showForm);
  };

  const checkEmptyData = () => {
    if (data === null || data === undefined || data.length === 0) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <Div textAlign="center">
        <TitleDefault>Admin</TitleDefault>
      </Div>
      <Div textAlign="center">
        <Intro>
          Hello <strong>{user.username}</strong>, you are logged in. Here are
          your kittens to sell.
        </Intro>
      </Div>

      <ContainerGrid css={{ paddingBottom: "20px" }}>
        <ButtonDefault onClick={toggleShowForm} disabled={showForm}>
          Add kitten
        </ButtonDefault>

        <ButtonDefault onClick={clearStorage} disabled={checkEmptyData()}>
          Clear kittens
        </ButtonDefault>
      </ContainerGrid>

      {showForm ? (
        <AddKitten toggleShowForm={toggleShowForm} showForm={showForm} />
      ) : (
        ""
      )}

      {checkEmptyData() ? (
        <Intro>You have no kittens.</Intro>
      ) : (
        <Kittens data={data} isAdmin={true} />
      )}
    </>
  );
};

export default Admin;
