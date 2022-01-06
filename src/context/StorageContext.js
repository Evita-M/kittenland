import { createContext } from "react";
import useStorage from "../storage/useStorage";

export const StorageContext = createContext();

export const StorageProvider = ({ children }) => {
  return (
    <StorageContext.Provider value={useStorage()}>
      {children}
    </StorageContext.Provider>
  );
};
