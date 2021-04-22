// * Types

import {AppDataT, ShopItemT} from "../../App/data/appData";

type ActionsT = ReturnType<typeof addToCart> | ReturnType<typeof deleteFromCart>;

export type InitialStateT = {
    items: AppDataT;
};

// * Actions
const reducerActions = {
    ADD_TO_CART: "cartReducer/ADD_TO_CART" as const,
    DELETE_FROM_CART: "cartReducer/DELETE_FROM_CART" as const,
};

// * reducer
const initialState: InitialStateT = {
    items: [] as AppDataT
};

export const cartReducer = (state = initialState, action: ActionsT): InitialStateT => {
    const {ADD_TO_CART, DELETE_FROM_CART} = reducerActions;
    switch (action.type) {

        case ADD_TO_CART:
            return {
                ...state,
                items: [{...action.item, isInCart: true}, ...state.items]
            }
            case DELETE_FROM_CART:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.id)
            }

        default:
            return state;
    }
};

// * AC

export const addToCart = (item: ShopItemT) => {
    return {
        type: reducerActions.ADD_TO_CART,
        item
    } as const;
};

export const deleteFromCart = (id: string) => {
    return {
        type: reducerActions.DELETE_FROM_CART,
        id
    } as const;
};
