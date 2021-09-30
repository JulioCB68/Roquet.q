import React from "react";

import { Ask, ContainerQuestion } from "../../pages/Blog/styles";

import Avatar from "../../assets/icons/Avatar.svg";
import Read from "../../assets/icons/Read.svg";
import Delete from "../../assets/icons/Delete.svg";

import Modal from "../../components/Modal";

import { useQuestions } from "../../hooks/localStorage";
import { useModal } from "../../hooks/modal";

export function Question() {
  const { questions } = useQuestions();
  const { isModalIsVisible, setIsModalIsVisible } = useModal();

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
