import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components/macro";

export const Cart = () => {
    const dispatch = useDispatch();

    return <>
        <h1>Cart</h1>
    </>;
};

const MainTable = styled.div``;

const TableWrapper = styled.div`
    overflow-x: auto;
`;

const Table = styled.table`
    width: 100%;
    margin: 0 auto;
    border-collapse: collapse;
    box-shadow: ${({ theme }) => theme.shadow[5]};
    border: 1px solid rgba(146, 141, 141, 0.7);
`;

const TableTitle = styled.h1`
    margin-bottom: 20px;
    text-align: center;
`;

const TableHeaderRow = styled.tr`
    background-color: ${({ theme }) => theme.color.secondary.main};

    & > th {
        padding: 20px;
    }
`;
