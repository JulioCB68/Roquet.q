import React, { createContext, useState } from "react";

import utils from "../utils";

export const QuestionContext = createContext();

export const QuestionProvider = ({ children }) => {
  const [questions, setQuestions] = useState(utils.getLocalStorage);
  const [isModalIsVisible, setIsModalIsVisible] = useState(false);

  // function OpenModal() {
  //   isModalIsVisible;
  //   setIsModalIsVisible(true);
  // }

  // function CloseModal() {
  //   setIsModalIsVisible(false);
  // }

  return (
    <QuestionContext.Provider
      value={{
        questions,
        setQuestions,
        isModalIsVisible,
        setIsModalIsVisible,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
};
