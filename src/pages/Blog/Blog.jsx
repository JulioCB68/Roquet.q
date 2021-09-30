import React, { useRef, useState } from "react";

import {
  Container,
  Header,
  Logo,
  ContainerButton,
  QuestionArea,
  Title,
  TextArea,
  FooterArea,
  ImageAsk,
  Ask,
} from "./styles";

import {
  Modal,
  ContainerModal,
  ButtonModal,
  TitleModal,
  TextModal,
  SubContainerModal,
  SubTextModal,
  ContainerButtonModal,
} from "../../components/Modal/styles";

import ImageLogo from "../../assets/images/Logo.svg";
import Users from "../../assets/icons/UsersIconWhite.svg";
import CopyIcon from "../../assets/icons/CopyIcon.svg";
import Avatar from "../../assets/icons/Avatar.svg";
import Read from "../../assets/icons/Read.svg";
import Delete from "../../assets/icons/Delete.svg";
import AskAn from "../../assets/images/AskAn.svg";

import { Button } from "../../components/Button/ButtonHome/ButtonHome";
import { ButtonSend } from "../../components/Button/ButtonSend/ButtonSend";
import { EmptyState } from "../../components/EmptyState/EmptyState";

import utils from "../../utils";

export function Blog() {
  const [isModalIsVisible, setIsModalIsVisible] = useState(false);

  const [questions, setQuestions] = useState(utils.getLocalStorage);

  const questionValue = useRef();
  const button = useRef();

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

  const clearField = (inputQuestion) => {
    inputQuestion.value = "";
  };

  const registerQuestion = () => {
    const inputQuestion = questionValue.current;
    const question = {
      id: utils.generateID(),
      question: inputQuestion.value,
    };
    if (inputQuestion.value === "") {
      alert("Preencha o campo com uma pergunta...");
    } else {
      utils.createQuestion(question);
      clearField(inputQuestion);
      setQuestions(utils.getLocalStorage);
    }
  };

  const show = questions.map((item) => {
    return (
      <Ask>
        <header>
          <img src={Avatar} alt="" />
          {item.question}
          <br />
          {item.id}
        </header>
        <footer>
          <div>
            <img src={Read} alt="" />
            <p> Marcar como lido </p>
          </div>
          <div>
            <img src={Delete} alt="" />
            <p onClick={() => setIsModalIsVisible(true)}> Excluir </p>
            {isModalIsVisible ? (
              <Modal>
                <ContainerModal>
                  <TitleModal> Excluir pergunta </TitleModal>
                  <TextModal>
                    Tem certeza que você deseja excluir esta pergunta
                  </TextModal>
                  <SubContainerModal>
                    <SubTextModal> "{item.question}" </SubTextModal>
                    <ContainerButtonModal>
                      <ButtonModal onClick={() => setIsModalIsVisible(false)}>
                        Cancelar
                      </ButtonModal>
                      <ButtonModal onClick={() => deleteQuestion(item.id)}>
                        Deletar
                      </ButtonModal>
                    </ContainerButtonModal>
                  </SubContainerModal>
                </ContainerModal>
              </Modal>
            ) : null}
          </div>
        </footer>
      </Ask>
    );
  });

  return (
    <Container>
      <Header>
        <Logo src={ImageLogo} alt="Logo" />
        <ContainerButton>
          <Button text="#323243" icon={CopyIcon} rout="home" />
          <Button primary text="Criar sala" icon={Users} rout="home" />
        </ContainerButton>
      </Header>
      <QuestionArea>
        <Title> Faça sua pergunta </Title>
        <TextArea
          placeholder="O que você quer perguntar?"
          ref={questionValue}
        />
        <FooterArea>
          <ImageAsk src={AskAn} alt="Logo" />
          <ButtonSend
            text="Enviar"
            rout="home"
            onClick={registerQuestion}
            ref={button}
          />
        </FooterArea>
        {show.length ? show : <EmptyState />}
      </QuestionArea>
    </Container>
  );
}
