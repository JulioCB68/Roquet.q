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

export function Blog() {
  const [isModalIsVisible, setIsModalIsVisible] = useState(false);

  const questionValue = useRef();
  const button = useRef();

  const getLocalStorage = () =>
    JSON.parse(localStorage.getItem("db_question")) ?? [];

  const setLocalStorage = (db_question) =>
    localStorage.setItem("db_question", JSON.stringify(db_question));

  const createQuestion = (question) => {
    const db_question = getLocalStorage();
    db_question.push(question);
    setLocalStorage(db_question);
  };

  const readClient = () => {
    getLocalStorage();
    window.location.reload();
  };

  const deleteQuestion = (index) => {
    const db_question = getLocalStorage();
    db_question.splice(index, 1);
    setLocalStorage(db_question);
    readClient();
  };

  const clearField = () => {
    const questionName = (questionValue.current.value = "");
  };

  const generateID = () => Math.round(Math.random() * 1000);

  const registerQuestion = () => {
    const questionName = questionValue.current.value;
    const question = {
      id: generateID(),
      name: questionName,
    };
    if (questionName === "") {
      alert("Preencha o campo com uma pergunta...");
    } else {
      const db_question = getLocalStorage();
      createQuestion(question);
      clearField();
      readClient();
    }
  };

  const show = getLocalStorage().map((item, index) => {
    return (
      <Ask>
        <header>
          <img src={Avatar} alt="" />
          {item.name}
        </header>
        <footer>
          <div>
            <img src={Read} alt="" />
            <p> Marcar como lido </p>
          </div>
          <div>
            <img src={Delete} alt="" />
            {/* <p onClick={() => deleteQuestion(index)}> Excluir </p> */}
            <p onClick={() => setIsModalIsVisible(true)}> Excluir </p>
            {isModalIsVisible ? (
              <Modal>
                <ContainerModal>
                  <ButtonModal onClick={() => setIsModalIsVisible(false)}> Cancelar </ButtonModal>
                  <ButtonModal onClick={() => deleteQuestion(index)}> Deletar </ButtonModal>
                </ContainerModal>
              </Modal>
            ) : null}
          </div>
        </footer>
      </Ask>
    );
  });

  const teste =
    localStorage.getItem("db_question") === null ? <EmptyState /> : show;

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
        {teste}
      </QuestionArea>
    </Container>
  );
}
