import { combine, createEvent, createStore } from "effector";
import { $answers } from "../../../app/model";

const isUsedPhoneCallChanged = createEvent()

export const $isUsedPhoneCall = createStore<boolean>(false).on(isUsedPhoneCallChanged, () => true)
export const $disabledPhone = combine($isUsedPhoneCall, $answers, (a, b) => a || !b?.length)

export const phoneCallEvents = { isUsedPhoneCallChanged }
