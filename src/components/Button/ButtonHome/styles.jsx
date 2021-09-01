import styled from "styled-components";

import {props} from './ButtonHome';

export const ButtonComponent = styled.button`
  width: 10.813rem;
  
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${props => props.primary ? "row" : "row-reverse"};
  background: ${props => props.primary ? "var(--Blue)" : "var(--Background)"};
  border: 2px solid var(--Blue);
  border-radius: 8px;
  
  padding: 0.75rem;
  margin: 0 1rem;

  cursor: pointer;

  :hover {
    background: ${props => props.primary ? "var(--HoverBlue)" : "var(--Background)"};
    border: 2px solid ${props => props.primary ? "var(--HoverBlue)" : "var(--HoverBlue)"};
  }
`;


export const Text = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5rem;
  margin: 0px 10px;
  color: ${props => props.primary ? "var(--White)" : "var(--Blue)"};
`;

export const Image = styled.img`
  width: 12%;
`;




