import { createStore } from "effector";

export const $money = createStore<string[]>(['$100', '$200', '$300', '$500', '$1 000','$2 000','$4 000','$8 000','$16 000', '$32 000', '$64 000','$125 000','$250 000','$500 000','$1 MILLION'])
