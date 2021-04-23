import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootStateT } from "../../App/store/store";
import { AppDataT } from "../../App/data/appData";
import { MainItem } from "../../components/MainItem/MainItem";
import { ItemsWrap } from "../ItemsList/ItemsList";
import { calcTotalPrice } from "../../helpers/helpers";
import { CartInfoItem, CartInfoItemT } from "../../components/CartInfoItem/CartInfoItem";
import styled from "styled-components/macro";

type cartInfoT = {};

export const Cart = () => {
    const cartItems = useSelector<RootStateT, AppDataT>((state) => state.cart.items);
    const price = useMemo(() => calcTotalPrice(cartItems), [cartItems]);

    const cartInfo: Array<CartInfoItemT> = [
        { icon: "fullCart", width: "30", message: "Total items", data: cartItems.length, fill: "#dbb145" },
        { icon: "dollar", width: "20", message: "Total price", data: price, fill: "#dbb145" }
    ];

    return (
        <>
            <CartInfoWrap>
                {cartInfo.map((item) => (
                    <CartInfoItem
                        icon={item.icon}
                        width={item.width}
                        data={item.data}
                        message={item.message}
                        fill={item.fill}
                    />
                ))}
            </CartInfoWrap>

            <ItemsWrap>
                {cartItems.length > 0 ? (
                    cartItems.map((item) => {
                        return <MainItem key={item.id} type={"cart"} itemData={item} />;
                    })
                ) : (
                    <div>Your cart is empty :-(</div>
                )}
            </ItemsWrap>
        </>
    );
};

const CartInfoWrap = styled.div`
    margin-bottom: 50px;
    padding: 10px 20px;
    ${({ theme }) => theme.mixins.flex};
    flex-flow: column nowrap;
    width: max-content;
    background-color: ${({ theme }) => theme.color.primary.main};
    box-shadow: ${({ theme }) => theme.shadow["4"]};
    border-radius: 15px;
`;
