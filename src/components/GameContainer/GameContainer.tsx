import { FC, useEffect } from 'react'
import { QuestionBox } from './QuestionBox'
import { AnswersBox } from './AnswersBox'
import styled from 'styled-components'
import { useUnit } from 'effector-react'
import { $gameOver, $questionNumber, $questionsData, events } from './model'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  max-width: 1400px;
`
const MessageScreen = styled.div`
  position: absolute;
  top: -500px;
  left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto; 
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  width: 300px;
  height: 100px;
  padding: 10px;
  border-radius: 20px;
  border: solid 5px rgb(30, 135, 255);
  color: white;
  font-size: 40px;
  font-weight: bold;
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
  const correctAnswer = questionsData.length ? questionsData[questionNumber].correct_answer : null

  const gameOver = useUnit($gameOver)
  
  let victory

  questionNumber > 9 ? victory = true : victory = false

  useEffect(() => {
    mountedChanged(true)
  }, [])
  
  return (
    <Container className={className}>
      {victory && <MessageScreen>YOU WIN</MessageScreen>}
      {!gameOver &&  !victory && <>
        <QuestionBox questionNumber={questionNumber} questions={questions} />
        <AnswersBox correctAnswer={correctAnswer} questionNumber={questionNumber} answers={answers} />
      </>}
      {gameOver && <MessageScreen>GAME OVER</MessageScreen>}
    </Container>
  )
}
