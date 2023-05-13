import { createEvent, createStore } from "effector";

const isUsedPhoneCallChanged = createEvent()

export const $isUsedPhoneCall = createStore<boolean>(false).on(isUsedPhoneCallChanged, () => true)

export const phoneCallEvents = { isUsedPhoneCallChanged }
