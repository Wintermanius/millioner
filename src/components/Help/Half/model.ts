import { combine, createEvent, createStore, sample } from "effector";
import { $activeQuestion, $answers, events } from "../../../app/model";
import { updateAnswers } from "./lib/updateAnswers";

const isUsedHalfChanged = createEvent()

export const $isUsedHalf = createStore<boolean>(false).on(isUsedHalfChanged, () => true)
export const $disabled = combine($isUsedHalf, $answers, (a, b) => a || !b?.length)

sample({
  clock: isUsedHalfChanged,
  fn: () => {
    return {
      answers: updateAnswers($answers.getState(), $activeQuestion.getState().correct_answer)
    }
  },
  target: events.answersChanged,
})

export const halfEvents = { isUsedHalfChanged }
