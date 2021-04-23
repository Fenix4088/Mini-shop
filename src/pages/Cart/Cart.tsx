import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootStateT } from "../../App/store/store";
import { AppDataT } from "../../App/data/appData";
import { MainItem } from "../../components/MainItem/MainItem";
import { ItemsWrap } from "../ItemsList/ItemsList";
import { calcTotalPrice } from "../../helpers/helpers";
import { CartInfoItem, CartInfoItemT } from "../../components/CartInfoItem/CartInfoItem";

type cartInfoT = {};

export const Cart = () => {
    const cartItems = useSelector<RootStateT, AppDataT>((state) => state.cart.items);
    const price = useMemo(() => calcTotalPrice(cartItems), [cartItems]);

    const cartInfo: Array<CartInfoItemT> = [
        { icon: "fullCart", width: "30", message: "Total items in a cart", data: cartItems.length },
        { icon: "dollar", width: "20", message: "Total price", data: price }
    ];

    return (
        <>
            <div>Your cart</div>

            {cartInfo.map((item) => (
                <CartInfoItem icon={item.icon} width={item.width} data={item.data} message={item.message} />
            ))}
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

