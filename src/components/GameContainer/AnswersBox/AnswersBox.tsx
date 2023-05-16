import { useUnit } from 'effector-react'
import { FC } from 'react'
import { $answers } from './model'
import styled from 'styled-components'

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
  font-size: 25px;
  font-weight: bold;
`

interface AnswersBoxProps {
  className?: string
}

export const AnswersBox: FC<AnswersBoxProps> = () => {
  const answers = useUnit($answers)
  return (
    <Container>
      {answers.map((item) => <Answer>{item}</Answer>)}
    </Container>
  )
}
