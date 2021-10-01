import React, { createContext, useState, useContext } from "react";

import utils from "../utils";

const QuestionContext = createContext();

export default function QuestionProvider({ children }) {
  const [questions, setQuestions] = useState(utils.getLocalStorage);

  return (
    <QuestionContext.Provider
      value={{
        questions,
        setQuestions,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
}

export function useQuestions() {
  const context = useContext(QuestionContext);
  if (!context)
    throw new Error("useQuestions must be used within a CountProvider");
  const { questions, setQuestions } = context;
  return { questions, setQuestions };
}
