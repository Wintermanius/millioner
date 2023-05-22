import { createEffect } from "effector";
import { QuestionsData, ResponseData } from "../types";

export const fetchQuestionsFx = createEffect<void, QuestionsData[], Error>(async () => {
  const response = await fetch('https://opentdb.com/api.php?amount=15&category=15&difficulty=easy&type=multiple')
  const data: ResponseData = await response.json()
  return data?.results
})
