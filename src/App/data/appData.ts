import {v1} from "uuid";

export type AppDataT = Array<ShopItemT>;
export type ShopItemT = {
    id: string;
    name: string;
    label: string;
    price: number
};

export const appData: AppDataT = [
    {
        id: v1(),
        name: "Portable Blender",
        label: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem deleniti doloremque officia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem deleniti doloremque officia.",
        price: 223
    },    {
        id: v1(),
        name: "Nail Polish",
        label: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem deleniti doloremque officia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem deleniti doloremque officia.",
        price: 12
    },    {
        id: v1(),
        name: "Portable Blender",
        label: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem deleniti doloremque officia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem deleniti doloremque officia.",
        price: 223
    },    {
        id: v1(),
        name: "Peel-Off Mask",
        label: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem deleniti doloremque officia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem deleniti doloremque officia.",
        price: 15
    },    {
        id: v1(),
        name: "Portable Blender",
        label: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem deleniti doloremque officia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem deleniti doloremque officia.",
        price: 223
    },    {
        id: v1(),
        name: "Wireless Phone Chargers",
        label: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem deleniti doloremque officia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem deleniti doloremque officia.",
        price: 177
    },    {
        id: v1(),
        name: "Face Shield",
        label: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem deleniti doloremque officia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem deleniti doloremque officia.",
        price: 332
    },    {
        id: v1(),
        name: "Phone Lenses",
        label: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem deleniti doloremque officia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem deleniti doloremque officia.",
        price: 332
    },    {
        id: v1(),
        name: "Inflatable Pet Collars",
        label: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem deleniti doloremque officia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem deleniti doloremque officia.",
        price: 552
    },    {
        id: v1(),
        name: "Eyeshadow Stamp",
        label: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem deleniti doloremque officia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem deleniti doloremque officia.",
        price: 555
    },    {
        id: v1(),
        name: "Strapless Backless Bra",
        label: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem deleniti doloremque officia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem deleniti doloremque officia.",
        price: 223
    },    {
        id: v1(),
        name: "Child Wrist Leash",
        label: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem deleniti doloremque officia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem deleniti doloremque officia.",
        price: 33
    },    {
        id: v1(),
        name: "Front Facing Baby Carrier",
        label: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem deleniti doloremque officia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem deleniti doloremque officia.",
        price: 28
    },    {
        id: v1(),
        name: "Wifi Repeater",
        label: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem deleniti doloremque officia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem deleniti doloremque officia.",
        price: 123
    },
]

