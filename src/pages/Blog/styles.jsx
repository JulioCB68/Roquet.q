import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: var(--White);
  padding: 0 10rem;
`;

export const Logo = styled.img`
  width: 10%;
  margin: 2rem 0rem;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-shrink: 0;
`;

export const QuestionArea = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  font-size: 1.25rem;
  line-height: 2.625rem;
  color: var(--Black);
  padding: 1.5rem 0;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  border: 1px solid red;
  resize: none;
  padding: 0.75rem 1rem 6rem 1rem;
  border: 2px solid #A1B2CD;
  border-radius: 0 0.5rem 0.5rem 0.5rem;
`;

export const FooterArea = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 1rem;
`;

export const ImageAsk = styled.img`
  width: 13%;
  margin: 2rem 0rem;
`;

export const Ask = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: var(--LightBlue);
  margin: 1rem 0;
  border-radius: 0 0.5rem 0.5rem;

  > header {
    display: flex;
    align-items: center;
    align-self: flex-start;
    padding: 2.5rem 1.5rem;

    > img {
      width: 3.125rem;
      margin: 0 1rem 0 0;
    }
  }

  > footer {
    width: 30%;
    display: flex;
    align-items: center;
    align-self: flex-end;
    padding:  1.625rem 2rem;

    > div {
      width: 100%;
      align-items: center;
      justify-content: flex-end;
      display: flex;

      > img {
        width: 8%;
        margin: 0 0.75rem;
      }
    }
  }
`;



