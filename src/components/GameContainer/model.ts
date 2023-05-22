import { createEvent, createStore, sample } from 'effector'
import { fetchQuestionsFx } from '../../store/api'
import { QuestionsData } from '../../types'

export * from './QuestionBox'
export *from './AnswersBox'

export const $questionsData = createStore<QuestionsData[]>([])
$questionsData.on(fetchQuestionsFx.doneData, (_, questionsData) => questionsData)

const mountedChanged = createEvent<boolean>()

export const $mounted = createStore<boolean>(false).on(mountedChanged, (_, value) => value)

export const events = { mountedChanged }

sample({
  clock: $mounted,
  filter: (mounted) => mounted,
  target: fetchQuestionsFx,
})
