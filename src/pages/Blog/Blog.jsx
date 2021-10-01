import React, { useRef, useContext } from "react";

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
} from "./styles";

import ImageLogo from "../../assets/images/Logo.svg";
import Users from "../../assets/icons/UsersIconWhite.svg";
import CopyIcon from "../../assets/icons/CopyIcon.svg";
import AskAn from "../../assets/images/AskAn.svg";

import { Button } from "../../components/Button/ButtonHome/ButtonHome";
import { ButtonSend } from "../../components/Button/ButtonSend/ButtonSend";
import { EmptyState } from "../../components/EmptyState/EmptyState";
import { Question } from "../../components/Question/index";

import utils from "../../utils";

import { QuestionContext } from "../../context/question";

export function Blog() {
  const { setQuestions } = useContext(QuestionContext);

  const questionValue = useRef();
  const button = useRef();

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
        {utils.getLocalStorage() == "" ? <EmptyState /> : <Question />}
      </QuestionArea>
    </Container>
  );
}
