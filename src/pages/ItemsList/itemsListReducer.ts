// * Types

import {appData, AppDataT} from "../../App/data/appData";

type ActionsT = any;

export type InitialStateT = {
    shopItems: AppDataT
};

//* Actions
const reducerActions = {

};



// * reducer
const initialState: InitialStateT = {
    shopItems: appData,
};

export const itemsListReducer = (state = initialState, action: ActionsT): InitialStateT => {
    switch (action.type) {

        default:
            return state;
    }
};

// * AC




