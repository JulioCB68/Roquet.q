import server from "../server";

const createQuestion = (question) => {
  const db_question = server.getLocalStorage();
  db_question.push(question);
  server.setLocalStorage(db_question);
};

const generateID = () => Math.round(Math.random() * 1000);

export default {
  createQuestion,
  generateID,
};
