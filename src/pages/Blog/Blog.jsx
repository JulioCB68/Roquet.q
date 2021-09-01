import React, { useRef } from "react";

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
  Ask
} from "./styles";

import ImageLogo from '../../assets/images/Logo.svg';
import Users from '../../assets/icons/UsersIconWhite.svg';
import CopyIcon from '../../assets/icons/CopyIcon.svg';
import Avatar from '../../assets/icons/Avatar.svg';
import Read from '../../assets/icons/Read.svg';
import Delete from '../../assets/icons/Delete.svg';
import AskAn from '../../assets/images/AskAn.svg';

import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/ButtonHome/ButtonHome';
import { ButtonSend } from '../../components/Button/ButtonSend/ButtonSend';
import { EmptyState } from '../../components/EmptyState/EmptyState';



export function Blog() {

  const questionValue = useRef();
  const button = useRef();


  const localStoragequestions = JSON.parse(localStorage.getItem('questions'))
  let questions = localStorage.getItem('questions') !== null ? localStoragequestions : []

  const generateID = () => Math.round(Math.random() * 1000)

  const sendQuestion = () => {
    const questionName = questionValue.current.value;

    const question = {
      id: generateID(),
      name: questionName
    }

    if (questionName === "") {
      alert('Burro')
    }
    else {
      questions.push(question)
      updateLocalStorage()
      questionName = '';
    }
  }


  const removequestions = ID => {
    questions = questions.filter(question => question.id !== ID)
    updateLocalStorage()
  }

  const updateLocalStorage = () => {
    localStorage.setItem('questions', JSON.stringify(questions))
    window.location.reload()
  }

  const show =
    questions.map((item) => {
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
              <p> Excluir </p>
            </div>
          </footer>
        </Ask>
      )
    });

    const teste = (localStorage.getItem('questions') === null ? <EmptyState /> : show );

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
        <TextArea placeholder="O que você quer perguntar?" ref={questionValue} />
        <FooterArea>
          <ImageAsk src={AskAn} alt="Logo" />
          <ButtonSend text="Enviar" rout="home" onClick={sendQuestion} ref={button} />
        </FooterArea>
        {teste}
      </QuestionArea>
    </Container>
  );
}