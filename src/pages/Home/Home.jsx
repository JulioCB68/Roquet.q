import React from "react";

import { 
  Container, 
  Logo, 
  Circle,
  Circle2, 
  SubContainer, 
  Image, 
  Content, 
  Title, 
  Or, 
  Separator, 
  OrText
} from "./styles";

import ImageLogo from '../../assets/images/Logo.svg';
import Banner from '../../assets/images/Banner.svg';
import ImageCircle from '../../assets/images/Circle.svg';
import ImageCircle2 from '../../assets/images/Circle_1.svg';
import LoginIcon from '../../assets/icons/LoginIcon.svg';
import Users from '../../assets/icons/UsersIcon.svg';

import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';

export function Home() {

  return (
    <Container>
      <Logo src={ImageLogo} alt="Logo" />
      <Circle src={ImageCircle} alt="Circle" />
      <SubContainer>
        <Image src={Banner} alt="Banner" />
        <Content>
          <Title> Entre como participante </Title>
          <Input placeholder="Código da sala"/>
          <Button text="Entrar na sala" icon={LoginIcon} rout="home" primary />
          <Or>
            <Separator /> <OrText> ou </OrText> <Separator />
          </Or>
          <Title> Crie sua própria sala, de forma fácil </Title>
          <Button text="Criar sala" icon={Users} rout="create_room" />
        </Content>
      </SubContainer>
      <Circle2 src={ImageCircle2} alt="Circle" />
    </Container>
  );
}

