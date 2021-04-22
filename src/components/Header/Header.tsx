import React from "react";
import styled from "styled-components/macro";
import { useDispatch } from "react-redux";
import { AppContainer } from "../../styles/GlobalStyles";
import {Button} from "../common/Button/Button";
import { NavLink } from "react-router-dom";
import {routes} from "../../App/routes/routes";

export const Header = () => {
    const dispatch = useDispatch();

    return <NavBarWrap>
        <AppContainer>
            <NavBar>
                <NavLink to={routes.main}>Logo</NavLink>
                <NavLink to={routes.cart}>
                    <Button>Cart [0]</Button>
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

const UserInfoWrap = styled.div`
    margin-right: 30px;
    display: flex;
    justify-content: center;
    align-items: center;

    & > div:first-child {
        margin-right: 10px;
    }
`;
