import { useUnit } from 'effector-react'
import { FC } from 'react'
import { $questions } from './model'
import styled from 'styled-components'

const Container = styled.div`
  background-color: black;
  border-radius: 20px;
  border: solid 5px rgb(30, 135, 255);
  color: white;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  padding: 20px;
`

interface QuestionBoxProps {
  className?: string
}

export const QuestionBox: FC<QuestionBoxProps> = ({ className }) => {
  const questions = useUnit($questions)
  return (
    <Container>{questions[0]}</Container>
  )
}
