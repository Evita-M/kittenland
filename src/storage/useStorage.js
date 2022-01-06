import { useEffect, useState } from "react";

function useStorage() {
  const [data, setData] = useState();

  const updateStorage = (kitten) => {
    let data = localStorage.getItem("kittens");
    let kittens = new Array(0);
    if (data) {
      kittens = JSON.parse(data);
    }
    kittens = [...kittens, kitten];
    localStorage.setItem("kittens", JSON.stringify(kittens));
    console.log(kittens);
    readStorage();
  };

  const clearStorage = () => {
    var answer = window.confirm("Are you sure you want to delete all kittens?");
    if (answer) {
      localStorage.clear();
      readStorage();
    }
  };

  const readStorage = () => {
    let data = JSON.parse(localStorage.getItem("kittens"));
    setData(data);
  };

  useEffect(() => {
    readStorage();
    return () => {
      setData([]);
    };
  }, []);

  return {
    data,
    updateStorage,
    readStorage,
    clearStorage,
  };
}

export default useStorage;
