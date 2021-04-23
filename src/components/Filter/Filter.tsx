import React, { useState } from "react";
import { AppIcons } from "../common/SvgIcons/AppIcons";
import { RadioButtons } from "../common/RadioButtons/RadioButtons";
import { filterParamT } from "../../pages/ItemsList/ItemsList";
import styled from "styled-components";

type FilterPropsT = {
    filterChange: (param: filterParamT) => void;
    currentFilterVal: filterParamT;
};

export const Filter = (props: FilterPropsT) => {
    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState<boolean>(false);
    const onFilterChange = (value: filterParamT) => props.filterChange(value);

    const filterIconClickHandler = () => setIsMobileFilterOpen(!isMobileFilterOpen);
    return (
        <>
            <FilterIcon onClick={filterIconClickHandler}>
                <AppIcons icon={"filter"} width={"20"} fill={"#dbb145"} />
            </FilterIcon>
            <FilterWrap position={isMobileFilterOpen ? "0px" : "-200px"}>
                <FilterTitle>Set filter:</FilterTitle>
                <RadioButtons
                    options={["name", "price", "none"]}
                    onChangeOption={onFilterChange}
                    value={props.currentFilterVal}
                />
            </FilterWrap>
        </>
    );
};

type FilterWrapT = {
    position: string;
};

const FilterWrap = styled.div<FilterWrapT>`
    padding: 15px 5px 5px;
    position: absolute;
    top: 135px;
    left: ${(props) => props.position};
    display: flex;
    flex-flow: column nowrap;
    background-color: ${({ theme }) => theme.color.primary.light};
    color: white;
    transition: all 0.2s ease;
    z-index: 20;

    & > label {
        margin-bottom: 10px;
        @media (min-width: ${({ theme }) => theme.mediaQuery.tablet}) {
            margin-bottom: 0;
        }
    }

    @media (min-width: ${({ theme }) => theme.mediaQuery.tablet}) {
        position: static;
        margin: 0 auto 20px;
        padding: 10px 20px;
        display: flex;
        flex-flow: row nowrap;
        width: max-content;
        border-radius: 10px 10px 0 0;
    }

    @media (min-width: ${({ theme }) => theme.mediaQuery.laptop}) {
    }
`;

const FilterTitle = styled.div`
    display: none;
    margin-right: 15px;
    font-size: ${({ theme }) => theme.font.size.b1};

    @media (min-width: ${({ theme }) => theme.mediaQuery.tablet}) {
        display: block;
    }
`;

const FilterIcon = styled.div`
    width: 10px;
    height: 10px;
    display: block;
    @media (min-width: ${({ theme }) => theme.mediaQuery.tablet}) {
        display: none;
    }
`;
