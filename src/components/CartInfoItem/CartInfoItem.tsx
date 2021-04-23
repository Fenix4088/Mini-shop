import React from "react";
import { AppIcons } from "../common/SvgIcons/AppIcons";
import styled from "styled-components/macro";

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
        <InfoItem>
            <InfoIcon>
                <AppIcons icon={icon} width={width} fill={fill ? fill : ""} />
            </InfoIcon>
            <InfoText>
                {message}: {data}
            </InfoText>
        </InfoItem>
    );
});

const InfoItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;

    &:last-child {
        margin-bottom: 0;
    }
`;

const InfoIcon = styled.span`
    min-width: 30px;
    margin-right: 20px;
`;
const InfoText = styled.span`
    color: white;
    font-size: ${({ theme }) => theme.font.size.b2};
    font-weight: 600;
`;
