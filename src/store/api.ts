import { createEffect } from "effector";

export const fetchQuestionsFx = createEffect(async () => {
  const response = await fetch('https://opentdb.com/api.php?amount=15&category=22&difficulty=easy&type=multiple')
  return response.json()
})
