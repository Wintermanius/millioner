import { createEvent, createStore } from "effector";

const isUsedHalfChanged = createEvent()

export const $isUsedHalf = createStore<boolean>(false).on(isUsedHalfChanged, () => true)

export const halfEvents = { isUsedHalfChanged }
