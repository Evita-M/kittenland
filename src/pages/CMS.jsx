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

  return (
    <div className="cms">
      <h2 className="subtitle">CMS</h2>
      <p>
        <button className="btn-logout" onClick={() => logout()}>
          Logout
        </button>
      </p>
      <p className="intro">
        Hello <strong>{username}</strong> , you are logged in. Here are yout
        kittens to sell.
      </p>
      <p className="btns">
        <button onClick={toggleShowForm} disabled={showForm}>
          Add kitten
        </button>

        <button onClick={clearStorage} disabled={!data}>
          Clear kittens
        </button>
      </p>

      {showForm ? <AddKitten toggleShowForm={toggleShowForm} /> : ""}
      {data ? (
        <Kittens data={data} isAdmin={true} />
      ) : (
        <p>You have no kittens.</p>
      )}
    </div>
  );
};

export default CMS;
