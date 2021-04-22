import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { itemsListReducer } from "../../pages/ItemsList/itemsListReducer";
import { cartReducer } from "../../pages/Cart/cartReducer";
import { restoreState, saveState } from "../../helpers/localStorage";

export type RootStateT = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
    shop: itemsListReducer,
    cart: cartReducer
});


export const store = createStore(
    rootReducer,
    restoreState<RootStateT>("state", {} as RootStateT),
    composeWithDevTools(applyMiddleware())
);

store.subscribe(() => {
    saveState<RootStateT>("state", {
        shop: store.getState().shop,
        cart: store.getState().cart
    });
});
