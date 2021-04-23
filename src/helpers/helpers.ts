import { AppDataT } from "../App/data/appData";

export const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("ru", {
        year: "2-digit",
        month: "2-digit",
        day: "numeric"
    });
};

export const calcTotalPrice = (items: AppDataT) => {
    return items.reduce((acc, n) => {
        acc += +n.price;
        return acc;
    }, 0);
};
