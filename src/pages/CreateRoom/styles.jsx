import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: var(--Background);
`;

export const Logo = styled.img`
  width: 10%;
  margin: 2rem 15rem 5rem;
`;

export const Circle = styled.img`
  position: absolute;
  width: 633.55px;
  height: 633.55px;
  top: -385px;
  left: 1600px;
`;

export const Circle2 = styled.img`
  position: absolute;
  width: 212px;
  height: 212px;
  top: 800px;
  left: 1172px;
`;

export const SubContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0 5rem;
`;

export const Image = styled.img`
  width: 80%;
  display: flex;
`;

export const Content = styled.div`
  width: 40%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 0 0 15rem;
`;

export const Title = styled.h1`
  color: var(--Black);
  font-size: 1.75rem;
  font-weight: bold;
  line-height: 2.625rem;
`;




