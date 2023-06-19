const getRandomScore = (max: number) => {
  return Math.floor(Math.random() * max)
}

const fun: (answers: string[], correctAnswer: string) => string = function(answers: string[], correctAnswer: string) {
  const index = getRandomScore(answers.length)

  if (answers[index] === correctAnswer) {
    const arr = [...answers]
    arr.splice(index, 1)
    return fun(arr, correctAnswer)
  }

  return answers[index]
}

export const updateAnswers = (answers: string[], correctAnswer: string) => {
  const randomAnswer = fun(answers, correctAnswer)
  const result = answers.map((answer) => answer === randomAnswer || answer === correctAnswer ? answer : '')

  return result
}
