import React, { useState, useContext } from "react";
import AddKitten from "../components/AddKitten";
import Kittens from "../components/Kittens";
import { AuthContext } from "../context/AuthContext";
import { StorageContext } from "../context/StorageContext";
import { ButtonDefault, DivGrid } from "../styles/styles";
import { Div } from "glamorous";

const CMS = () => {
  const { logout, user } = useContext(AuthContext);
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
    <Div position="relative">
      <h2 className="subtitle">CMS</h2>
      <ButtonDefault
        css={{ position: "absolute", top: 0, right: 0 }}
        onClick={logout}
      >
        Logout
      </ButtonDefault>

      <p className="intro">
        Hello <strong>{user.username}</strong> , you are logged in. Here are
        your kittens to sell.
      </p>
      <Div css={{ maxWidth: "350px" }}>
        <DivGrid>
          <ButtonDefault onClick={toggleShowForm} disabled={showForm}>
            Add kitten
          </ButtonDefault>

          <ButtonDefault onClick={clearStorage} disabled={checkEmptyData()}>
            Clear kittens
          </ButtonDefault>
        </DivGrid>

        {showForm ? <AddKitten toggleShowForm={toggleShowForm} /> : ""}
      </Div>
      {checkEmptyData() ? (
        <p>You have no kittens.</p>
      ) : (
        <Kittens data={data} isAdmin={true} />
      )}
    </Div>
  );
};

export default CMS;
