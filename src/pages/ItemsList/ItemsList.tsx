import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { RootStateT } from "../../App/store/store";
import { AppDataT } from "../../App/data/appData";
import { MainItem } from "../../components/MainItem/MainItem";

export const ItemsList = () => {
    const shopItems = useSelector<RootStateT, AppDataT>((state) => state.shop.shopItems);
    const dispatch = useDispatch();

    return (
        <>
            <h1>items list</h1>
            <div>Place for filter</div>

            <ItemsWrap>
                {shopItems.map((item) => {
                    return <MainItem key={item.id} itemData={item} />;
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

