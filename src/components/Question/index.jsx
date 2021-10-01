import React, { useContext } from "react";

import { Ask, ContainerQuestion } from "../../pages/Blog/styles";

import Avatar from "../../assets/icons/Avatar.svg";
import Read from "../../assets/icons/Read.svg";
import Delete from "../../assets/icons/Delete.svg";

import Modal from "../../components/Modal";

import { QuestionContext } from "../../context/question";

export function Question() {
  const { questions, isModalIsVisible, setIsModalIsVisible } =
    useContext(QuestionContext);

  const quest = questions.map((item) => (
    <Ask key={item.id}>
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
            <Modal id={item.id} question={item.question} />
          ) : null}
        </div>
      </footer>
    </Ask>
  ));

  return <ContainerQuestion>{quest}</ContainerQuestion>;
}
