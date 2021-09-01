import styled from "styled-components";

import {props} from './ButtonSend';

export const ButtonComponent = styled.button`  
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--Blue);
  border: 2px solid var(--Blue);
  border-radius: 8px;
  
  padding: 0.5rem 1.5rem;

  cursor: pointer;

  :hover {
    background: var(--HoverBlue);
    border: 2px solid var(--HoverBlue);
  }
`;


export const Text = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5rem;
  margin: 0px 10px;
  color: var(--White);
`;

export const Image = styled.img`
  width: 12%;
`;




