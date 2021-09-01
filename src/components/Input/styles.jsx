import styled from "styled-components";

export const InputComponent = styled.input`
  width: 100%;
  
  display: flex;
  align-items: center;
  
  background: transparent;
  border: 2px solid var(--GreyBlue);
  border-radius: 8px;
  
  margin: 1.5rem 0 1.125rem;
  padding: 0.8rem 0.75rem 0.8rem 1rem;

  color: var(--Black);

  ::placeholder,
  ::-webkit-input-placeholder {
    color: var(--GreyBlue);
  }
  :-ms-input-placeholder {
     color: var(--GreyBlue);
  }
`;






