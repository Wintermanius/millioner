import { useUnit } from 'effector-react'
import { FC } from 'react'
import styled from 'styled-components'
import { shuffle } from 'lodash'
import { $showPeopleMessage, appModel } from '../../../app/model'

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
  answers: (string | number)[][]
  questionNumber: number
  correctAnswer: string | null
}

export const AnswersBox: FC<AnswersBoxProps> = ({ answers, questionNumber, correctAnswer }) => {

  const changePhoneMessage = useUnit(appModel.events.changePhoneMessage)
  const changePeopleMessage = useUnit(appModel.events.changePeopleMessage)
  const indexChanged = useUnit(appModel.events.questionNumberChanged)
  const gameOverChanged = useUnit(appModel.events.gameOverChanged)

  const handleCheckAnswer = (variant: string | null | number) => {
    if(variant === correctAnswer) {
      indexChanged(questionNumber + 1)
      changePhoneMessage(false)
      changePeopleMessage(false)
    } else {
      gameOverChanged(true)
    }
  }

  return (
    <Container>
      {answers && answers.map((item, index) => <Answer onClick={() => handleCheckAnswer(item[0])} key={index}>{item[0]}</Answer>)}
    </Container>
  )
}
