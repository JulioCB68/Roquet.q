import React from "react";
import { useHistory } from 'react-router-dom';

import { ButtonComponent, Text, Image } from "./styles";

export function ButtonSend(props) {
  const history = useHistory();
  
  return (
    <ButtonComponent onClick={props.onClick}>
      <Text primary={props.primary}> {props.text} </Text> 
    </ButtonComponent>
  );
}

 

