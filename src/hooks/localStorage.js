import React, { createContext, useState, useContext } from "react";

import server from "../server";

const CountContext = createContext();

export default function QuestionProvider({ children }) {
  const [questions, setQuestions] = useState(server.getLocalStorage);

  return (
    <CountContext.Provider
      value={{
        questions,
        setQuestions,
      }}
    >
      {children}
    </CountContext.Provider>
  );
}

export function useQuestions() {
  const context = useContext(CountContext);
  if (!context)
    throw new Error("useQuestions must be used within a CountProvider");
  const { questions, setQuestions } = context;
  return { questions, setQuestions };
}
