import React from "react";
import styled from "styled-components/macro";
import { useSelector } from "react-redux";
import { AppContainer } from "../../styles/GlobalStyles";
import { NavLink } from "react-router-dom";
import { routes } from "../../App/routes/routes";
import { RootStateT } from "../../App/store/store";
import { AppIcons } from "../common/SvgIcons/AppIcons";
import logo from "../../assets/img/logo.svg";

export const Header = () => {
    const totalItemsCount = useSelector<RootStateT, number>((state) => state.cart.items.length);

    return (
        <NavBarWrap>
            <AppContainer>
                <NavBar>
                    <NavLink to={routes.main}>
                        <img src={logo} alt="Logo" />
                    </NavLink>
                    <NavLink to={routes.cart}>
                        <CartWrap>
                            <AppIcons icon={"cart"} width={"30"} />
                            <ItemsCount>
                                <CartIndicator color={totalItemsCount > 0 ? "full" : "empty"}>
                                    {totalItemsCount}
                                </CartIndicator>
                            </ItemsCount>
                        </CartWrap>
                    </NavLink>
                </NavBar>
            </AppContainer>
        </NavBarWrap>
    );
};

const NavBarWrap = styled.div`
    background-color: ${({ theme }) => theme.color.primary.main};
    padding: 15px;
    z-index: 130;
`;

const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;

    & > a {
        margin-right: 15px;

        &:last-child {
            margin-right: 0;
        }
    }
`;

const ItemsCount = styled.div`
    position: absolute;
    top: -20px;
    right: -20px;
`;

const CartWrap = styled.div`
    margin-right: 15px;
    position: relative;
`;

type CardIndicatorT = {
    color: "empty" | "full";
};

const CartIndicator = styled.span<CardIndicatorT>`
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => (props.color === "empty" ? "#dbb145" : "#df4665")};
    color: ${(props) => (props.color === "empty" ? "black" : "white")};
    box-shadow: ${({ theme }) => theme.shadow["4"]};
    border-radius: 50%;
`;
