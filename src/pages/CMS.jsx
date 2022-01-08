import React, { useState, useContext } from "react";
import AddKitten from "../components/AddKitten";
import Kittens from "../components/Kittens";
import { AuthContext } from "../context/AuthContext";
import { StorageContext } from "../context/StorageContext";

const CMS = () => {
  const { logout, username } = useContext(AuthContext);
  const { clearStorage, data } = useContext(StorageContext);
  const [showForm, setShowForm] = useState(false);

  const toggleShowForm = () => {
    setShowForm(!showForm);
  };

  const checkEmptyData = () => {
    if (data.length === 0 || data === null || data === undefined) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="cms">
      <h2 className="subtitle">CMS</h2>
      <p>
        <button className="btn-logout" onClick={logout}>
          Logout
        </button>
      </p>
      <p className="intro">
        Hello <strong>{username}</strong> , you are logged in. Here are your
        kittens to sell.
      </p>
      <p className="btns">
        <button onClick={toggleShowForm} disabled={showForm}>
          Add kitten
        </button>

        <button onClick={clearStorage} disabled={checkEmptyData()}>
          Clear kittens
        </button>
      </p>

      {showForm ? <AddKitten toggleShowForm={toggleShowForm} /> : ""}
      {checkEmptyData() ? (
        <p>You have no kittens.</p>
      ) : (
        <Kittens data={data} isAdmin={true} />
      )}
    </div>
  );
};

export default CMS;
