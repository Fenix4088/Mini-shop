import React from "react";
import { AppIcons } from "../common/SvgIcons/AppIcons";

export type CartInfoItemT = {
    message: string;
    data: number;
    icon:
        | "add"
        | "update"
        | "delete"
        | "close"
        | "search"
        | "user"
        | "staff"
        | "cart"
        | "trash"
        | "dollar"
        | "fullCart";
    width: "10" | "20" | "30" | "40" | "50" | "60" | "70" | "80" | "90" | "100";
    fill?: string;
};
export const CartInfoItem = React.memo((props: CartInfoItemT) => {
    const { icon, width, data, fill, message } = props;
    return (
        <div>
            <span>
                <AppIcons icon={icon} width={width} fill={fill ? fill : ""} />
            </span>
            <span>
                {message}: {data}
            </span>
        </div>
    );
});