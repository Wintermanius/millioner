import { FC } from 'react'
import { QuestionBox } from './QuestionBox'
import { AnswersBox } from './AnswersBox'
import styled from 'styled-components'
import { useUnit } from 'effector-react'
import { $gameOver } from '../../app/model'

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
  questionNumber: number
  questions: string[]
  correctAnswer: string | null
  answers: (string | number)[][]
  onChangeAnswers: (answers: string[]) => void
}

export const GameContainer: FC<GameContainerProps> = ({className, questionNumber, questions, correctAnswer, answers, onChangeAnswers}) => {
  
  const gameOver = useUnit($gameOver)
  
  let victory
  questionNumber > 9 ? victory = true : victory = false

  return (
    <Container className={className}>
      {victory && <MessageScreen>YOU WIN</MessageScreen>}
      {correctAnswer && !gameOver &&  !victory && <>
        <QuestionBox questionNumber={questionNumber} questions={questions} />
        <AnswersBox correctAnswer={correctAnswer} questionNumber={questionNumber} answers={answers} onChangeAnswers={onChangeAnswers} />
      </>}
      {gameOver && <MessageScreen>GAME OVER</MessageScreen>}
    </Container>
  )
}
