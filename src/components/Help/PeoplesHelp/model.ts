import { combine, createEvent, createStore } from "effector";
import { $answers } from "../../../app/model";

const isUsedPeoplesChanged = createEvent()

export const $isUsedPeoples = createStore<boolean>(false).on(isUsedPeoplesChanged, () => true)
export const $disabledPeople = combine($isUsedPeoples, $answers, (a, b) => a || !b?.length)

export const peoplesEvents = { isUsedPeoplesChanged }