import React from "react";

import server from "../../server";

import { useQuestions } from "../../hooks/localStorage";
import { useModal } from "../../hooks/modal";

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
  const { setQuestions } = useQuestions();
  const { setIsModalIsVisible } = useModal();

  const deleteQuestion = (id) => {
    console.log(id);
    const db_question = server.getLocalStorage();
    const quest = db_question.find((item) => item.id === id);
    console.log(db_question.indexOf(quest));
    db_question.splice(db_question.indexOf(quest), 1);
    server.setLocalStorage(db_question);
    setQuestions(server.getLocalStorage);
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
