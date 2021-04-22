import { AppIcons } from "../common/SvgIcons/AppIcons";
import React from "react";
import { ShopItemT } from "../../App/data/appData";
import styled from "styled-components";

type MainItemT = {
    itemData: ShopItemT;
};
export const MainItem = (props: MainItemT) => {
    const { id, label, price, name, isInCart } = props.itemData;
    return (
        <ShopItem>
            <CartIconWrap>
                <AppIcons icon={"cart"} width={"20"} />
            </CartIconWrap>
            <div>{name}</div>
            <div>{"$" + price}</div>
            <AppIcons icon={"staff"} width={"80"} />
            <div>{label}</div>
        </ShopItem>
    );
};

export const ShopItem = styled.div`
    position: relative;
    padding: 10px 20px;
    width: calc(25% - 40px);
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    border: 1px solid ${({ theme }) => theme.color.primary.light};
    box-shadow: ${({ theme }) => theme.shadow["4"]};
`;

export const CartIconWrap = styled.div`
    position: absolute;
    top: 0;
    right: 0;
`;