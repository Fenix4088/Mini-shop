import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootStateT } from "../../App/store/store";
import { AppDataT } from "../../App/data/appData";
import { MainItem } from "../../components/MainItem/MainItem";
import { ItemsWrap } from "../ItemsList/ItemsList";
import { calcTotalPrice } from "../../helpers/helpers";

export const Cart = () => {
    const cartItems = useSelector<RootStateT, AppDataT>((state) => state.cart.items);
    const price = useMemo(() => calcTotalPrice(cartItems), [cartItems]);

    return (
        <>
            <h1>Cart</h1>
            <h2>Total items in a cart: {cartItems.length}</h2>
            <h2>Total price: {price}</h2>
            <ItemsWrap>
                {cartItems.map((item) => {
                    return <MainItem key={item.id} type={"cart"} itemData={item} />;
                })}
            </ItemsWrap>
        </>
    );
};
