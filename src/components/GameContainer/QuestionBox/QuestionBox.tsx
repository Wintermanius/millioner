import { FC } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: black;
  border-radius: 20px;
  border: solid 5px rgb(30, 135, 255);
  color: white;
  font-size: 25px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  padding: 20px;
`

interface QuestionBoxProps {
  className?: string
  questions: string[]
  questionNumber: number
}

export const QuestionBox: FC<QuestionBoxProps> = ({ questions, questionNumber }) => {

  return (
    <Container>{questions[questionNumber]}</Container>
  )
}
