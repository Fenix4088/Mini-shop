import { AppIcons } from "../common/SvgIcons/AppIcons";
import React from "react";
import { ShopItemT } from "../../App/data/appData";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { changeItemStatus } from "../../pages/ItemsList/itemsListReducer";
import {addToCart, deleteFromCart} from "../../pages/Cart/cartReducer";

type MainItemT = {
    itemData: ShopItemT;
    type: "shop" | "cart"
};
export const MainItem = (props: MainItemT) => {
    const { id, label, price, name, isInCart } = props.itemData;
    const dispatch = useDispatch();

    const addToCartHandler = () => {
        dispatch(changeItemStatus(id, !isInCart));

        if (!isInCart) {
            dispatch(addToCart(props.itemData))
            console.log("Add to cart");

        } else {
            dispatch(deleteFromCart(props.itemData.id))
            console.log("Remove from cart");
        }
    };

    return (
        <ShopItem>
            <CartIconWrap>
                {props.type === "shop" ? <AppIcons icon={"cart"} width={"20"} fill={isInCart ? "red" : ""} onClick={addToCartHandler} /> : <AppIcons icon={"trash"} width={"20"}/> }

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
