// * Types

import {appData, AppDataT} from "../../App/data/appData";

type ActionsT = ReturnType<typeof changeItemStatus>;

export type InitialStateT = {
    shopItems: AppDataT
};

//* Actions
const reducerActions = {
    CHANGE_ITEM_STATUS: "itemsListReducer/CHANGE_ITEM_STATUS" as const,
};



// * reducer
 const initialState: InitialStateT = {
    shopItems: appData,
};

export const itemsListReducer = (state = initialState, action: ActionsT): InitialStateT => {
    const {CHANGE_ITEM_STATUS} = reducerActions
    switch (action.type) {
        case CHANGE_ITEM_STATUS: {
            return {
                ...state,
                shopItems: state.shopItems.map(item => item.id === action.id ? {...item, isInCart: action.status} : item)
            }
        }

        default:
            return state;
    }
};

// * AC

export const changeItemStatus = (id: string, status: boolean) => {
    return {
        type: reducerActions.CHANGE_ITEM_STATUS,
        id,
        status,
    } as const;
}




