import { createStore } from "effector";
import { fetchQuestionsFx } from "./api";

export const $questions = createStore({})
$questions.on(fetchQuestionsFx.doneData, (_, questions) => questions)
