import Toast from "light-toast/dist/toast";
import {AppDataT} from "../App/data/appData";

export const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("ru", {
        year: "2-digit",
        month: "2-digit",
        day: "numeric"
    });
};

export const calcTotalPrice = (items: AppDataT) => {
    console.log("Calculate price")
    return items.reduce((acc, n) => {
        acc += +n.price
        return acc;
    }, 0)

}

// export const toast = (status: "success" | "fail" | "loading" | "info", message: string) => {
//     switch (status) {
//         case "success":
//             Toast.success(message, 2000);
//             break;
//         case "fail":
//             Toast.fail(message, 2000);
//             break;
//         case "info":
//             Toast.info(message, 2000);
//             break;
//         default:
//             throw new Error("Invoked without params");
//     }
// };