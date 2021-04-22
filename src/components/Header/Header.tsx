import React from "react";
import styled from "styled-components/macro";
import { useDispatch } from "react-redux";

export const Header = () => {
    const dispatch = useDispatch();

    return <></>;
};

const NavBarWrap = styled.div`
    background-color: ${({ theme }) => theme.color.secondary.main};
`;

const NavBar = styled.nav`
    display: flex;
    justify-content: flex-end;
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
