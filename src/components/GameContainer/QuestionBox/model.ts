import { createStore } from "effector";

export const $questions = createStore<string[]>(['question 1', 'question 2', 'question 3',])
