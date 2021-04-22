import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import {itemsListReducer} from "../../pages/ItemsList/itemsListReducer";

export type RootStateT = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
    shop: itemsListReducer
});

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootWatcher);

function* rootWatcher() {
}

