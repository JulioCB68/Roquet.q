import styled from "styled-components";

export const Modal = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: rgba(4, 9, 17, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ContainerModal = styled.div`
    background: #FFFFFF;
    color: #000000;
    width: 40%;
    height: 45%;
    border-radius: .5rem;
    padding: 2rem 5rem;
`;

export const ButtonModal = styled.button`
    width: 100%;
    padding: 2rem;
    margin: 2rem 0;
    background: red;
    cursor: pointer;
`;
