import React from "react";

import { Container, Image, Title, Text } from "./styles";

import EmptyStateImage from '../../assets/images/EmptyState.svg';

export function EmptyState(props) {
  
  return (
    <Container>
      <Image src={EmptyStateImage}/>
      <Title> Nenhuma pergunta por aqui... </Title> 
      <Text> Faça sua primeira pergunta e envie o código dessa sala para outras pessoas! </Text> 
    </Container>
  );
}

 

