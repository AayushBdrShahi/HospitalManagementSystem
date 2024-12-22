import { createContext, useState } from "react";
import { doctors } from "../assets/assets";

import axios from "axios";
import { useContext } from "react";

const AppContext = createContext();

export const AppContextProvider = (props) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : false
  );

  const value = {
    doctors,
    token,
    setToken,
    backendUrl,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};




export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};
