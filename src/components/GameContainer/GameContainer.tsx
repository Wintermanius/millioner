import { FC, useEffect } from 'react'
import { QuestionBox } from './QuestionBox'
import { AnswersBox } from './AnswersBox'
import styled from 'styled-components'
import { useUnit } from 'effector-react'
import { $questionNumber, $questionsData, events } from './model'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  max-width: 1400px;
`

interface GameContainerProps {
  className?: string
}

export const GameContainer: FC<GameContainerProps> = ({className}) => {

  const mountedChanged = useUnit(events.mountedChanged)
  
  const questionNumber = useUnit($questionNumber)
  const questionsData = useUnit($questionsData)

  const questions = questionsData.map((item) => item.question)
  const answers = questionsData.map((item) => [item.correct_answer, ...item.incorrect_answers])
 
  useEffect(() => {
    mountedChanged(true)
  }, [])
  
  return (
    <Container className={className}>
      <QuestionBox questionNumber={questionNumber} questions={questions} />
      <AnswersBox questionNumber={questionNumber} answers={answers} />
    </Container>
  )
}
