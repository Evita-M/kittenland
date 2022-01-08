import { useEffect, useState } from "react";

function useStorage() {
  const [data, setData] = useState();
  const [basketCount, setBasketCount] = useState(0);

  const clearStorage = () => {
    var answer = window.confirm("Are you sure you want to delete all kittens?");
    if (answer) {
      localStorage.clear();
      readStorage();
    }
  };

  const updateStorage = (kittens) => {
    localStorage.setItem("kittens", JSON.stringify(kittens));
    readStorage();
  };

  const readStorage = () => {
    let data = JSON.parse(localStorage.getItem("kittens"));
    updateBasketCount(data);
    setData(data);
  };

  const addKitten = (kitten) => {
    let data = localStorage.getItem("kittens");
    let kittens = new Array(0);
    if (data) {
      kittens = JSON.parse(data);
    }
    kittens = [...kittens, kitten];

    updateStorage(kittens);
  };

  const removeKitten = (id) => {
    const kittens = data.filter((item) => {
      return item.id !== id;
    });

    updateStorage(kittens);
  };

  const getKitten = (id) => {
    const kitten = data.filter((item) => {
      return item.id === id;
    })[0];

    return kitten;
  };

  const updateBasketStatus = (id, status) => {
    const kitten = getKitten(id);
    kitten.inBasket = status;

    removeKitten(id);
    addKitten(kitten);
  };

  const updateKitten = (kitten) => {
    removeKitten(kitten.id);
    addKitten(kitten);
  };

  const updateBasketCount = (kittens) => {
    if (!kittens) return setBasketCount(0);

    const kittensInBasket = kittens.filter(
      (item) => item.inBasket === true
    ).length;

    setBasketCount(kittensInBasket);
  };

  useEffect(() => {
    readStorage();

    return () => {
      setData([]);
      setBasketCount(0);
    };
  }, []);

  return {
    data,
    basketCount,
    addKitten,
    getKitten,
    updateKitten,
    removeKitten,
    readStorage,
    updateStorage,
    clearStorage,
    updateBasketStatus,
  };
}

export default useStorage;
