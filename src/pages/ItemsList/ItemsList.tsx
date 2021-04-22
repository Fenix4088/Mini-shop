import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootStateT } from "../../App/store/store";
import { AppDataT } from "../../App/data/appData";
import { MainItem } from "../../components/MainItem/MainItem";

export const ItemsList = () => {
    const shopItems = useSelector<RootStateT, AppDataT>((state) => state.shop.shopItems);

    return (
        <>
            <ItemsWrap>
                {shopItems.map((item) => {
                    return <MainItem key={item.id} type={"shop"} itemData={item} />;
                })}
            </ItemsWrap>
        </>
    );
};

export const ItemsWrap = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
`;
