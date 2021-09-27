import styled from "styled-components";

export const Modal = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(4, 9, 17, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerModal = styled.div`
  background: #ffffff;
  color: #000000;
  width: 40%;
  height: 45%;
  border-radius: 0.5rem;
  padding: 2rem 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ButtonModal = styled.button`
  width: 100%;
  padding: 1rem 2.5rem;
  margin: 0 0.5rem;
  background: red;
  cursor: pointer;
  border-radius: 0.5rem;
	font-family: 'Poppins', sans-serif;
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 24px;
  :first-child {
    background-color: #e5eaf1;
		color: #4D5E77;
  }
  :last-child {
		background-color: #e83f5b;
		color: #FAFAFA;
  }
`;

export const TitleModal = styled.h1`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 34px;
  text-align: center;
  color: #0d114f;
`;

export const TextModal = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  color: #4d5e77;
  padding: 2rem 0 0;
`;

export const SubContainerModal = styled.div``;

export const SubTextModal = styled.p`
  text-align: center;
  padding: 0 0 2rem;
	font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  color: #4d5e77;
  padding: 2rem 0;
`;

export const ContainerButtonModal = styled.div`
  display: flex;
`;
