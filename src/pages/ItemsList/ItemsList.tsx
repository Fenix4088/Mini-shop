import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootStateT } from "../../App/store/store";
import { AppDataT } from "../../App/data/appData";
import { MainItem } from "../../components/MainItem/MainItem";
import { Filter } from "../../components/Filter/Filter";

export type filterParamT = "name" | "price" | "none";

export const ItemsList = () => {
    const shopItems = useSelector<RootStateT, AppDataT>((state) => state.shop.shopItems);
    const [filterParam, setFilterParam] = useState<filterParamT>("none");

    const filteredData = (data: AppDataT, filterLabel: filterParamT): AppDataT => {
        if (filterLabel !== "none") {
            return [...data].sort((a, b) => {
                if (a[filterLabel] < b[filterLabel]) {
                    return -1;
                }
                if (a[filterLabel] > b[filterLabel]) {
                    return 1;
                }
                return 0;
            });
        }

        return data;
    };

    const onFilterChange = useCallback((value: filterParamT) => setFilterParam(value), [setFilterParam]);

    return (
        <>
            <Filter filterChange={onFilterChange} currentFilterVal={filterParam} />
            <ItemsWrap>
                {filteredData(shopItems, filterParam).map((item) => {
                    return <MainItem key={item.id} type={"shop"} itemData={item} />;
                })}
            </ItemsWrap>
        </>
    );
};

export const ItemsWrap = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-items: center;

    @media (min-width: ${({ theme }) => theme.mediaQuery.tablet}) {
        flex-flow: row wrap;
        justify-content: space-between;
    }
`;
