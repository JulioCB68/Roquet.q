import React from "react";
import { useHistory } from 'react-router-dom';

import { ButtonComponent, Text, Image } from "./styles";

export function Button(props) {
  const history = useHistory();
  
  return (
    <ButtonComponent primary={props.primary} onClick={() => history.push(props.rout)} >
      <Image src={props.icon} alt="Icon" />
      <Text primary={props.primary}> {props.text} </Text> 
    </ButtonComponent>
  );
}

 

