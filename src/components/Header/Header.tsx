import React from "react";
import styled from "styled-components/macro";
import {useDispatch, useSelector} from "react-redux";
import { AppContainer } from "../../styles/GlobalStyles";
import {Button} from "../common/Button/Button";
import { NavLink } from "react-router-dom";
import {routes} from "../../App/routes/routes";
import {RootStateT} from "../../App/store/store";
import { AppIcons } from "../common/SvgIcons/AppIcons";

export const Header = () => {
    const dispatch = useDispatch();
    const totalItems = useSelector<RootStateT, number>(state => state.cart.items.length)

    return <NavBarWrap>
        <AppContainer>
            <NavBar>
                <NavLink to={routes.main}>Logo</NavLink>
                <NavLink to={routes.cart}>
                    <CartWrap>
                        <AppIcons icon={"cart"} width={"30"} fill={"red"}/>
                        <ItemsCount>{totalItems}</ItemsCount>
                    </CartWrap>

                </NavLink>
            </NavBar>
        </AppContainer>
    </NavBarWrap>;
};

const NavBarWrap = styled.div`
    background-color: ${({ theme }) => theme.color.secondary.main};
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
  top: -14px;
  right: -9px;
`;

const CartWrap = styled.div`
  position: relative;
`;
