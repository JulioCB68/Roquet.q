import React, { useContext } from "react";

import utils from "../../utils";

import { QuestionContext } from "../../context/question";

import {
  Modal,
  ContainerModal,
  ButtonModal,
  TitleModal,
  TextModal,
  SubContainerModal,
  SubTextModal,
  ContainerButtonModal,
} from "./styles";

function Seila(props) {
  const { setIsModalIsVisible, setQuestions } = useContext(QuestionContext);

  const deleteQuestion = (id) => {
    console.log(id);
    const db_question = utils.getLocalStorage();
    const quest = db_question.find((item) => item.id === id);
    console.log(db_question.indexOf(quest));
    db_question.splice(db_question.indexOf(quest), 1);
    utils.setLocalStorage(db_question);
    setQuestions(utils.getLocalStorage);
    setIsModalIsVisible(false);
  };

  return (
    <Modal>
      <ContainerModal>
        <TitleModal> Excluir pergunta </TitleModal>
        <TextModal>Tem certeza que você deseja excluir esta pergunta</TextModal>
        <SubContainerModal>
          <SubTextModal> "{props.question}" </SubTextModal>
          <ContainerButtonModal>
            <ButtonModal onClick={() => setIsModalIsVisible(false)}>
              Cancelar
            </ButtonModal>
            <ButtonModal onClick={() => deleteQuestion(props.id)}>
              Deletar
            </ButtonModal>
          </ContainerButtonModal>
        </SubContainerModal>
      </ContainerModal>
    </Modal>
  );
}

export default Seila;
