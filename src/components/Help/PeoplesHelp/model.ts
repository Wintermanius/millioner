import { createEvent, createStore } from "effector";

const isUsedPeoplesChanged = createEvent()

export const $isUsedPeoples = createStore<boolean>(false).on(isUsedPeoplesChanged, () => true)

export const peoplesEvents = { isUsedPeoplesChanged }