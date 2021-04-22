import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

export const ItemsList = () => {
    const dispatch = useDispatch();

    return <>
        <h1>items list</h1>
    </>;
};

const StyledForm = styled.form`
    margin: 0 auto;
    padding: 10px 15px;
    width: 30%;
    min-width: 300px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;
    background-color: ${({ theme }) => theme.color.secondary.light};
    box-shadow: ${({ theme }) => theme.shadow[3]};
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #267fd457;
    backdrop-filter: blur(5px);
    z-index: 10;

    & > span {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -100%);
    }
`;
