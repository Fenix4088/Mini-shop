import { addToCart, cartReducer, deleteFromCart, InitialStateT } from "./cartReducer";
import { AppDataT, ShopItemT } from "../../App/data/appData";

let startState: InitialStateT;
beforeEach(() => {
    startState = {
        items: [
            {
                id: "2",
                name: "Second item",
                label: "Hello this is label",
                price: 22,
                isInCart: true
            },
            {
                id: "3",
                name: "Third item",
                label: "Hello this is label",
                price: 12,
                isInCart: true
            }
        ]
    };
});

test("should add item to the cart correctly", () => {
    const newItem: ShopItemT = {
        id: "1",
        name: "First item",
        label: "Hello this is label",
        price: 123,
        isInCart: false
    };

    const endState = cartReducer(startState, addToCart(newItem));
    expect(endState.items.length - startState.items.length).toBe(1);
    expect(endState.items[0].isInCart).toBeTruthy();
    expect(endState.items[0].name).toBe("First item");
});

test("should remove item from the cart correctly", () => {
    const endState = cartReducer(startState, deleteFromCart("3"));
    expect(startState.items.length - endState.items.length).toBe(1);
    expect(endState.items.some((item) => item.name !== "Third item")).toBeTruthy();
});
