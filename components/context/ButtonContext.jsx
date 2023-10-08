import React, { createContext, useState, useContext } from "react";

const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const [checked, setChecked] = useState(false);

  return (
    <MainContext.Provider value={{ checked, setChecked }}>
      {children}
    </MainContext.Provider>
  );
};

export const useMainContext = () => {
  return useContext(MainContext);
};
