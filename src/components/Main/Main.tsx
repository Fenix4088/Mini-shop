import React from "react";
import { Route, Switch } from "react-router-dom";
import { routes } from "../../App/routes/routes";
import { Cart } from "../../pages/Cart/Cart";
import { ItemsList } from "../../pages/ItemsList/ItemsList";
import { NotFound } from "../../pages/NotFound/NotFound";

export const Main = () => {
    return (
        <main>
            <Switch>
                <Route exact path={routes.main} render={() => <ItemsList />} />
                <Route exact path={routes.cart} render={() => <Cart />} />
                <Route render={() => <NotFound />} />
            </Switch>
        </main>
    );
};
