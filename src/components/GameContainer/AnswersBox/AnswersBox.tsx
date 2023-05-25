import { useUnit } from 'effector-react'
import { FC } from 'react'
import styled from 'styled-components'
import { gameContainerModel } from '..'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

const Answer = styled.div`
  background-color: black;
  width: 45%;
  max-width: 690px;
  padding: 10px;
  display: flex;
  justify-content: center;
  border-radius: 20px;
  border: solid 5px rgb(30, 135, 255);
  margin: 5px;
  color: white;
  font-size: 20px;
  font-weight: bold;
  transition: 0.25s background-color;
  cursor: pointer;
    :hover {
      background-color: #00ff15;
    }
`

interface AnswersBoxProps {
  className?: string
  answers: string[][]
  questionNumber: number
}

export const AnswersBox: FC<AnswersBoxProps> = ({ answers, questionNumber }) => {

  const answersShuffled = answers.length ? answers[questionNumber].sort() : [null]
  const indexChanged = useUnit(gameContainerModel.events.questionNumberChanged)
  console.log(questionNumber)
  return (
    <Container>
      {answersShuffled.map((item, index) => <Answer onClick={() => indexChanged(questionNumber + 1)} key={index}>{item}</Answer>)}
    </Container>
  )
}
