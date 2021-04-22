import React from "react";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components/macro";
import {RootStateT} from "../../App/store/store";
import {AppDataT} from "../../App/data/appData";
import {MainItem} from "../../components/MainItem/MainItem";
import {ItemsWrap} from "../ItemsList/ItemsList";

export const Cart = () => {
    const cartItems = useSelector<RootStateT, AppDataT>((state) => state.cart.items);
    const dispatch = useDispatch();

    return (
        <>
            <h1>Cart</h1>

            <ItemsWrap>
                {cartItems.map((item) => {
                    return <MainItem key={item.id} type={"cart"} itemData={item} />;
                })}
            </ItemsWrap>
        </>
    );
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
