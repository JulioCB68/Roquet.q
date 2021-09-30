const getLocalStorage = () => {
  return JSON.parse(localStorage.getItem("db_question")) ?? [];
};

const setLocalStorage = (db_question) => {
  localStorage.setItem("db_question", JSON.stringify(db_question));
};

export default {
  getLocalStorage,
  setLocalStorage,
};
