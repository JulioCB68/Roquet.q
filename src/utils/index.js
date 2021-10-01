const getLocalStorage = () => {
  return JSON.parse(localStorage.getItem("db_question")) ?? [];
};

const setLocalStorage = (db_question) => {
  localStorage.setItem("db_question", JSON.stringify(db_question));
};

const createQuestion = (question) => {
  const db_question = getLocalStorage();
  db_question.push(question);
  setLocalStorage(db_question);
};

const generateID = () => Math.round(Math.random() * 1000);

export default {
  getLocalStorage,
  setLocalStorage,
  createQuestion,
  generateID,
};
