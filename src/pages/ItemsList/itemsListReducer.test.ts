import {changeItemStatus, InitialStateT, itemsListReducer} from "./itemsListReducer";
import { v1 } from "uuid";

let startState: InitialStateT;
beforeEach(() => {
    startState = {
        shopItems: [
            {
                id: "123",
                name: "Portable Blender",
                label:
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. consectetur adipisicing elit. Autem deleniti doloremque officia. ",
                price: 223,
                isInCart: false
            },
            {
                id: v1(),
                name: "Nail Polish",
                label:
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem deleniti doloremque officia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem deleniti doloremque officia.",
                price: 12,
                isInCart: false
            },
            {
                id: v1(),
                name: "Portable Blender",
                label:
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem deleniti doloremque officia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem deleniti doloremque officia.",
                price: 223,
                isInCart: false
            },
            {
                id: v1(),
                name: "Peel-Off Mask",
                label:
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem deleniti doloremque officia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem deleniti doloremque officia.",
                price: 15,
                isInCart: false
            }
        ]
    };
});

test("should changed item status", () => {
    const endState = itemsListReducer(startState, changeItemStatus("123", true));

    expect(endState.shopItems[0]).toBeTruthy();
    expect(endState.shopItems.every(item => !item.isInCart)).toBeFalsy();
});
