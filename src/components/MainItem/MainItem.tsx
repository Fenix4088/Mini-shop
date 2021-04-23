import { AppIcons } from "../common/SvgIcons/AppIcons";
import React from "react";
import { ShopItemT } from "../../App/data/appData";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { changeItemStatus } from "../../pages/ItemsList/itemsListReducer";
import { addToCart, deleteFromCart } from "../../pages/Cart/cartReducer";

type MainItemT = {
    itemData: ShopItemT;
    type: "shop" | "cart";
};
export const MainItem = (props: MainItemT) => {
    const { id, label, price, name, isInCart } = props.itemData;
    const dispatch = useDispatch();

    const addToCartHandler = () => {
        if (!isInCart) {
            dispatch(changeItemStatus(id, true));
            dispatch(addToCart(props.itemData));
        } else {
            removeFromCart();
        }
    };

    const removeFromCart = () => {
        dispatch(changeItemStatus(id, false));
        dispatch(deleteFromCart(props.itemData.id));
    };

    return (
        <ShopItem>
            <CartIconWrap>
                {props.type === "shop" ? (
                    <AppIcons icon={"cart"} width={"20"} fill={isInCart ? "#df4665" : ""} onClick={addToCartHandler} />
                ) : (
                    <AppIcons icon={"trash"} width={"20"} onClick={removeFromCart} />
                )}
            </CartIconWrap>
            <ItemName>{name}</ItemName>
            <ItemPrice>{price}</ItemPrice>
            <ItemWrap>
                <AppIcons icon={"staff"} width={"80"} fill={"#4579db"} />
            </ItemWrap>
            <ItemDesc>
                <ItemDescText>{label}</ItemDescText>
                <ItemDescInfoLink>
                    <a href="#">Learn more</a>
                </ItemDescInfoLink>
            </ItemDesc>
        </ShopItem>
    );
};

const ItemDesc = styled.div`
    position: absolute;
    height: 150px;
    bottom: -400px;
    padding: 10px;
    ${({ theme }) => theme.mixins.flexColumnCenter}
    font-size: ${({ theme }) => theme.font.size.s1};
    transition: all 0.2s ease;
    background-color: rgba(69, 121, 219, 0.4);
    backdrop-filter: blur(10px);
`;

export const ShopItem = styled.div`
    position: relative;
    padding: 30px 20px;
    width: 60%;
    ${({ theme }) => theme.mixins.flexColumnCenter}
    margin-bottom: 50px;
    overflow: hidden;
    border: 1px solid ${({ theme }) => theme.color.primary.light};
    box-shadow: ${({ theme }) => theme.shadow["4"]};

    @media (min-width: ${({ theme }) => theme.mediaQuery.tablet}) {
      width: 30%;
      min-height: 300px;
    }

    @media (min-width: ${({ theme }) => theme.mediaQuery.laptop}) {
      width: calc(25% - 40px);
    }

    :hover ${ItemDesc} {
        bottom: 0;
    }
`;

export const CartIconWrap = styled.div`
    position: absolute;
    top: 8px;
    right: 10px;
`;

export const ItemName = styled.div`
    margin-bottom: 10px;
    text-align: center;
    font-size: ${({ theme }) => theme.font.size.b2};
`;

export const ItemPrice = styled.div`
    position: relative;
    margin-bottom: 10px;
    text-align: center;
    font-size: ${({ theme }) => theme.font.size.b1};

    &::before {
        content: "$";
        position: absolute;
        font-size: ${({ theme }) => theme.font.size.b3};
        top: -50%;
        left: -50%;
        transform: translate(-50%, 15%);
    }
`;

const ItemWrap = styled.div`
    margin-bottom: 10px;
`;

const ItemDescText = styled.div`
    margin-bottom: 10px;
    color: white;
`;
const ItemDescInfoLink = styled.div`
    font-size: ${({ theme }) => theme.font.size.b1};
`;
