import styled from "styled-components";

import {props} from './Button';

export const ButtonComponent = styled.button`
  width: 100%;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  background: ${props => props.primary ? "var(--Blue)" : "var(--Background)"};
  border: 2px solid var(--Blue);
  border-radius: 8px;
  
  padding: 0.8rem 7rem;

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

  color: ${props => props.primary ? "var(--White)" : "var(--Blue)"};

  flex-shrink: 0;

  margin: 0 0.625rem;
`;

export const Image = styled.img`
  width: 15%;
`;




