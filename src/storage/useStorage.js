import { useEffect, useState } from "react";

function useStorage() {
  // States
  const [data, setData] = useState();
  const [basketCount, setBasketCount] = useState(0);

  // ## Local Storage Operations for all kittens ##

  // Get all kittens from storage
  const readStorage = () => {
    let data = JSON.parse(localStorage.getItem("kittens"));
    updateBasketCount(data);
    setData(data);
  };

  // Update all kittens in storage
  const updateStorage = (kittens) => {
    localStorage.setItem("kittens", JSON.stringify(kittens));
    readStorage();
  };

  // Remove all kittens from storage
  const clearStorage = () => {
    var answer = window.confirm("Are you sure you want to delete all kittens?");
    if (answer) {
      localStorage.clear();
      readStorage();
    }
  };

  // ## Local Storage (CRUD) Operations for a single kitten ##

  // Add a kitten in storage (CREATE)
  const addKitten = (kitten) => {
    let data = localStorage.getItem("kittens");
    let kittens = new Array(0);
    if (data) {
      kittens = JSON.parse(data);
    }
    kittens = [...kittens, kitten];

    updateStorage(kittens);
  };

  // Get a kitten from storage (READ)
  const getKitten = (id) => {
    const kitten = data.filter((item) => {
      return item.id === id;
    })[0];

    return kitten;
  };

  // Update a kitten in storage (UPDATE)
  const updateKitten = (kitten) => {
    removeKitten(kitten.id);
    addKitten(kitten);
  };

  // Remove kitten from storage (DELETE)
  const removeKitten = (id) => {
    const kittens = data.filter((item) => {
      return item.id !== id;
    });

    updateStorage(kittens);
  };

  // Remove kittens from storage
  const removeKittens = (idsArray) => {
    const kittens = data.filter((item) => {
      return !idsArray.includes(item.id);
    });

    updateStorage(kittens);
  };

  // ## Special Operations (Mutations) ##

  // Update basket status of specific kitten
  const updateBasketStatus = (id, status) => {
    const kitten = getKitten(id);
    kitten.inBasket = status;

    removeKitten(id);
    addKitten(kitten);
  };

  // Clear basket
  const clearBasket = () => {
    const allKittens = JSON.parse(localStorage.getItem("kittens"));
    allKittens.map((item) => (item.inBasket = false));
    updateStorage(allKittens);
  };

  // Update basket count based on kittens provided
  const updateBasketCount = (kittens) => {
    if (!kittens) return setBasketCount(0);

    const kittensInBasket = kittens.filter(
      (item) => item.inBasket === true
    ).length;

    setBasketCount(kittensInBasket);
  };

  // Get all kittens which are in basket from storage
  const getKittensInBasket = () => {
    if (!data) return [];
    const kittensInBasket = data.filter((item) => item.inBasket === true);
    return kittensInBasket;
  };

  // After effects only when the app opening for the first time because of empty dependency array []
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
    updateStorage,
    clearStorage,
    readStorage,
    getKitten,
    addKitten,
    updateKitten,
    removeKitten,
    removeKittens,
    updateBasketStatus,
    clearBasket,
    getKittensInBasket,
  };
}

export default useStorage;
