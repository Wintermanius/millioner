export type QuestionsData = {
  category: string
  correct_answer: string
  difficulty: string
  incorrect_answers: string[]
  question: string
  type: string
}

export type ResponseData = {
  response_code: number
  results: QuestionsData[]
}
