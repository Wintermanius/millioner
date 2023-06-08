import { createEvent, createStore, sample } from "effector";
import { QuestionsData } from "../types";
import { fetchQuestionsFx } from "../store/api";

export * as appModel from './model'

export const $questionsData = createStore<QuestionsData[]>([])
$questionsData.on(fetchQuestionsFx.doneData, (_, questionsData) => questionsData)

const mountedChanged = createEvent<boolean>()
export const $mounted = createStore<boolean>(false).on(mountedChanged, (_, value) => value)

sample({
  clock: $mounted,
  filter: (mounted) => mounted,
  target: fetchQuestionsFx,
})

const questionNumberChanged = createEvent<number>()
export const $questionNumber = createStore<number>(0).on(questionNumberChanged, (_, value) => value)

const gameOverChanged = createEvent<boolean>()
export const $gameOver = createStore<boolean>(false).on(gameOverChanged, (_, value) => value)

const changeMessage = createEvent<boolean>()
export const $showMessage = createStore<boolean>(false).on(changeMessage, (_, value) => value)

export const events = { mountedChanged, questionNumberChanged, gameOverChanged, changeMessage }
