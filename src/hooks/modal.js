import React, { createContext, useState, useContext } from "react";

const CountContext = createContext();

export default function ModalProvider({ children }) {
  const [isModalIsVisible, setIsModalIsVisible] = useState(false);

  return (
    <CountContext.Provider
      value={{
        isModalIsVisible,
        setIsModalIsVisible,
      }}
    >
      {children}
    </CountContext.Provider>
  );
}

export function useModal() {
  const context = useContext(CountContext);
  if (!context) throw new Error("useModal must be used within a CountProvider");
  const { isModalIsVisible, setIsModalIsVisible } = context;
  return { isModalIsVisible, setIsModalIsVisible };
}
