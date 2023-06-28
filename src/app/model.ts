import { combine, createEvent, createStore, sample } from "effector";
import { QuestionsData } from "../types";
import { fetchQuestionsFx } from "../store/api";
import { shuffle } from "lodash";

export * as appModel from './model'

const answersChanged = createEvent<{ answers: string[] }>()

const mountedChanged = createEvent<boolean>()
export const $mounted = createStore<boolean>(false).on(mountedChanged, (_, value) => value)

const questionNumberChanged = createEvent<number>()
export const $questionNumber = createStore<number>(0).on(questionNumberChanged, (_, value) => value)

const gameOverChanged = createEvent<boolean>()
export const $gameOver = createStore<boolean>(false).on(gameOverChanged, (_, value) => value)

const victoryChanged = createEvent<boolean>()
export const $victory = createStore<boolean>(false).on(victoryChanged, (_, value) => value)

const changePhoneMessage = createEvent<boolean>()
export const $showPhoneMessage = createStore<boolean>(false).on(changePhoneMessage, (_, value) => value)

const changePeopleMessage = createEvent<boolean>()
export const $showPeopleMessage = createStore<boolean>(false).on(changePeopleMessage, (_, value) => value)

export const $questionsData = createStore<QuestionsData[]>([])
.on(fetchQuestionsFx.doneData, (_, questionsData) => questionsData)

export const $activeQuestion = combine($questionsData, $questionNumber, (data, index) => {
  return data[index]
})

export const $answers = createStore<string[]>([])
  .on($activeQuestion, (_, question) => shuffle([...question.incorrect_answers, question.correct_answer]))
  .on(answersChanged, (_, { answers }) => answers)

export const events = { mountedChanged, questionNumberChanged, gameOverChanged, changePhoneMessage, changePeopleMessage, answersChanged, victoryChanged }

sample({
  clock: $mounted,
  filter: (mounted) => mounted,
  target: fetchQuestionsFx,
})
