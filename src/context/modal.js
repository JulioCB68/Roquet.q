import React, { createContext, useState, useContext } from "react";

const ModalContext = createContext();

export default function ModalProvider({ children }) {
  const [isModalIsVisible, setIsModalIsVisible] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        isModalIsVisible,
        setIsModalIsVisible,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) throw new Error("useModal must be used within a CountProvider");
  const { isModalIsVisible, setIsModalIsVisible } = context;
  return { isModalIsVisible, setIsModalIsVisible };
}
