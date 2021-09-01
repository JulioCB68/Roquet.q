import React from "react";

import { 
  Container, 
  Logo, 
  Circle,
  Circle2, 
  SubContainer, 
  Image, 
  Content, 
  Title
} from "./styles";

import ImageLogo from '../../assets/images/Logo.svg';
import Banner from '../../assets/images/Banner.svg';
import ImageCircle from '../../assets/images/Circle.svg';
import ImageCircle2 from '../../assets/images/Circle_1.svg';
import LoginIcon from '../../assets/icons/LoginIcon.svg';
import Users from '../../assets/icons/UsersIconWhite.svg';

import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';

export function CreateRoom() {

  return (
    <Container>
      <Logo src={ImageLogo} alt="Logo" />
      <Circle src={ImageCircle} alt="Circle" />
      <SubContainer>
        <Image src={Banner} alt="Banner" />
        <Content>
          <Title> Crie sua própria sala  </Title>
          <Input placeholder="Insira uma senha"/>
          <Button primary text="Criar sala" icon={Users} rout="home" />
        </Content>
      </SubContainer>
      <Circle2 src={ImageCircle2} alt="Circle" />
    </Container>
  );
}

